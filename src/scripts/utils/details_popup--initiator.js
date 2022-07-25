/* eslint-disable require-jsdoc */
// const getDetailResponse = require('../views/pages/details');

const detail = () => {
  $('.partner-card').on('click', (event) => {
    const id = event.target.parentNode.id;
    window.location.hash = `#/detail/${id}`;
  });

  $('.partner-card').on('keydown', (event) => {
    if (event.keyCode === 13) {
      const id = event.target.parentNode.id;
      window.location.hash = `#/detail/${id}`;
    }
  });
};

module.exports = detail;
