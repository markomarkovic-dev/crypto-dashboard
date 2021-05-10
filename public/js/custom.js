window.onload = function() {
    clearSearchField();
  };

function clearSearchField() {
    var clearSearch = document.querySelector('.typed');

    clearSearch.onclick = function() {
        document.querySelector('.dash-search input').value='';
    }
}