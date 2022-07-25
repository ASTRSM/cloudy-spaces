/* eslint-disable require-jsdoc */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './utils/details_popup--initiator';
import detail from './utils/details_popup--initiator';
import swRegister from './utils/sw-register';
import renderPage from './views/app';
import './utils/comment-list-initiator';
import './utils/skip-to-main-content';
import '../components/hero';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

$(function() {
  $('#hamburger').on('click', function(event) {
    event.preventDefault();
    $('.drawer').toggleClass('drawer-open');
  });

  $('main').on('click', function(event) {
    event.preventDefault();
    $('.drawer').toggleClass('drawer-open');
  });

  $(window).on( 'hashchange', function() {
    (async () => {
      await renderPage();
      detail();
    })();
  });

  (async () => {
    await renderPage();
    detail();
  })();

  swRegister();
});


