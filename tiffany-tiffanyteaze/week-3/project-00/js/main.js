$(document).ready(function() {
  $('.quotes').quovolver({
    autoPlaySpeed : 5000
  });

//Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

let navLink = $('.nav-link');
topMenu = $('.navbar');
let topMenuHeight = topMenu.outerHeight();

$(window).scroll(function() {
  let scrollPosition = $(this).scrollTop();
  navLink.each(function () {
    let sectionPosition = $(this.hash).offset().top - topMenuHeight;
    if (sectionPosition <= scrollPosition) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  })
})

});

//keeps bots from spamming email
$('a.mail').on('click', function(){
  var href = $(this).attr('href');
  $(this).attr('href', href.replace('badmail.', 'gmail.'));
});
