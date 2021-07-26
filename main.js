const squares = document.querySelectorAll('div');
//console.log(squares);
random = Math.floor(Math.random() *16);
//console.log(random );
squares.forEach((square, index) => {
  square.addEventListener('click', click);
 
  if (index == random) {
    square.addEventListener('click', function() {
      
      this.style.backgroundColor = '#008080';
      alert('Congratulations');
    if (this.style.backgroundColor = '#008080'){
     return window.location.reload();
     }
    })
  }
})
let lastClickDiv;

function click() {
  if (lastClickDiv) {
    lastClickDiv.style.backgroundColor = '#9E9D24' ;
  }
  this.style.backgroundColor = '#D4E157';
  lastClickDiv = this;
}
// || index == random +2