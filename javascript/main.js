// ГЛАВНЫЙ ЭКРАН И СМЕНЫ ЭКРАНА


$(document).ready(function(){
    $(".frog").mousemove(function(event) {
      let eye = $(".eye");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
    });
    $(document).ready(() => {
      $('.start').on('click', () => {
        $('.block2').show();
        $('.block1').hide();
        let obstacleInterval = setInterval(moveObstacle, 5);
      });
    })

// ГЛАЗА

$(document).ready(function(){
    $(".block1").mousemove(function(event) {
      let eye = $(".eye1");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  })

  $(document).ready(function(){
    $(".block1").mousemove(function(event) {
      let eye = $(".eye2");
      let x = (eye.offset().left) + (eye.width() / 2);
      let y = (eye.offset().top) + (eye.height() / 2);
      let rad = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  })
// КОД ОСНОВНОЙ ИГРЫ

// персонаж

let character = document.getElementById("character");
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue ('bottom'));
let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue ('left'));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue ('width'));
let ground = document.getElementById('ground');
let groundBottom = parseInt(window.getComputedStyle(ground).getPropertyValue ('bottom'));
let groundHeight = parseInt(window.getComputedStyle(ground).getPropertyValue ('height'));
let isJumping = false;
let upTime;
let downTime;

function jump() {
    if(isJumping) return;
    upTime = setInterval(() => {
        if(characterBottom >= groundHeight + 250){
            clearInterval(upTime);
            downTime = setInterval(() => {
                if(characterBottom <= groundHeight + 10){
                    clearInterval(downTime);
                    isJumping = false;
                }
                characterBottom -= 10;
                character.style.bottom = characterBottom +'px';
                }, 20);
        }
characterBottom += 10;
character.style.bottom = characterBottom + 'px';
isJumping = true;
}, 20);
}

// препятствия
let randomTimeout = Math.floor(Math.random() * 1000) + 1000;
let obstacleLeft = 2000;
let obstacleBottom = 150;
let obstacleWidth = 30;
let obstacleHeight = Math.floor(Math.random() * 50) + 50;

let greenClicked = 0
let leafClicked = 0

function moveObstacle() {
    let obstacle = document.querySelector('.obstacle');
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = obstacleBottom + 'px';
    obstacle.style.width = obstacleWidth + 'px';
    obstacle.style.height = obstacleHeight + 'px';

    obstacleLeft -= 5;
    if (obstacleLeft == 0){
      obstacleLeft = 2000;
      let obstacleHeight = Math.floor(Math.random() * 1000);
    }

    if (characterLeft >= obstacleLeft - characterWidth && characterLeft <= obstacleLeft + obstacleWidth && characterBottom <= obstacleBottom + obstacleHeight){
        if (greenClicked == 0) {
          $('.block3').show();
          $('.block2').hide();
        }
        else if (leafClicked == 0){
          $('.block4').show();
          $('.block2').hide();
        }
        else {
          $('.block5').show();
          $('.block2').hide();
        }

        }
    }




window.setInterval(function(){

    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

    $('.obstacle').css({
      'background-color' : randomColor,
    });

  }, 5000);


// ПРЫЖКИ ПО КЛИКУ И НАЖАТИЮ
function control(e) {
    if (e.key = 'ArrowUp' || e.key == ' '){
        jump();
    }
}
document.addEventListener('click', jump);
document.addEventListener('keydown', control);



// ПЕРВАЯ МИНИ ИГРА

  setInterval(function(){
    $('#red').css('background', 'grey');
  }, 500); 
  setInterval(function(){
    $('#green').css('background', 'lime');
  }, 1000); 
  setInterval(function(){
    $('#yellow').css('background', 'yellow');
  }, 1000); 
  setInterval(function(){
    $('#red').css('background', 'red');
  }, 1300);
  setInterval(function(){
    $('#green').css('background', 'grey');
  }, 1300);
  setInterval(function(){
    $('#yellow').css('background', 'grey');
  }, 1500);


$(function() {
  $('.one').click(function(){
    $(this).css('background', 'red');

  });
} );

$(function() {
  $('.two').click(function(){
    $(this).css('background', 'blue');

  });
} );

setTimeout(function(){
  $('.speechbubble').show();
}, 7000);

$('.cross').click(function(){
   $('.speechbubble').hide();
  });


$( function() {
  $( "#pull" ).draggable({
    containment: "#bar"
  });
} );


// ВТОРАЯ МИНИ ИГРА

$('.green').click(function(){
  greenClicked += 1;
  $('.block3').hide();
  $('.block2').show();

  let obstacleLeft = 2000;
  let obstacleBottom = 150;
  let obstacleWidth = 30;
  let obstacleHeight = Math.floor(Math.random() * 50) + 50;
  let obstacleInterval = setInterval(moveObstacle, 5);
 });

 $('.ewleaf1').click(function(){
  $(this).hide();
 });
 $('.ewleaf2').click(function(){
  $(this).hide();
 });
 $('.ewleaf3').click(function(){
  $(this).hide();
 });
 $('.ewleafimposter').click(function(){
  $(this).hide();
 });

 $('.uberi1').click(function(){
  $('.helpfrog').show();
 })

 $('.helpfrog').click(function(){
  $('.block4').hide();
  $('.block2').show();
 })




// ТРЕТЬЯ МИНИ ИГРА

$('.helpfrog').click(function(){
  leafClicked += 1;
  $('.block4').hide();
  $('.block2').show();
});

let player = document.querySelector('.player');
window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = 0;
    player.style.bottom = 0;
});

// let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue ('left'));
// let isMoving;
// let uppTime;
// let downnTime;

// function movecharacter() {
//   if(isMoving) return;
//   uppTime = setInterval(() => {
//       if(playerLeft >= 0){
//           clearInterval(uppTime);
//           downnTime = setInterval(() => {
//               if(playerLeft <= 0){
//                   clearInterval(downnTime);
//                   isMoving = false;
//               }
//               playerLeft -= 0;
//               player.style.left = playerLeft +'px';
//               }, 20);
//       }
//     playerLeft += 10;
//     player.style.left = playerLeft + 'px';
//     isMoving = true;
//     }, 20); }
  
  

let playerLeft = 0;
let playerBottom = 0;

window.addEventListener('keyup', (e) => {
  switch (e.key) {
      case 'ArrowLeft':
          playerLeft -= 50;
          player.style.left = playerLeft + 'px';
          break;
      case 'ArrowRight':
          playerLeft += 50;
          player.style.left = playerLeft + 'px';
          break;
  }
});



let triangleTop = -100;
let triangleLeft1 = Math.random() * 2000;
let triangleLeft2 = Math.random() * 2000;
let triangleLeft3 = Math.random() * 2000;
let triangleLeft4 = Math.random() * 2000;
let triangleLeft5 = Math.random() * 2000;

function moveTriangle() {
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
  triangleTop += 50;

  function detectHit(triangleLeft){
    if (playerLeft >= triangleLeft - 50 && playerLeft <= triangleLeft + 50 && triangleTop >= 900) {
      // $('.block6').show();
      // $('.block5').hide();
    }
  }


  detectHit(triangleLeft1);
  detectHit(triangleLeft2);
  detectHit(triangleLeft3);
  detectHit(triangleLeft4);
  detectHit(triangleLeft5);

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

