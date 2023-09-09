import { projectsData } from './dbProject.js';

const totalProjects = projectsData.length;

function getCurrentIndex() {
  const urlParams = new URLSearchParams(window.location.search);
  const currentIndex = parseInt(urlParams.get('id')) || 1; // Default: 1
  return currentIndex;
}

function setNextIndex() {
  const currentIndex = getCurrentIndex();
  const nextIndex = currentIndex + 1;
  if (nextIndex <= totalProjects) {
    window.location.href = `project.html?id=${nextIndex}`;
  }
}

function setPrevIndex() {
  const currentIndex = getCurrentIndex();
  const prevIndex = currentIndex - 1;
  if (prevIndex >= 1) {
    window.location.href = `project.html?id=${prevIndex}`;
  }
}

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

if (nextButton) {
  nextButton.addEventListener('click', setNextIndex);
}

if (prevButton) {
  prevButton.addEventListener('click', setPrevIndex);
}

// Memeriksa indeks saat ini
const currentIndex = getCurrentIndex();

// Mengatur tombol "Prev" berdasarkan indeks saat ini
if (currentIndex === 1) {
  prevButton.style.display = 'none';
} else {
  prevButton.style.display = 'inline-block';
}

// Mengatur tombol "Next" berdasarkan indeks saat ini
if (currentIndex === totalProjects) {
  nextButton.style.display = 'none';
} else {
  nextButton.style.display = 'inline-block';
}
