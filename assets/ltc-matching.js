(function () {
  'use strict';

  var explorer = document.querySelector('[data-matching-explorer]');
  if (!explorer) return;

  var compare = explorer.querySelector('[data-terrain-compare]');
  var slider = explorer.querySelector('[data-terrain-slider]');
  var tabs = Array.prototype.slice.call(explorer.querySelectorAll('[data-matching-tab]'));
  var examples = [];

  function setReveal(value) {
    compare.style.setProperty('--reveal', value + '%');
  }

  function setText(selector, value) {
    var element = explorer.querySelector(selector);
    if (element) element.textContent = value;
  }

  function showExample(id, moveFocus) {
    var example = examples.find(function (candidate) { return candidate.id === id; });
    if (!example) return;

    tabs.forEach(function (tab) {
      var selected = tab.dataset.matchingTab === id;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && moveFocus) tab.focus();
    });

    explorer.querySelector('[role="tabpanel"]').setAttribute('aria-labelledby', 'matching-tab-' + id);

    var aerial = explorer.querySelector('[data-aerial-image]');
    var landcover = explorer.querySelector('[data-landcover-image]');
    var matches = explorer.querySelector('[data-matches-image]');

    aerial.src = example.aerial;
    aerial.alt = 'Aerial query for terrain class: ' + example.label;
    landcover.src = example.landcover;
    matches.src = example.matchesImage;
    matches.alt = 'Geometrically verified matches for terrain class: ' + example.label;

    setText('[data-example-sample]', example.sample);
    setText('[data-example-title]', example.label);
    setText('[data-example-assessment]', example.assessment);
    setText('[data-example-description]', example.description);
    ['terrainShare', 'verifiedMatches', 'pnpInliers', 'rotationError', 'translationError'].forEach(function (metric) {
      setText('[data-metric="' + metric + '"]', example[metric]);
    });
  }

  slider.addEventListener('input', function () { setReveal(slider.value); });

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { showExample(tab.dataset.matchingTab, false); });
    tab.addEventListener('keydown', function (event) {
      var nextIndex;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (typeof nextIndex === 'undefined') return;
      event.preventDefault();
      showExample(tabs[nextIndex].dataset.matchingTab, true);
    });
  });

  fetch(explorer.dataset.examples)
    .then(function (response) {
      if (!response.ok) throw new Error('Could not load matching examples.');
      return response.json();
    })
    .then(function (data) {
      examples = data.examples || [];
      showExample('built-up', false);
      explorer.classList.add('is-ready');
    })
    .catch(function () {
      explorer.classList.add('has-static-example');
    });
}());
