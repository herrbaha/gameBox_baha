const squares = document.querySelectorAll('div');
console.log(squares);
random = Math.floor(Math.random() *16);
console.log(random );
squares.forEach((square, index) => {
 square.addEventListener('click', click);
})