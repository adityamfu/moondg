const toggleNavbarBtn = document.getElementById('toggleNavbar');
const navbarOverlay = document.getElementById('navbarOverlay');

function openNavbar() {
  navbarOverlay.style.display = 'block';
}

function closeNavbar() {
  navbarOverlay.style.display = 'none';
}

function isNavbarOpen() {
  return navbarOverlay.style.display === 'block';
}

toggleNavbarBtn.addEventListener('click', function () {
  if (isNavbarOpen()) {
    closeNavbar();
  } else {
    openNavbar();
  }
});

navbarOverlay.addEventListener('click', function (event) {
  if (event.target === navbarOverlay) {
    closeNavbar();
  }
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function enableDarkMode() {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
  localStorage.setItem('mode', 'dark');
}

function enableLightMode() {
  body.classList.remove('dark-mode');
  darkModeToggle.checked = false;
  localStorage.setItem('mode', 'light');
}

const userPreference = localStorage.getItem('mode');

if (userPreference === 'dark') {
  enableDarkMode();
} else {
  enableLightMode();
}
darkModeToggle.addEventListener('change', function () {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});
