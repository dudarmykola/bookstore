document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('menu-toggle').addEventListener('click', function () {
    this.classList.toggle('header-bar__menu-toggle--open');
    document.getElementById('left-bar').classList.toggle('left-bar--collapsed');
  });

  document.getElementById('support-toggle').addEventListener('click', () => {
    document.getElementById('help').classList.toggle('help--collapsed');
  });
});