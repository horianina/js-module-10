import { theme } from './theme';
const bodyRef = document.querySelector('body');
const switchInputRef = document.querySelector('.js-switch-input');

saveTheme();

export const switchFn = function (e) {
  if (e.target.checked) {
    bodyRef.classList.add(theme.DARK);
    bodyRef.classList.remove(theme.LIGHT);
    localStorage.setItem('theme', theme.DARK);
  } else {
    bodyRef.classList.add(theme.LIGHT);
    bodyRef.classList.remove(theme.DARK);
    localStorage.setItem('theme', theme.LIGHT);
  }
};

function saveTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
  }

  if (savedTheme === 'dark-theme') {
    switchInputRef.checked = true;
  }
}