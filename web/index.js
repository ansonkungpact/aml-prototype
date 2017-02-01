function gotoPage(page) {
  $('body').removeClass(function () {
    return $(this).attr('class');
  })
  .addClass('page-' + page);

  current_page = page;

  $title_progress_bar = $('#title-progress-bar div');
  $title_progress_bar.removeClass('pass');
  $title_progress_bar.removeClass('current');
  $title_progress_bar.removeClass('sr-only');

  switch (page) {

    case "select":

      progress_index = 1;
      break;

    case "review1":

      progress_index = 2;
      $('.gallery').slick('refresh');
      break;

    case "review2":

      progress_index = 2;
      break;

    case "travellers":

      progress_index = 3;
      break;

    case "payment":

      progress_index = 4;
      break;

    case "confirm":

      progress_index = 5;
      break;

    case "home":
    default:

      progress_index = 0;
      current_page = "home";
      break;
  }

  // update progress bar
  for(i=0; i<progress_index; i++){
    $title_progress_bar.eq(i).addClass('pass');
  }
  $current_dom = $title_progress_bar.eq(progress_index);
  $current_dom.addClass('current');
  $current_dom.find('.sr-only').html($current_dom.find('.sr-only').html()+' (current step out of 6 steps)');
}


//////////////////////
//                  //
//    Date picker   //
//                  //
//////////////////////

$(function () {
  $('#departDate').datepicker({
    showOn: 'button',
    buttonImage: "img/calendar.png", // File (and file path) for the calendar image
    buttonImageOnly: false,
    buttonText: 'Calendar View',
    dayNamesShort: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    showButtonPanel: true,
    // onClose: removeAria,
    closeText: 'Close'
  });

  $('#returnDate').datepicker({
    showOn: 'button',
    buttonImage: "img/calendar.png", // File (and file path) for the calendar image
    buttonImageOnly: false,
    buttonText: 'Calendar View',
    dayNamesShort: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
    showButtonPanel: true,
    // onClose: removeAria,
    closeText: 'Close'
  });

  // Add aria-describedby to the button referring to the label
  // $('.ui-datepicker-trigger').attr('aria-describedby', 'datepickerLabel');

  // dayTripper();
  makeWebAccessible($('#departDate'));
  makeWebAccessible($('#returnDate'));

  // initiate slick
  $('#section-review1 .gallery').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // centerMode: true,
    // mobileFirst: true,
    // centerPadding: '70px',
    // variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       dots: false
    //     }
    //   }
    // ],
    speed: 500
  });
});
