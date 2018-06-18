'use strict';

export class ContactForm {
  constructor() {
    this.form = document.getElementById('js-contact-form');
    this.fields = document.querySelectorAll('.contact-form .input');
    this.error = document.getElementById('js-error-message');

    this.init();
  }

  init() {
    this.form.addEventListener( 'submit', ( e ) => {
      e.preventDefault();
      this.validate();
    });

    // sets class, if input filled
    this.fields.forEach( elm => {
      elm.addEventListener( 'focus', function() {
        elm.classList.add( 'filled' );
      });

      elm.addEventListener( 'blur', function() {
        if ( elm.value === '' ) {
          elm.classList.remove( 'filled' );
        }
      });
    });
  }

  validate() {
    this.fields.forEach( ( elm ) => {
      if ( elm.value === '' ) {
        elm.classList.add('error');
      } else {
        elm.classList.remove('error');
        this.error.innerText = '';
      }
    });

    if ( document.querySelector( '.contact-form .input.error') !== null ) {
      this.error.innerText = 'Please fill out the fields correctly!';
    } else {
      this.submit();
    }
  }

  submit() {
    let email = '';
    let xhr = new XMLHttpRequest();

    this.fields.forEach( ( elm ) => {
      email += elm.id + '=' + elm.value + '&';
    });

    // remove last ampersand
    email = email.slice( 0, -1 );

    xhr.onreadystatechange = function() {
      if ( this.readyState === 4 && this.status === 200 ) {
        let isSent = xhr.responseText;

        // if email successfully sent
        if ( isSent ) {
          document.getElementById('js-contact-form').remove();

        } else {

        }

      }
    };

    xhr.open( 'POST', 'http://localhost:8000/mail' );
    xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
    xhr.send( email );
  }

}
