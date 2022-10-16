const canvasSketch = require('canvas-sketch');

// Canvas settings
let canvas_width = 800;
let canvas_height = 600;
let dvd_width = 80; 
let dvd_height = 60;
let dvd_color;

const settings = {
  dimensions: [ canvas_width, canvas_height ],
  animate: true,
  duration: 2,
  playing: true,
  loop: true,
};

function getRandom(boundary) {
  return (Math.floor(Math.random() * boundary))
};

// Setup
let x, y, xspeed, yspeed;
const setup = (context, width, height) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    [x, y] = [100, 100];
    // [x, y] = [getRandom(canvas_width), getRandom(canvas_height)];
    [xspeed, yspeed] = [100, 100];
    dvd_color = 'pink';
};

canvasSketch(() => {
  return ({ context, width, height, playhead }) => {
    setup(context, width, height);

    const t = playhead;

    x += (t * xspeed);
    y += (t * yspeed);

    if (x + dvd_width >= canvas_width || x + dvd_width <= 0) {
      xspeed *= -1;
    };
    
    if (y + dvd_height >= canvas_height || y + dvd_height <= 0) {
      yspeed *= -1;
    };
    
    context.save();
    context.fillStyle = dvd_color;
    context.fillRect(x, y, dvd_width, dvd_height);
    context.restore();
  };
}, settings);
