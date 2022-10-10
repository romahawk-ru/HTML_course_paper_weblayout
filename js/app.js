// реализация плавного скрола по якорным ссылкам
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// реализация поиска по сайту
const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');
const searchFormCloseBtn = document.getElementById('search-form-close-btn');

searchBtn.addEventListener('click', function() {
    searchForm.classList.add('search-form__is-active');
});

searchFormCloseBtn.addEventListener('click', function(event) {
    event.preventDefault();
    searchForm.classList.remove('search-form__is-active');
});


// реализация модального окна входа/регистрации
const entranceModalOpenBtn = document.getElementById('entrance-btn');
const entranceModal = document.getElementById('entrance-modal');
const entranceModalCloseBtn = document.getElementById('modal-entrance-close');

entranceModalOpenBtn.addEventListener('click', function() {
  entranceModal.classList.add('modal-entrance-is-active');
});

entranceModalCloseBtn.addEventListener('click', function() {
  entranceModal.classList.remove('modal-entrance-is-active');
});



// функционал mp3 плеера в секции header
// player 1
const firstPlayerButton = document.getElementById('button-play');
const firstPlayer = document.getElementById('sound1');
const playBtnIcon = document.getElementById('player-play');
const pauseBtnIcon = document.getElementById('player-pause');

firstPlayerButton.addEventListener('click', () => firstPlayer.paused && secondPlayer.paused ? firstPlayer.play()+playBtnIcon.classList.add('player-is-non-active')+pauseBtnIcon.classList.add('player-is-active') : !secondPlayer.paused ? secondPlayer.pause()+secondPlayBtnIcon.classList.remove('player-is-non-active')+secondPauseBtnIcon.classList.remove('player-is-active') + firstPlayer.play()+playBtnIcon.classList.add('player-is-non-active')+pauseBtnIcon.classList.add('player-is-active') : firstPlayer.pause()+pauseBtnIcon.classList.remove('player-is-active')+playBtnIcon.classList.remove('player-is-non-active'));

// player 2
const secondPlayerButton = document.getElementById('button-play2');
const secondPlayer = document.getElementById('sound2');
const secondPlayBtnIcon = document.getElementById('player-play2');
const secondPauseBtnIcon = document.getElementById('player-pause2');

secondPlayerButton.addEventListener('click', () => secondPlayer.paused && firstPlayer.paused ? secondPlayer.play()+secondPlayBtnIcon.classList.add('player-is-non-active')+secondPauseBtnIcon.classList.add('player-is-active') : !firstPlayer.paused ? firstPlayer.pause()+pauseBtnIcon.classList.remove('player-is-active')+playBtnIcon.classList.remove('player-is-non-active') + secondPlayer.play()+secondPlayBtnIcon.classList.add('player-is-non-active')+secondPauseBtnIcon.classList.add('player-is-active') : secondPlayer.pause()+secondPlayBtnIcon.classList.remove('player-is-non-active')+secondPauseBtnIcon.classList.remove('player-is-active'));

// реализация открытия дополнительных подкастов
$(document).ready(function() {
  var list = $(".podcasts-list__item");
  var numToShow = 8; //сколько показывать элементов
  var button = $("#podcasts-btn");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function() {
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});

// инициализация кастомного Select
const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
}

defaultSelect();

// реализация табов

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.accordion');
  const tabsBtn = document.querySelectorAll('.accordion-list-item__link');
  const tabsContent = document.querySelectorAll('.guests__card');

  if(tabs) {
    tabs.addEventListener('click', (e) => {
      if(e.target.classList.contains('accordion-list-item__link')) {
        const tabsPath = e.target.dataset.tabsPath;
        console.log(tabsPath);
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {el.classList.remove('accordion-list-item__link--active')});
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('accordion-list-item__link--active');

    tabsContent.forEach(el => {el.classList.remove('tabs-content-active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content-active');
  };

});



