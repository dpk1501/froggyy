let player = document.querySelector('.player');
let moveBy = 10;
window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = 0;
    player.style.bottom = 0;
});
window.addEventListener('keyup', (e) => {
  switch (e.key) {
      case 'ArrowLeft':
          player.style.left = parseInt(player.style.left) - moveBy - 50 + 'px';
          break;
      case 'ArrowRight':
          player.style.left = parseInt(player.style.left) + moveBy + 50 + 'px';
          break;
  }
});

let triangleTop = -100;
let triangleLeft2 = Math.random() * 2000;
let triangleLeft1 = Math.random() * 2000;
let triangleLeft3 = Math.random() * 2000;
let triangleLeft4 = Math.random() * 2000;
let triangleLeft5 = Math.random() * 2000;

function moveTriangle(){
  let triangle1 = document.getElementById('enemy1');
  let triangle2 = document.getElementById('enemy2');
  let triangle3 = document.getElementById('enemy3');
  let triangle4 = document.getElementById('enemy4');
  let triangle5 = document.getElementById('enemy5');
  triangle1.style.top = triangleTop + 'px';
  triangle1.style.left = triangleLeft1 + 'px';
  triangle2.style.top = triangleTop + 'px';
  triangle2.style.left = triangleLeft2 + 'px';
  triangle3.style.top = triangleTop + 'px';
  triangle3.style.left = triangleLeft3 + 'px';
  triangle4.style.top = triangleTop + 'px';
  triangle4.style.left = triangleLeft4 + 'px';
  triangle5.style.top = triangleTop + 'px';
  triangle5.style.left = triangleLeft5 + 'px';
  // alert('Before: ' + triangleTop);
  triangleTop += 50;
  // alert('After: ' + triangleTop);
  if (triangleTop == 1000){
    triangleTop = -100;
    triangleLeft1 = Math.random() * 2000;
    triangleLeft2 = Math.random() * 2000;
    triangleLeft3 = Math.random() * 2000;
    triangleLeft4 = Math.random() * 2000;
    triangleLeft5 = Math.random() * 2000;
  }
}

let triangleInterval = setInterval(moveTriangle, 50);

let tiangleHeight1 = parseInt(triangle1.css('height'));
let tiangleHeight2 = parseInt(triangle2.css('height'));
let tiangleHeight3 = parseInt(triangle3.css('height'));
let tiangleHeight4 = parseInt(triangle4.css('height'));
let tiangleHeight5 = parseInt(triangle5.css('height'));

let tiangleWidth1 = parseInt(triangle1.css('width'));
let tiangleWidth2 = parseInt(triangle2.css('width'));
let tiangleWidth3 = parseInt(triangle3.css('width'));
let tiangleWidth4 = parseInt(triangle4.css('width'));
let tiangleWidth5 = parseInt(triangle5.css('width'));

let playerWidth = parseInt(player.css('width'));
let playerHeight = parseInt(player.css('height'));
let playerLeft = parseInt(player.css('left'));
let playerBottom = parseInt(player.css('bottom'));


if (playerLeft == triangleLeft1 && playerBottom == triangleTop || playerLeft == triangleLeft2 && playerBottom == triangleTop|| playerLeft == triangleLeft3 && playerBottom== triangleTop || playerLeft == triangleLeft4  && playerBottom == triangleTop || playerLeft == triangleLeft5  && playerBottom == triangleTop) {
  alert('stop');
  $('.block3').show();
  $('.block2').hide();
}