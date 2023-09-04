import { projectsData } from './db.js';

function setProjectContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  const selectedProject = projectsData.find((project) => project.id === projectId);

  if (selectedProject) {
    const titleElement = document.querySelector('.breadcrumb b.ttl');
    const descriptionElement = document.querySelector('.desc');
    const cardElements = document.querySelectorAll('.grid .card');
    const webElement = document.querySelector('.web');
    const platfElement = document.querySelector('.platf');
    const stackElement = document.querySelector('.stack');
    const sourceElement = document.querySelector('.source');
    document.querySelector('.website-link').href = selectedProject.website;

    titleElement.textContent = selectedProject.title;
    descriptionElement.textContent = selectedProject.description;
    selectedProject.images.forEach((imagePath, index) => {
      const imageElement = document.createElement('img');
      imageElement.src = imagePath;
      imageElement.alt = selectedProject.title;

      if (index < cardElements.length) {
        cardElements[index].appendChild(imageElement);
      }
    });

    document.title = selectedProject.title;
    webElement.innerHTML = '<b class="web front">WEBSITE</b> ';
    const webLink = document.createElement('a');
    webLink.href = selectedProject.website;
    webLink.textContent = selectedProject.website;
    webLink.innerHTML += '<i class="fa-solid fa-up-right-from-square fa-xs"></i>';
    webElement.appendChild(webLink);

    platfElement.innerHTML = '<b class="platf front">PLATFORM</b> ' + selectedProject.platform;
    stackElement.innerHTML = '<b class="stack front">STACK</b> ' + selectedProject.stack;

    sourceElement.innerHTML = '<b class="source front">SOURCE</b> ';
    const sourceLink = document.createElement('a');
    sourceLink.href = selectedProject.source;
    sourceLink.textContent = selectedProject.source;
    sourceLink.innerHTML += '<i class="fa-solid fa-up-right-from-square fa-xs"></i>';
    sourceElement.appendChild(sourceLink);
  } else {
    const titleElement = document.querySelector('.breadcrumb b.ttl');
    titleElement.textContent = 'Proyek tidak ditemukan';
  }
}

setProjectContent();
