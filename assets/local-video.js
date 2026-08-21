(function () {
  'use strict';

  var localHosts = ['localhost', '127.0.0.1', '::1'];
  if (localHosts.indexOf(window.location.hostname) === -1) return;

  document.querySelectorAll('[data-local-video]').forEach(function (video) {
    var source = video.querySelector('source');
    var status = video.parentElement.querySelector('[data-local-video-status]');
    if (!source) return;

    var sourceUrl = source.src;
    var sourceType = source.type;
    var objectUrl;

    video.pause();
    video.controls = false;
    video.setAttribute('aria-busy', 'true');
    if (status) status.hidden = false;

    source.remove();
    video.removeAttribute('src');
    video.load();

    fetch(sourceUrl, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('Video request failed with status ' + response.status);
        return response.blob();
      })
      .then(function (blob) {
        objectUrl = URL.createObjectURL(blob);
        video.addEventListener('loadedmetadata', function () {
          video.controls = true;
          video.removeAttribute('aria-busy');
          if (status) status.hidden = true;
        }, { once: true });
        video.src = objectUrl;
        video.load();
      })
      .catch(function () {
        var fallback = document.createElement('source');
        fallback.src = sourceUrl;
        fallback.type = sourceType;
        video.appendChild(fallback);
        video.controls = true;
        video.removeAttribute('aria-busy');
        video.load();
        if (status) status.hidden = true;
      });

    window.addEventListener('pagehide', function () {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    }, { once: true });
  });
}());
