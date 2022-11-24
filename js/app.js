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

// ========================================================

// реализация работы аккордеона

$( function() {
  $( "#accordion" ).accordion({
    collapsible: false,
    heightStyle: "content",
    animate: 300,
    active: false,
  });
});

// ========================================================


// реализация открытия - закрытия поиска по сайту
const searchBtn = document.getElementById('search-btn');
const searchForm = document.getElementById('search-form');

const toggleSearchForm = function() {
  searchForm.classList.toggle('search-form__is-active');
}

searchBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleSearchForm();
})

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_searchForm = target == searchForm || searchForm.contains(target);
  const its_searchBtn = target == searchBtn;
  const searchForm_is_active = searchForm.classList.contains("search-form__is-active");

  if (!its_searchForm && !its_searchBtn && searchForm_is_active) {
    toggleSearchForm();
  }
})

// ========================================================


// реализация модального окна входа/регистрации
const siteContainer = document.getElementById('site-container');
const entranceModalOpenBtn = document.getElementById('entrance-btn');
const entranceModal = document.getElementById('entrance-modal');
const entranceModalInner = document.getElementById('entrance-modal-inner');
const entranceModalCloseBtn = document.getElementById('modal-entrance-close');

entranceModalOpenBtn.addEventListener('click', function() {
  entranceModal.classList.add('modal-entrance-is-active');
  entranceModalInner.classList.add('modal-entrance__inner-is-active');
  siteContainer.classList.add('scroll-disable');
});

entranceModalCloseBtn.addEventListener('click', function() {
  entranceModal.classList.remove('modal-entrance-is-active');
  entranceModalInner.classList.remove('modal-entrance__inner-is-active');
  siteContainer.classList.remove('scroll-disable');
});

// ========================================================


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

// ========================================================

// реализация открытия дополнительных подкастов
$(document).ready(function() {
  var list = $(".podcasts__list-item");
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

// ========================================================

// инициализация кастомного Select
const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
    position: 'bottom'
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
}

defaultSelect();

// ========================================================

// реализация табов
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.accordion');
  const tabsBtn = document.querySelectorAll('.accordion__list-item-link');
  const tabsContent = document.querySelectorAll('.guests__card');

  if(tabs) {
    tabs.addEventListener('click', (e) => {
      if(e.target.classList.contains('accordion__list-item-link')) {
        const tabsPath = e.target.dataset.tabsPath;
        console.log(tabsPath);
        tabsHandler(tabsPath);
      }
    })
  }

  const tabsHandler = (path) => {
    tabsBtn.forEach(el => {el.classList.remove('accordion__list-item-link--active')});
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('accordion__list-item-link--active');

    tabsContent.forEach(el => {el.classList.remove('tabs-content-active')});
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content-active');
  };

});

// ========================================================

// реализация открытия бургер меню

const burgerOpenBtn = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');
const burgerCloseBtn = document.getElementById('burger-close-btn');
const burgerBottomNav = document.getElementById('header-bottom-nav');

burgerOpenBtn.addEventListener('click', () => {
  burgerMenu.classList.add('is-active');
  burgerBottomNav.classList.add('header__bottom-nav-is-active');
  siteContainer.classList.add('scroll-disable');
})

burgerCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('is-active');
  burgerBottomNav.classList.remove('header__bottom-nav-is-active');
  siteContainer.classList.remove('scroll-disable');
})

// ========================================================

// реализация работы слик слайдера

$(document).ready(function(){
  $('.about__list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 741,
        settings: {
          arrows: false,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
})

// ========================================================


// реализация валидации форм

// форма входа пользователя на сайт
const validate = new window.JustValidate('#modal-entrance-form');

validate
  .addField('#input-login', [
    {
      rule: 'required',
      errorMessage: 'Поле обязателено для заполнения',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Введите не более 30 символов',
    },
  ])
  .addField('#input-password', [
    {
      rule: 'required',
      errorMessage: 'Поле обязателено для заполнения',
    },
    {
      rule: 'minLength',
      value: 8,
      errorMessage: 'Введите минимум 8 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Введите не более 30 символов',
    }
  ]);


// форма отправки сообщений

const validateAboutForm = new window.JustValidate('#about__form');

validateAboutForm
  .addField('#about-text', [
    {
      rule: 'required',
      errorMessage: 'Поле обязателено для заполнения',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 1000,
      errorMessage: 'Введите не более 1000 символов',
    }
  ])
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Поле обязателено для заполнения',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Введите минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Введите не более 30 символов',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Поле обязателено для заполнения',
    },
    {
      rule: 'email',
      errorMessage: 'Email не валидный',
    },
    {
      rule: 'minLength',
      value: 8,
      errorMessage: 'Введите минимум 8 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Введите не более 30 символов',
    }
  ]);

// ========================================================

const formMessage = document.getElementById('about-text');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formBtnSubmit = document.getElementById('submit-btn');
const formCheckbox = document.getElementById('checkbox-form');


formBtnSubmit.addEventListener('click', function() {
  if ( formMessage.classList.contains('just-validate-success-field') && formName.classList.contains('just-validate-success-field') && formEmail.classList.contains('just-validate-success-field') ) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        id: 1,
        message: formMessage.value,
        name: formName.value,
        email: formEmail.value,
        checkbox: formCheckbox.checked,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

})

// ========================================================

// реализация открытия плеера

const headerBottomPlayerBtn = document.getElementById('header-botoom-player-menu-btn');
const headerBottomPlayer = document.getElementById('header-bottom-player');


headerBottomPlayerBtn.addEventListener('click', () => {

  headerBottomPlayer.classList.toggle('header__bottom-player-is-active');
  headerBottomPlayerBtn.classList.toggle('header__botoom-player-menu-btn-is-active');

});

