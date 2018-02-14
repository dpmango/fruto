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
    prevHtml: "<svg class='ico ico-arl'><use xlink:href='img/sprite.svg#ico-arl'></use></svg>",
    onSelect: function onSelect(formattedDate, date, inst) {
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var redirectUrl = '/menu/' + day + '-' + month + '-' + year;
      window.location.href = redirectUrl
    }
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

  // SLICK CHILDS
  $('[js-slider]').slick({
    mobileFirst: true,
    dots: false,
    arrows: false,
    accessibility: false,
    adaptiveHeight: false,
    // centerMode: true,
    variableWidth: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 0,
    //     settings: {
    //       slidesToShow: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //     }
    //   },
    // ]
  });

  function closeMfp(){
    $.magnificPopup.close();
  }

  _document.on('click', '[js-closeMfp]', function(){
    closeMfp();
  })

  // HAMMER.js
  $('[js-removable]').each(function(i, el){
    var hammer = new Hammer(el);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    var offsetX = 0;
    var deltaX = 0;

    hammer.on("panleft panright panend", function(e){
      var targetEl = $(el);
      // var movedPos = 0;

      if(e.type === 'panleft') {
        targetEl.addClass('is-remove-avail')
      }

      if (e.type === "panright"){
        targetEl.removeClass('is-remove-avail')
      }

      // if(e.type === 'panleft' || e.type === 'panright') {
      //   deltaX = e.deltaX;
      //
      //   // show
      //   if ( deltaX < 0 && deltaX >= -80 ){
      //     offsetX = deltaX
      //   } else {
      //     // offsetX = -80 // finnish right move
      //   }
      //
      //   targetEl.css({
      //     'transform': 'translate3d('+ offsetX +'px,0,0)'
      //   })
      // }
      //
      // if (e.type === "panend"){
      //   // offsetX += deltaX;
      //   deltaX = 0;
      //
      //   targetEl.css({
      //     'transform': 'translate3d('+ offsetX +'px,0,0)'
      //   })
      // }

    });

  })

  _document
    .on('click', '.card__remove', function(){
      $(this).closest('.card').addClass('is-removing');
    })
    .on('click', '.card__removing', function(){
      $(this).closest('.card').removeClass('is-removing');
    })



  // MASKED INPUT
  // $("[js-dateMask]").mask("99.99.99",{placeholder:"ДД.ММ.ГГ"});
  // $("input[type='tel']").mask("+7 (000) 000-0000", {placeholder: "+7 (___) ___-____"});

});
