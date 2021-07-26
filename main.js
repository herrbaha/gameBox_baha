const squares = document.querySelectorAll('div');
console.log(squares);
random = Math.floor(Math.random() *16);
console.log(random );
squares.forEach((square, index) => {
  square.addEventListener('click', click);
  
  if (index == random) {
    square.addEventListener('click', function() {
      this.style.backgroundColor = 'green';
      alert('Congratulations');
    if (this.style.backgroundColor = 'green'){
     return window.location.reload();
     }
    })
  }
})
let lastClickDiv;

function click() {
  if (lastClickDiv) {
    lastClickDiv.style.backgroundColor = 'red' ;
  }
  this.style.backgroundColor = 'yellow';
  lastClickDiv = this;
}
// index == random +2