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
        $('.block3').show();
        $('.block2').hide();
    }
}



window.setInterval(function(){

    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

    $('.obstacle').css({
      'background-color' : randomColor,
    });

  }, 3000);


// ПРЫЖКИ ПО КЛИКУ И НАЖАТИЮ
function control(e) {
    if (e.key = 'ArrowUp' || e.key == ' '){
        jump();
    }
}
document.addEventListener('click', jump);
document.addEventListener('keydown', control);



// ПЕРВАЯ МИНИ ИГРА

setTimeout(function () {
  setInterval(function(){
    $('#red').css('background', 'grey');
  }, 1000);
  })


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


$('.green').click(function(){
  $('.block3').hide();
  $('.block2').show();
 });



// ВТОРАЯ МИНИ ИГРА
if ($('.green').data('clicked') && characterLeft >= obstacleLeft - characterWidth && characterLeft <= obstacleLeft + obstacleWidth && characterBottom <= obstacleBottom + obstacleHeight){
  alert(heyy);
  $('.block2').show();
  $('.block4').hide();
}

// ТРЕТЬЯ МИНИ ИГРА
$('player').keydown(function(event) {
  switch (event.which) {
      case 37: // left arrow key
          $('#bottom_arrow').animate({ 'left': '-=100' });
          break;
          case 39: // right arrow key
          $('#bottom_arrow').animate({ 'left': '+=100' });
          break;
  }
});
