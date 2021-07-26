const squares = document.querySelectorAll('div');
console.log(squares);

squares.forEach((square, index) => {
  square.addEventListener('click', click);
  random = Math.floor(Math.random() *16);
      console.log(random );
  if (index == random) {
    square.addEventListener('click', function() {
      
      this.style.backgroundColor = '#00838F';
      alert('Congratulations');
    if (this.style.backgroundColor = '#00838F'){
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