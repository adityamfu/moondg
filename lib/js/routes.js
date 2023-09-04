function setActiveMenu() {
  const menuItems = document.querySelectorAll('.navbar ul li a');

  menuItems.forEach((menuItem) => {
    if (window.location.href.includes(menuItem.getAttribute('href'))) {
      menuItem.classList.add('active');
    } else {
      menuItem.classList.remove('active');
    }
  });
}

setActiveMenu();
