'use strict';

let formSearch, inputSearch, btnSearch, openSearch;

formSearch = document.querySelector('#form_search');
inputSearch = document.querySelector('#input_search');
btnSearch = document.querySelector('#btn_search');

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();

    openSearch = `https://www.google.com/search?q=${inputSearch.value}&sitesearch=https://dovgaldima.pp.ua`;
    if(!inputSearch) {
        inputSearch.placeholder = 'Заповніть поле пошуку!';
        return false;
    } else {
        window.open(openSearch);
    }
    formSearch.reset();
})

console.log(inputSearch.value)