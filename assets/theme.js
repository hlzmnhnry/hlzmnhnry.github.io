(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (!toggle) return;

  function updateLabel() {
    var isDark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

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
}());
