
import 'slick-slider';
import 'lightbox2';
import $ from 'jquery';

function gallery() {
  const selector = '.gallery';

  $(selector).each((i, value) => {
    const $gallery = $(value);

    $gallery.find(`${selector}_items`).slick({
      slidesToShow: 4,
      arrows: true,
      prevArrow: '<button class="arrow prev"/>',
      nextArrow: '<button class="arrow next"/>',
      appendArrows: $gallery
    });
  });
}

export default gallery;