const toggleButton = document.getElementById('toggleButton');
const cardContainer = document.querySelector('.pcard');
const iconElement = toggleButton.querySelector('i');

let isGridView = localStorage.getItem('isGridView') === 'true';

function toggleView() {
  if (isGridView) {
    cardContainer.classList.remove('grid-layout');
    iconElement.classList.remove('fa-square');
    iconElement.classList.add('fa-border-all');
  } else {
    cardContainer.classList.add('grid-layout');
    iconElement.classList.remove('fa-border-all');
    iconElement.classList.add('fa-square');
  }

  isGridView = !isGridView;

  localStorage.setItem('isGridView', isGridView.toString());
}

if (isGridView) {
  cardContainer.classList.add('grid-layout');
  iconElement.classList.remove('fa-border-all');
  iconElement.classList.add('fa-square');
}

toggleButton.addEventListener('click', toggleView);
