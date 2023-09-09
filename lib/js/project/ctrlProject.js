import { projectsData } from './dbProject.js';

function setProjectContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  const selectedProject = projectsData.find((project) => project.id === projectId);

  if (selectedProject) {
    const titleElement = document.querySelector('.breadcrumb b.ttl');
    const descriptionElement = document.querySelector('.desc');
    const yearsElement = document.querySelector('.years');

    titleElement.textContent = selectedProject.title;
    yearsElement.textContent = selectedProject.years;
    descriptionElement.textContent = selectedProject.description;

    const cardElement = document.querySelector('.pcard');
    selectedProject.images.forEach((imagePath, index) => {
      const imageLinkElement = document.createElement('a');
      imageLinkElement.href = imagePath;
      imageLinkElement.setAttribute('data-lightbox', 'gallery');

      const imageElement = document.createElement('img');
      imageElement.src = imagePath;
      imageElement.alt = selectedProject.title;

      imageLinkElement.appendChild(imageElement);
      cardElement.appendChild(imageLinkElement);
    });

    document.title = selectedProject.title;

    const attributesToShow = [
      { attribute: 'website', label: 'WEBSITE', isLink: true },
      { attribute: 'platform', label: 'PLATFORM', isLink: false },
      { attribute: 'stack', label: 'STACK', isLink: false },
      { attribute: 'source', label: 'SOURCE', isLink: true },
      { attribute: 'download', label: 'DOWNLOAD', isLink: true },
    ];

    const aboutElement = document.querySelector('.about');

    attributesToShow.forEach(({ attribute, label, isLink }) => {
      if (selectedProject[attribute]) {
        const dataItemElement = document.createElement('div');
        dataItemElement.classList.add('data-item');

        const dataLabelElement = document.createElement('span');
        dataLabelElement.classList.add('data');
        dataLabelElement.textContent = `${label}`;

        const dataValueElement = document.createElement('b');
        dataValueElement.classList.add('data-value');
        if (isLink) {
          const linkElement = document.createElement('a');
          linkElement.href = selectedProject[attribute];
          linkElement.textContent = selectedProject[attribute];
          dataValueElement.appendChild(linkElement);
        } else {
          dataValueElement.textContent = selectedProject[attribute];
        }

        dataItemElement.appendChild(dataLabelElement);
        dataItemElement.appendChild(dataValueElement);

        aboutElement.appendChild(dataItemElement);
      }
    });
  } else {
    const titleElement = document.querySelector('.breadcrumb b.ttl');
    titleElement.textContent = 'Proyek tidak ditemukan';
  }
}

setProjectContent();
