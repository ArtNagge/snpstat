const dropdownFilters = document.querySelector('#dropdown_filters');
const ddmClose = document.querySelector('#ddm-close');
const filter = document.querySelector('#filter');

filter.addEventListener('click', () => {
    if(dropdownFilters.classList.contains('visible')) {
        dropdownFilters.classList.remove(('visible'))
    } else {
        dropdownFilters.classList.add(('visible'));
    }
});

ddmClose.addEventListener('click', () => {
    dropdownFilters.classList.remove(('visible'));
})