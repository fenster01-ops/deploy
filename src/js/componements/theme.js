// /js/main.js

const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');

// Функция для получения текущей темы из localStorage или установки значения по умолчанию
function getTheme() {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme ? storedTheme : 'Light'; // Если в localStorage ничего нет, возвращаем 'Light'
}

// Функция для установки темы (обновляет атрибут data-theme и localStorage)
function setTheme(theme) {
  body.dataset.theme = theme;
  localStorage.setItem('theme', theme);

  // Обновляем состояние checkbox
  themeToggle.checked = theme === 'Dark';
}

// Применяем тему при загрузке страницы
function applyThemeOnLoad() {
  const currentTheme = getTheme(); // Получаем тему из localStorage (или 'Light')
  setTheme(currentTheme); // Устанавливаем тему, сохраняем в localStorage и обновляем checkbox
}

// Обработчик изменения состояния checkbox
if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    const isChecked = themeToggle.checked;
    const newTheme = isChecked ? 'Dark' : 'Light';
    setTheme(newTheme);
  });
} else {
  console.warn('Кнопка переключения темы (theme-toggle) не найдена!');
}

// Вызываем функцию применения темы при загрузке страницы
applyThemeOnLoad();
