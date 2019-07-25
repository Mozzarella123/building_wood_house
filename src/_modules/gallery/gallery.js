
import 'slick-slider';
import 'lightbox2';
import $ from 'jquery';

function gallery() {
  $('.gallery .gallery_items').slick({
    slidesToShow : 3,
    arrows : true
  });
}

export default gallery;