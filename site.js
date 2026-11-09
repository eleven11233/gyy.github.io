(() => {
  let saved;
  try { saved = localStorage.getItem('eleven-theme'); } catch (_) {}
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const update = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', dark ? '切换浅色模式' : '切换深色模式');
    };
    update();
    button.addEventListener('click', () => {
      const value = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = value;
      try { localStorage.setItem('eleven-theme', value); } catch (_) {}
      update();
    });
  });
})();
