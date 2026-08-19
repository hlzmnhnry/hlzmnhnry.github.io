(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  function updateLabel() {
    var isDark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = nextTheme;

      try {
        localStorage.setItem('theme', nextTheme);
      } catch (error) {
        // The selected theme still applies for the current page view.
      }

      updateLabel();
    });

    updateLabel();
  }

  document.querySelectorAll('.citation_copy').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.getElementById(button.dataset.copyTarget);
      if (!target || !navigator.clipboard) return;

      navigator.clipboard.writeText(target.textContent).then(function () {
        var originalLabel = button.textContent;
        button.textContent = 'Copied';
        window.setTimeout(function () {
          button.textContent = originalLabel;
        }, 1600);
      });
    });
  });
}());
