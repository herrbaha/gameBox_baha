const squares = document.querySelectorAll('div');
random = Math.floor(Math.random() *30);

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

//click function

let lastClickDiv;

function click() {
  if (lastClickDiv) {
    lastClickDiv.style.backgroundColor = '#9E9D24' ;
  }
  this.style.backgroundColor = '#D4E157';
  lastClickDiv = this;
}
