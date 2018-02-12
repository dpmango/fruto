$(document).ready(function(){

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);

  // svg support for laggy browsers
  svg4everybody();

  // Viewport units buggyfill
  window.viewportUnitsBuggyfill.init({
    force: true,
    refreshDebounceWait: 150,
    appendToBody: true
  });

  // Prevent # behavior
	_document.on('click', '[href="#"]', function(e) {
		e.preventDefault();
	});

  // DATEPICKER
  $.fn.datepicker.language['ru'] = {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1
  };

  $('.datepicker-here').datepicker({
    inline: true,
    language: 'ru',
    nextHtml: "<svg class='ico ico-ar'><use xlink:href='img/sprite.svg#ico-ar'></use></svg>",
    prevHtml: "<svg class='ico ico-arl'><use xlink:href='img/sprite.svg#ico-arl'></use></svg>"
  });

  // MODALS
  $('[js-modal]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  })

  function closeMfp(){
    $.magnificPopup.close();
  }

  _document.on('click', '[js-closeMfp]', function(){
    closeMfp();
  })


  // MASKED INPUT
  // $("[js-dateMask]").mask("99.99.99",{placeholder:"ДД.ММ.ГГ"});
  // $("input[type='tel']").mask("+7 (000) 000-0000", {placeholder: "+7 (___) ___-____"});

});
