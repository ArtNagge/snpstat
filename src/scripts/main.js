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

$("#age").ionRangeSlider({
    skin: "big",
    min: 0,
    max: 21,
    from: 0,
    to: 21,
    type: 'double',
    grid: false,
    grid_num: 10,
    hide_min_max: true,
    postfix: "+"
});

$('.infoCard__slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 2,
    variableWidth: true,
    arrows: false,
    slidesToScroll: 1,
});

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}