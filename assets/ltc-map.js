(function () {
  var explorer = document.querySelector('[data-ltc-map]');

  if (!explorer) return;

  var mapElement = explorer.querySelector('[data-route-map]');
  var statusElement = explorer.querySelector('[data-route-status]');
  var fitButton = explorer.querySelector('[data-route-fit]');
  var toggleButtons = explorer.querySelectorAll('[data-route-toggle]');
  var backgroundButtons = explorer.querySelectorAll('[data-background-toggle]');
  var previewImage = explorer.querySelector('[data-preview-image]');
  var previewRoute = explorer.querySelector('[data-preview-route]');
  var previewTitle = explorer.querySelector('[data-preview-title]');
  var previewCaption = explorer.querySelector('[data-preview-caption]');
  var previewCampaigns = explorer.querySelector('[data-preview-campaigns]');
  var previewCampaignOptions = explorer.querySelector('[data-preview-campaign-options]');
  var previewCoordinates = explorer.querySelector('[data-preview-coordinates]');
  var previewX = explorer.querySelector('[data-preview-x]');
  var previewY = explorer.querySelector('[data-preview-y]');
  var previewZ = explorer.querySelector('[data-preview-z]');
  var mapDataUrl = explorer.dataset.mapData;
  var previewDataUrl = explorer.dataset.previewData;
  var placeholderImage = previewImage.getAttribute('src');

  if (!mapElement || !mapDataUrl || !previewDataUrl || !window.L) {
    if (statusElement) statusElement.textContent = 'The interactive map could not be initialized.';
    return;
  }

  var map = L.map(mapElement, {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: -9,
    maxZoom: 1,
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 90
  });
  var lineRenderer = L.canvas({ padding: 0.2 });
  var backgroundLayers = {};
  var routeLayers = {};
  var markerEntries = [];
  var mapBounds;
  var selectedPreview;
  var campaignsByRoute = {};

  function formatCoordinate(value) {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
  }

  function formatAltitude(value) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value);
  }

  function setSelectedMarker(previewId) {
    markerEntries.forEach(function (entry) {
      var markerElement = entry.marker.getElement();
      if (markerElement) markerElement.classList.toggle('is-selected', entry.preview.id === previewId);
    });
  }

  function resetPreview() {
    selectedPreview = null;
    previewImage.src = placeholderImage;
    previewImage.alt = 'Map illustration shown before a preview point is selected';
    previewRoute.textContent = 'Data preview';
    previewTitle.textContent = 'Select a point';
    previewCaption.textContent = 'Click one of the numbered markers to inspect a sample location.';
    previewCampaigns.hidden = true;
    previewCampaignOptions.replaceChildren();
    previewCoordinates.hidden = true;
    previewZ.textContent = '—';
    setSelectedMarker(null);
  }

  function showCampaign(preview, route, campaign) {
    var sample = preview.images && preview.images[campaign.id];

    previewImage.src = sample && sample.image ? sample.image : placeholderImage;
    previewImage.alt = route.label + ', ' + preview.label + ', campaign ' + campaign.label;
    previewCaption.textContent = sample && sample.caption
      ? sample.caption
      : campaign.season + ' campaign · preview image coming soon.';
    previewZ.textContent = sample && Number.isFinite(sample.z)
      ? formatAltitude(sample.z) + ' m'
      : '—';

    previewCampaignOptions.querySelectorAll('button').forEach(function (button) {
      var isActive = button.dataset.campaignId === campaign.id;
      button.setAttribute('aria-pressed', String(isActive));
      button.classList.toggle('is-active', isActive);
    });
  }

  function showPreview(preview, route) {
    var campaigns = campaignsByRoute[route.id] || [];
    var defaultCampaign = campaigns.find(function (campaign) {
      return campaign.id === preview.defaultCampaign;
    }) || campaigns[0];

    selectedPreview = preview;
    previewRoute.textContent = route.label;
    previewTitle.textContent = preview.label;
    previewX.textContent = formatCoordinate(preview.x) + ' m';
    previewY.textContent = formatCoordinate(preview.y) + ' m';
    previewCoordinates.hidden = false;
    previewCampaignOptions.replaceChildren();

    campaigns.forEach(function (campaign) {
      var button = document.createElement('button');

      button.type = 'button';
      button.className = 'route_campaign';
      button.dataset.campaignId = campaign.id;
      button.setAttribute('aria-pressed', 'false');
      button.title = campaign.season + ' campaign';
      button.textContent = campaign.label;
      button.addEventListener('click', function () {
        showCampaign(preview, route, campaign);
      });
      previewCampaignOptions.appendChild(button);
    });

    previewCampaigns.hidden = campaigns.length === 0;
    if (defaultCampaign) showCampaign(preview, route, defaultCampaign);
    setSelectedMarker(preview.id);
  }

  function getVisibleBounds() {
    var visibleBounds = L.latLngBounds([]);

    Object.keys(routeLayers).forEach(function (routeId) {
      var routeState = routeLayers[routeId];
      if (map.hasLayer(routeState.group)) visibleBounds.extend(routeState.bounds);
    });

    return visibleBounds;
  }

  function fitVisibleRoutes() {
    var visibleBounds = getVisibleBounds();
    map.fitBounds(visibleBounds.isValid() ? visibleBounds : mapBounds, {
      padding: [24, 24],
      animate: false
    });
  }

  function fetchJson(url) {
    return fetch(url).then(function (response) {
      if (!response.ok) throw new Error('Map data request failed with status ' + response.status);
      return response.json();
    });
  }

  Promise.all([fetchJson(mapDataUrl), fetchJson(previewDataUrl)])
    .then(function (responses) {
      var data = responses[0];
      var previewData = responses[1];
      var previews = previewData.previews;

      campaignsByRoute = previewData.campaigns || {};

      mapBounds = L.latLngBounds(
        [data.bounds.minY, data.bounds.minX],
        [data.bounds.maxY, data.bounds.maxX]
      );

      map.createPane('ltcBackground');
      map.getPane('ltcBackground').style.zIndex = 200;

      (data.backgrounds || [{
        id: 'default',
        label: 'Map',
        image: data.background
      }]).forEach(function (background) {
        backgroundLayers[background.id] = L.imageOverlay(background.image, mapBounds, {
          className: 'route_map__background route_map__background--' + background.id,
          interactive: false,
          pane: 'ltcBackground'
        });
      });

      function setBackground(backgroundId) {
        var requestedLayer = backgroundLayers[backgroundId];

        if (!requestedLayer) return;

        Object.keys(backgroundLayers).forEach(function (id) {
          if (map.hasLayer(backgroundLayers[id])) map.removeLayer(backgroundLayers[id]);
        });
        requestedLayer.addTo(map);

        backgroundButtons.forEach(function (button) {
          var isActive = button.dataset.backgroundToggle === backgroundId;
          button.setAttribute('aria-pressed', String(isActive));
          button.classList.toggle('is-active', isActive);
        });
      }

      setBackground(data.defaultBackground || Object.keys(backgroundLayers)[0]);

      data.routes.forEach(function (route) {
        var routeCoordinates = route.coordinates.map(function (coordinate) {
          return [coordinate[1], coordinate[0]];
        });
        var routeGroup = L.layerGroup();
        var routeBounds = L.latLngBounds(routeCoordinates);
        var routeLabel = document.createElement('span');

        routeLabel.textContent = route.label + ' — ' + route.detail;

        L.polyline(routeCoordinates, {
          renderer: lineRenderer,
          color: '#111111',
          opacity: 0.58,
          weight: 7,
          lineCap: 'round',
          lineJoin: 'round',
          interactive: false
        }).addTo(routeGroup);

        L.polyline(routeCoordinates, {
          renderer: lineRenderer,
          color: route.color,
          opacity: 1,
          weight: 3.5,
          lineCap: 'round',
          lineJoin: 'round'
        }).bindTooltip(routeLabel, { sticky: true }).addTo(routeGroup);

        previews.filter(function (preview) {
          return preview.routeId === route.id;
        }).forEach(function (preview, previewIndex) {
          var markerIcon = L.divIcon({
            className: 'ltc_preview_marker',
            html: '<span>' + (previewIndex + 1) + '</span>',
            iconSize: [26, 26],
            iconAnchor: [13, 13]
          });
          var marker = L.marker([preview.y, preview.x], {
            icon: markerIcon,
            keyboard: true,
            title: preview.label,
            zIndexOffset: 200
          });
          var tooltipLabel = document.createElement('span');

          tooltipLabel.textContent = preview.label;
          marker.bindTooltip(tooltipLabel, { direction: 'top', offset: [0, -10] });
          marker.on('add', function () {
            var markerElement = marker.getElement();
            if (markerElement) {
              markerElement.style.setProperty('--marker-color', route.color);
              markerElement.classList.toggle('is-selected', selectedPreview && selectedPreview.id === preview.id);
            }
          });
          marker.on('click', function () {
            showPreview(preview, route);
          });
          marker.addTo(routeGroup);
          markerEntries.push({ marker: marker, preview: preview });
        });

        routeGroup.addTo(map);
        routeLayers[route.id] = {
          bounds: routeBounds,
          group: routeGroup
        };
      });

      map.setMaxBounds(mapBounds.pad(0.08));
      L.control.scale({ imperial: false, maxWidth: 150, position: 'bottomleft' }).addTo(map);
      map.fitBounds(mapBounds, { padding: [10, 10], animate: false });
      var fittedZoom = map.getBoundsZoom(mapBounds, false, [10, 10]);

      map.setMinZoom(fittedZoom - 0.5);
      map.setMaxZoom(fittedZoom + 2.25);

      backgroundButtons.forEach(function (button) {
        var backgroundId = button.dataset.backgroundToggle;

        button.disabled = !backgroundLayers[backgroundId];
        button.addEventListener('click', function () {
          setBackground(backgroundId);
        });
      });

      toggleButtons.forEach(function (button) {
        var routeId = button.dataset.routeToggle;
        var routeState = routeLayers[routeId];

        button.disabled = !routeState;
        button.classList.toggle('is-active', Boolean(routeState));

        button.addEventListener('click', function () {
          var shouldShow = button.getAttribute('aria-pressed') !== 'true';

          button.setAttribute('aria-pressed', String(shouldShow));
          button.classList.toggle('is-active', shouldShow);

          if (shouldShow) {
            routeState.group.addTo(map);
          } else {
            map.removeLayer(routeState.group);
            if (selectedPreview && selectedPreview.routeId === routeId) resetPreview();
          }
        });
      });

      fitButton.disabled = false;
      fitButton.addEventListener('click', fitVisibleRoutes);
      statusElement.hidden = true;
    })
    .catch(function (error) {
      explorer.classList.add('route_explorer--error');
      statusElement.textContent = 'The interactive map could not be loaded. ' + error.message;
    });
}());
