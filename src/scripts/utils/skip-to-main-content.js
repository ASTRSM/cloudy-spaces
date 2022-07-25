$('.skip-to-content').click(function(e) {
  e.preventDefault();
  $(':header:first').attr('tabindex', '-1').focus();
});
console.log('skippi');
