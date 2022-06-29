

// подстройка экрана под высоту мобильного девайса

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var mql = window.matchMedia("(orientation: portrait)");
var mll = window.matchMedia("(orientation: landscape)");
// Прослушка события изменения ориентации
mql.addListener(function(m) {

      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

});

$(document).ready(function() {
    $('.header').width($('.tm-popular-items-container').width());
});

window.addEventListener('resize', function(event) {
    $('.header').width($('.tm-popular-items-container').width());
}, true);

$(document).ready(function() {
    $('.tm-popular-item').height($('.all-cards').height());
});

window.addEventListener('resize', function(event) {
    $('.tm-popular-item').height($('.all-cards').height());
}, true);

$('.back-32').height($('.hidden-card').height());
$('.activemenu').height($('.hidden-card').height());
$('#scrollfunction').height($('.hidden-card').height());

/* Записываем в переменные массив элементов-кнопок и подложку.
   Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay      = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');
var hiddenCard = document.getElementsByClassName('hidden-card');
var logoMenu = document.getElementsByClassName('tm-nav-middle-logo-menu');
// элементы поискового меню

const el = document.getElementById('scrollfunction');


$('.middle-9').click(function(){
$(window).scrollTop(0);
$("body").css("overflow-y","visible");
$("#scrollfunction").css("display","none");
document.querySelector('.tm-nav-middle-logo').classList.add('anime');
document.querySelector('.tm-nav-middle-logo-hidden').classList.remove('anime');

for (var i = 0; i < hiddenCard.length; i++) {
    hiddenCard[i].classList.add('anime');
    hiddenCard[i].classList.remove('anime');
}

});

$(".hidden-card").click(function(){
$("#scrollfunction").css("display","block");
document.querySelector('#scrollfunction').classList.add('anime');
document.querySelector('#scrollfunction').classList.remove('anime');

});

$(".back-31").click(function(){
document.querySelector('.tm-nav-middle-logo-hidden').classList.add('anime');
document.querySelector('.tm-nav-middle-logo').classList.remove('anime');
});

$('.middle-15').click(function(){
$("body").css("overflow-y","hidden");

});

$('.middle-16').click(function(){
$("body").css("overflow-y","hidden");

});

$('.container3').click(function(){
$("body").css("overflow-y","hidden");
});

// реализация перехода по ссылкам              a.title-block

$(document).ready(function () {
        var url = window.location;
    // Will only work if string in href matches with location
        $('a.title-block[href="' + url + '"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
        $('a.title-block').filter(function () {
            return this.href == url;
        }).parent().addClass('active').parent().parent().addClass('active');
    });

 // модальное окно

$("div.manipulation").scrollLeft(100);


document.addEventListener('DOMContentLoaded', function() {

   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */

         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach

   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         $("body").css("overflow-y","visible");
         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

}); // end ready


  // элементы поискового меню

  function app () {
    const buttons = document.querySelectorAll('.button')
    const cards = document.querySelectorAll('.card')

    function filter (category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category)
        const isShowAll = category === 'all'
        if (isItemFiltered && !isShowAll) {
           item.classList.add('anime')

        } else {
  				 $(window).scrollTop(0);
           item.classList.remove('hide')
           item.classList.remove('anime')
        }
      })
  }

  buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter
        filter(currentCategory, cards)
      })
  })

  cards.forEach((card) => {
     card.ontransitionend = function () {
       if (card.classList.contains('anime')) {
           card.classList.add('hide')
       }
     }
   })
  }

  app()



  // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
  $('body').bind('touchstart', function() {});

  // Smooth scroll
  // https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

// появляющееся и скрывающееся меню

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('out');

window.addEventListener('scroll', () => {
		if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
				//scroll down
				header.classList.add('out');
		}
		else if(scrollPosition() < lastScroll && containHide()){
				//scroll up
				header.classList.remove('out');
		}

		lastScroll = scrollPosition();
})

// появляющееся и скрывающееся меню при определенной высоте документа

	$(window).scroll(function() {
			if ($(".header").offset().top<100) {
				$(".header").addClass("out");
			}
		});


// задержка анимации логотипа

window.addEventListener("DOMContentLoaded", function () {
  $('body').addClass('loaded');
});



// прилипающая кнопка

(function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
var a = document.querySelector('#aside1'), b = null;  // селектор блока, который нужно закрепить
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
function Ascroll() {
  if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');  // создать потомка
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
    a.style.padding = '0';
    a.style.border = '0';  // если элементу присвоен padding или border
  }
  if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
    b.className = 'sticky';
  } else {
    b.className = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);  // если изменить размер окна браузера, измениться ширина элемента
}
})();

// Установка времени
// Берём блок
let timeBlock = document.querySelector(".time");

moment.updateLocale('en', {
    months : [ "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
});

// Выводим настоящие время
timeBlock.innerHTML = moment().format('DD MMMM YYYY');
