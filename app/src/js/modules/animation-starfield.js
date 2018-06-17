// animated starfield background with html5 canvas

export class Starfield {
  constructor() {
    this.num = 80;
    this.radius = 4;

    this.init();
  }

  init() {
    this.createCanvas();
    this.draw();

    window.addEventListener('resize', () => {
      // determine max num of stars to draw based off window height/width
      this.num = 80;

      this.draw();
    });
  }

  draw() {
    this.setCanvasSize();
    this.clearCanvas();
    this.createStars();
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createCanvas() {
    let canvas = document.createElement('canvas');
    canvas.id = 'js-starfield';
    canvas.classList.add('bg-starfield');
    canvas.setAttribute( 'aria-hidden', 'true' );
    document.body.insertAdjacentElement('beforeend', canvas);

    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  createStars() {
    for ( let i = 0; i <= this.num; i++ ) {
      let rand_x = Math.random() * window.innerWidth;
      let rand_y = Math.random() * window.innerHeight;
      let rand_radius = Math.random() * this.radius + 2;
      let rand_opacity = Math.random() * 0.4;

      this.context.beginPath();
      this.context.arc( rand_x, rand_y, rand_radius, 0, 2 * Math.PI );
      this.context.fillStyle = 'rgba( 255, 255, 255, ' + rand_opacity + ' )';
      this.context.fill();
      this.context.closePath();
    }
  }



  generatePosition() {
    var h = $(window).height();
    var w = $(window).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
  }

  animateDiv( elm ){
    var newq = this.generatePosition();

    $( elm ).animate(
      { top: newq[0], left: newq[1] },
      10000,

      function() {
        this.animateDiv( elm );
      }
    );
  };

}