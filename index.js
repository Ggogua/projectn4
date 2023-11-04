const searchButton = document.getElementById('the-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function() {
  searchInput.classList.toggle('active');
});
