$(document).ready(function(){

  //////////
  // Global variables
  //////////

  var _window = $(window);
  var _document = $(document);

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
    nextHtml: `<svg class='ico ico-ar'>
                <use xlink:href='img/sprite.svg#ico-ar'></use>
              </svg>`,
    prevHtml: `<svg class='ico ico-arl'>
                <use xlink:href='img/sprite.svg#ico-arl'></use>
              </svg>`
  });

  $('a.btn').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  })

});
