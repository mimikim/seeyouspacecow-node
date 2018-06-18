// animated starfield background with html5 canvas

export class Starfield {
  constructor( customOptions ) {
    this.stars = [];
    this.options = {
      num: 100,
      minSize: 0.5,
      maxSize: 4,
      opacitySpeed: 0.005,
      opacityMin: 0.01,
      opacityMax: 0.4,
      minSpeed: 0.01,
      maxSpeed: 0.08
    };

    // uses custom options, if passed
    for( let key in customOptions ) {
      if ( this.options.hasOwnProperty(key) ) {
        this.options[key] = customOptions[key];
      }
    }

    this.init();

    window.requestAnimationFrame( () => {
      this.animate();
    } );

    window.addEventListener( 'resize', () => {
      this.stars = [];
      this.canvas.parentNode.removeChild( this.canvas );
      this.init();
    });
  }

  init() {
    this.createCanvas();
    this.setCanvasSize();
    this.createStars();
  }

  // generates array of stars
  createStars() {
    for ( let i = 0; i < this.options.num ; i++ ) {
      let opacity = Math.random() * ( this.options.opacityMax - this.options.opacityMin ) + this.options.opacityMin;
      let size = Math.random() * ( this.options.maxSize - this.options.minSize ) + this.options.minSize;

      let xpos = Math.round( Math.random() * ( window.innerWidth + 1 ) );
      let ypos = Math.round( Math.random() * ( window.innerHeight + 1 ) );

      let xspeed = Math.random() * ( this.options.maxSpeed - this.options.minSpeed ) + this.options.minSpeed / 10;
      let yspeed = Math.random() * ( this.options.maxSpeed - this.options.minSpeed ) + this.options.minSpeed / 10;

      this.stars.push( {
        opacity: opacity,
        size: size,
        xpos: xpos,
        ypos: ypos,
        xspeed: xspeed,
        yspeed: yspeed,
        reverseX: ( Math.floor( xspeed * 100 ) % 2 === 0 ),
        reverseY: ( Math.floor( yspeed * 100 ) % 2 === 0 ),
        reverseOpacity: false,
        reverseSize: ( Math.floor( size * 100 ) % 2 === 0 )
      } );
    }
  }

  drawStars() {
    for( let i = 0; i < this.stars.length; i++ ) {

      // if direction x is getting to end of width
      if ( this.stars[i].xpos >= ( window.innerWidth + 20 ) ) {
        this.stars[i].reverseX = true;
      }

      // if direction x is getting close to 0
      if ( this.stars[i].xpos <= -40 ) {
        this.stars[i].reverseX = false;
      }

      // x position
      if ( this.stars[i].reverseX ) {
        this.stars[i].xpos -= this.stars[i].xspeed;
      } else {
        this.stars[i].xpos += this.stars[i].xspeed;
      }

      // if direction y is getting to end of width
      if ( this.stars[i].ypos >= ( window.innerHeight + 20 ) ) {
        this.stars[i].reverseY = true;
      }

      // if direction y is getting close to 0
      if ( this.stars[i].ypos <= -40 ) {
        this.stars[i].reverseY = false;
      }

      // y position
      if ( this.stars[i].reverseY ) {
        this.stars[i].ypos -= this.stars[i].yspeed;
      } else {
        this.stars[i].ypos += this.stars[i].yspeed;
      }

      // reverse opacity, if opacity is getting close to 0.6
      if ( this.stars[i].opacity >= this.options.opacityMax ) {
        this.stars[i].reverseOpacity = true;
      }

      // increment opacity, if opacity hits less than 0.02
      if ( this.stars[i].opacity <= this.options.opacityMin ) {
        this.stars[i].reverseOpacity = false;
      }

      if ( this.stars[i].reverseOpacity ) {
        this.stars[i].opacity -= this.options.opacitySpeed;
      } else {
        this.stars[i].opacity += this.options.opacitySpeed;
      }

      // sizes
      if ( this.stars[i].size >= this.options.maxSize ) {
        this.stars[i].reverseSize = true;
      }

      if ( this.stars[i].size <= this.options.minSize ) {
        this.stars[i].reverseSize = false;
      }

      if ( this.stars[i].reverseSize ) {
        this.stars[i].size -= 0.04;
      } else {
        this.stars[i].size += 0.03;
      }

      this.context.beginPath();
      this.context.arc( this.stars[i].xpos, this.stars[i].ypos, this.stars[i].size, 0, 2 * Math.PI );
      this.context.fillStyle = 'rgba( 255, 255, 255, ' + this.stars[i].opacity + ' )';
      this.context.fill();
      this.context.closePath();
    }
  }
  
  animate() {
    this.clearCanvas();
    this.drawStars();

    // request a new frame
    window.requestAnimationFrame( () => {
      this.animate();
    } );
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

}
