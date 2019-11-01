const field = document.querySelector('#input-file')
const outField = document.querySelector('#output-input-file')
const succField = document.querySelector('#add-input-file')

succField.addEventListener('click', function( event ) {
    event.preventDefault();

    field.click();
    return false;
 });  

 field.addEventListener( "change", function( event ) {  
    outField.innerHTML = this.value;  
});  