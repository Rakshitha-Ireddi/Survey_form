// By Rakshitha Ireddi
let currentPage = 1;

function showPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.style.display = 'none');
  pages[pageNumber - 1].style.display = 'block';
  currentPage = pageNumber;
}

function nextPage() {
  if (currentPage < 3) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

showPage(1);
