window.onload = function() {
    clearSearchField();
    navLink();
  };

function clearSearchField() {
    var clearSearch = document.querySelector('.typed');

    clearSearch.onclick = function() {
        document.querySelector('.dash-search input').value='';
    }
}

function navLink() {
    var mobNav = document.querySelector('.mobile-nav');
    var aside = document.querySelector('.aside');
    var content = document.querySelector('.content');

    mobNav.onclick = function() {
        aside.classList.toggle('active');
        content.classList.toggle('disabled');
    }
}