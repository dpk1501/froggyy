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

        clearInterval(obstacleInterval);
        clearTimeout(obstacleTimeout);
        location.reload();
    }
}

$(document).ready(() => {
  $('.start').on('click', () => {
    $('.block2').show();
    $('.block1').hide();
    let obstacleInterval = setInterval(moveObstacle, 5);
  });
})


window.setInterval(function(){

    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

    $('.obstacle').css({
      'background-color' : randomColor,
    });

  }, 2000);


// ПРЫЖКИ ПО КЛИКУ И НАЖАТИЮ
function control(e) {
    if (e.key = 'ArrowUp' || e.key == ' '){
        jump();
    }
}
document.addEventListener('click', jump);
document.addEventListener('keydown', control);



// ПЕРВАЯ МИНИ ИГРА
  
document.getElementById('one').onclick = changeColor;   

function changeColor() {
    document.body.style.color = "purple";
    return false;
}  


let two = document.getElementsByClassName('.two');
two.forEach(function(numbertwo) {
  numbertwo.addEventListener('click', () => {
  two.style.backgroundColor = '#0075FF';
});
});

$(function() {
  $("#pull").draggable();
} );


// ВТОРАЯ МИНИ ИГРА


// ТРЕТЬЯ МИНИ ИГРА

const cells = Array.from(document.querySelectorAll(".cell"));
const enemyCells = cells.slice(0, 30);
const playerCells = cells.slice(30);
const scoreDisplay = document.querySelector(".score");

let dropCount, speed, score;

reset();

document.addEventListener("keydown", e => {
    if (!dropCount) {
        startGame();
    }

    const player = document.querySelector(".player");

    if (e.key === "ArrowRight" && playerCells.includes(player.parentElement.nextElementSibling)) {
        player.parentElement.nextElementSibling.appendChild(player);
    }

    if (e.key === "ArrowLeft" && playerCells.includes(player.parentElement.previousElementSibling)) {
        player.parentElement.previousElementSibling.appendChild(player);
    }
});

function reset() {
    dropCount = 0;
    speed = 1000;
    score = 0;
    scoreDisplay.innerHTML = "0";

    cells.forEach(cell => cell.innerHTML = "");
    playerCells[1].innerHTML = '<div class="player"></div>';
}

function startGame() {
    reset();
    loop();
}

function loop() {
    let stopGame = false;

    for (let i = enemyCells.length - 1; i >= 0; i--) {
        const cell = enemyCells[i];
        const nextCell = cells[i + 3];
        const enemy = cell.children[0];

        if (!enemy) {
            continue;
        }

        nextCell.appendChild(enemy);

        if (playerCells.includes(nextCell)) {
            if (nextCell.querySelector(".player")) {
                stopGame = true;
            } else {
                score++;
                speed = Math.max(100, speed - 25);
                scoreDisplay.innerHTML = score;
                enemy.remove();
            }
        }
    }

    // Even drop count, add new enemy
    if (dropCount % 2 === 0) {
        const position = Math.floor(Math.random() * 3);

        enemyCells[position].innerHTML = '<div class="enemy"></div>';
    }

    if (stopGame) {
        alert('Your score: ' + score + ". Close this window to play again.");
        reset();
    } else {
        dropCount++;
        setTimeout(loop, speed);
    }
}
