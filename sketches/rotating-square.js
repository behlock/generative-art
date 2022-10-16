const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 512, 512 ],
  animate: true,
  duration: 4,
  fps: 30, 
};

canvasSketch(() => {
  return ({ context, width, height, playhead }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    const t = Math.sin(playhead * Math.PI);
    const thickness = Math.max(2, Math.pow(t, 0.55) * width * 0.5);
    const rotation = playhead * Math.PI;
    const colors = ["green", "red", "blue"];
    // const color = colors[Math.floor(Math.random()*colors.length)];
    const color = "#91c497";

    const cx = width / 2;
    const cy = height / 2;
    const length = height * 0.5;
    context.save();
    context.translate(cx, cy);
    context.rotate(rotation);
    context.fillStyle = color;
    context.fillRect(-thickness / 2, -length / 2, thickness, length);
    context.restore();
  };
}, settings)
