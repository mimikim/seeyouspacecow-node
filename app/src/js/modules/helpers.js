// general js for all pages
( () => {
  "use strict";

  let buttons = document.querySelectorAll( '.button' );
  buttons.forEach( ( button ) => {

    button.addEventListener( 'click', () => {
      let classes = button.style;
      classes.top = '4px';
      setTimeout( () => {
        classes.top = '0px';
      }, 100 );
    } );

  } );

  let hero = document.getElementById( 'js-hero' );

} )();


(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var dialogEl = document.getElementById('my-accessible-dialog');
    var mainEl = document.getElementById('main');
    var dialog = new window.A11yDialog(dialogEl, mainEl);
    dialog.on('show', function (dialogEl, triggerEl) {
      console.log(dialogEl);
      console.log(triggerEl);
    });
    // To manually control the dialog:
    // dialog.show()
    // dialog.hide()
    // dialog.destroy()
  });
}());
