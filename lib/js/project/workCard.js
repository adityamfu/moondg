import { projectsData } from './dbProject.js';

const ownWorksGrid = document.getElementById('ownWorksGrid');
const teamWorksGrid = document.getElementById('teamWorksGrid');

projectsData.forEach((project) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const firstImage = project.images[0];

  card.innerHTML = `
<a href="./project.html?id=${project.id}">
<img src="${firstImage}" alt="${project.title}" title="${project.title}" />
<h2 class="ttl">${project.title}</h2>
<p class="desc">${project.desc}</p>
</a>
`;

  if (project.category === 'own') {
    ownWorksGrid.appendChild(card);
  } else if (project.category === 'team') {
    teamWorksGrid.appendChild(card);
  }
});
