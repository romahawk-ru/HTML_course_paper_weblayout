// реализация поиска по сайту
let searchBtn = document.getElementById('search-btn');
let searchForm = document.getElementById('search__form');
let searchFormCloseBtn = document.getElementById('search-form-close-btn');

searchBtn.addEventListener('click', function() {
    searchForm.classList.add('search-form__is-active');
});

searchFormCloseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    searchForm.classList.remove('search-form__is-active');
});



// функционал mp3 плеера в секции header
// player 1
let firstPlayerButton = document.getElementById('button-play');
let firstPlayer = document.getElementById('sound1');
let playBtnIcon = document.getElementById('player-play');
let pauseBtnIcon = document.getElementById('player-pause');

firstPlayerButton.addEventListener('click', () => firstPlayer.paused && secondPlayer.paused ? firstPlayer.play()+playBtnIcon.classList.add('player-is-non-active')+pauseBtnIcon.classList.add('player-is-active') : !secondPlayer.paused ? secondPlayer.pause()+secondPlayBtnIcon.classList.remove('player-is-non-active')+secondPauseBtnIcon.classList.remove('player-is-active') + firstPlayer.play()+playBtnIcon.classList.add('player-is-non-active')+pauseBtnIcon.classList.add('player-is-active') : firstPlayer.pause()+pauseBtnIcon.classList.remove('player-is-active')+playBtnIcon.classList.remove('player-is-non-active'));

// player 2
let secondPlayerButton = document.getElementById('button-play2');
let secondPlayer = document.getElementById('sound2');
let secondPlayBtnIcon = document.getElementById('player-play2');
let secondPauseBtnIcon = document.getElementById('player-pause2');

secondPlayerButton.addEventListener('click', () => secondPlayer.paused && firstPlayer.paused ? secondPlayer.play()+secondPlayBtnIcon.classList.add('player-is-non-active')+secondPauseBtnIcon.classList.add('player-is-active') : !firstPlayer.paused ? firstPlayer.pause()+pauseBtnIcon.classList.remove('player-is-active')+playBtnIcon.classList.remove('player-is-non-active') + secondPlayer.play()+secondPlayBtnIcon.classList.add('player-is-non-active')+secondPauseBtnIcon.classList.add('player-is-active') : secondPlayer.pause()+secondPlayBtnIcon.classList.remove('player-is-non-active')+secondPauseBtnIcon.classList.remove('player-is-active'));

// инициализация кастомного Select
const element = document.querySelector('.default');
const choices = new Choices (element, {
  searchEnabled: false,
  itemSelectText: ""
});



