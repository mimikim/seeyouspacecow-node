// google analytics tracking
// anything with "data-track" attribute

export class Analytics {
  constructor() {
    let trackedElms = document.querySelectorAll( '*[data-track]' );

    trackedElms.forEach( ( elm ) => {
      elm.addEventListener( 'click', function()  {
        ga('send', {
          hitType: 'event',
          eventCategory: elm.dataset.category,
          eventAction: elm.dataset.action,
          eventLabel: elm.dataset.label
        });
      });
    });

  }
}
