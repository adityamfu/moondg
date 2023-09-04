var isAutoScrolling = false;
var scrollInterval;

function autoScroll() {
  var scrollStep = 5;
  scrollInterval = setInterval(function () {
    if (window.scrollY < document.documentElement.scrollHeight - window.innerHeight) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
      isAutoScrolling = false;

      navigateToNextPage();
    }
  }, 20);
  isAutoScrolling = true;
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
  isAutoScrolling = false;
}

function toggleAutoScroll() {
  if (!isAutoScrolling) {
    autoScroll();
  } else {
    stopAutoScroll();
  }
}

document.getElementById('preview-button').addEventListener('click', function (event) {
  event.preventDefault();
  toggleAutoScroll();
  sessionStorage.setItem('autoScrollStatus', isAutoScrolling ? 'enabled' : 'disabled');
});

window.addEventListener('scroll', function () {
  if (isAutoScrolling) {
    var bttmElement = document.querySelector('.bttm');
    if (bttmElement) {
      var targetOffset = bttmElement.getBoundingClientRect().bottom;
      if (targetOffset <= window.innerHeight) {
        stopAutoScroll();

        navigateToNextPage();
      }
    }
  }
});

function navigateToNextPage() {
  if (window.location.href.indexOf('./works.html?preview=true') !== -1) {
    window.location.href = './design.html';
  } else {
    window.location.href = './works.html?preview=true';
  }
}
