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
let obstacleLeft = -30;
let obstacleBottom = 100;
let obstacleWidth = 30;
let obstacleHeight = Math.floor(Math.random() * 50) + 50;

function generateObstacle() {
    let obstacles = document.querySelector('.obstacles');
    let obstacle = document.createElement('obstacle');
    obstacle.setAttribute('class', 'obstacle');
    obstacles.appendChild(obstacle);
    
    let randomTimeout = Math.floor(Math.random() * 1000) + 1000;
    let obstacleLeft = -30;
    let obstacleBottom = 100;
    let obstacleWidth = 30;
    let obstacleHeight = Math.floor(Math.random() * 50) + 50;
    obstacle.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
}


function moveObstacle() {

    let obstacle = document.querySelector('.obstacle');
    obstacleLeft += 5;
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.bottom = obstacleBottom + 'px';
    obstacle.style.width = obstacleWidth + 'px';
    obstacle.style.height = obstacleHeight + 'px';

    obstacleLeft = parseInt($(window).width()) - obstacleLeft;
    if (characterLeft >= obstacleLeft - characterWidth && characterLeft <= obstacleLeft + obstacleWidth && characterBottom <= obstacleBottom + obstacleHeight){
        window.location.assign('traffic.html');
        clearInterval(obstacleInterval);
        clearTimeout(obstacleTimeout);
        location.reload();
        }
    }
let obstacleInterval = setInterval(moveObstacle, 20);
let obstacleTimeout = setTimeout(generateObstacle, randomTimeout);


window.setInterval(function(){

    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    
    $('.obstacle').css({
      'background-color' : randomColor,
    });

  }, 2000);


// ПРЫЖКИ ПО КЛИКУ И НАЖАТИЮ
function control(e) {
    if (e.key = 'ArrowUp' || e.key == ' '){
        jump()
    }
}
document.addEventListener('click', jump);
document.addEventListener('keydown', control);


// ПЕРВАЯ МИНИ ИГРА

let one = document.querySelector('.one');

one.addEventListener('click', () => {
  one.style.backgroundColor = '#CF0000';
}
)

const two = document.querySelector('.two');

one.addEventListener('click', () => {
  one.style.backgroundColor = '#0075FF';
}
)