// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import gallery from '../_modules/gallery/gallery'
import Link from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  gallery();
  console.log('Welcome to Yeogurt!');
});
