import P5, { Color } from 'p5';

export default (p: P5) => {
  let _noiseScale: number;

  p.setup = () => {
    _noiseScale = 0.05;

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };

  p.draw = () => {
    for (let i = 0; i < 10000; i++) {
      const x = p.random(p.width);
      const y = p.random(p.height);
      const noiseFactor = p.noise(x * _noiseScale, y * _noiseScale);
      const lineLength = noiseFactor * 400;

      p.push();
      p.translate(x / noiseFactor, y / noiseFactor);
      p.rotate(noiseFactor * p.radians(180));
      p.strokeWeight(1 / noiseFactor);
      // p.line(0, 0, lineLength * noiseFactor, lineLength * noiseFactor);
      p.noFill();
      p.stroke(
        0.1 * p.cos(y) * y * p.noise(1, i * 0.1) * p.random(x * noiseFactor) * p.tan(x),
        0.01 * p.cos(x * y) * p.sin(x * y) * p.noise(1, i) * p.random(x * y * noiseFactor) * p.tan(x * y),
        0.1 * p.cos(x) * x * p.noise(1, i * 0.1) * p.random(y * noiseFactor) * p.tan(y),
        2
      );
      p.line(0, 0, lineLength, lineLength);
      p.pop();
    }
  };

  p.keyPressed = () => {
    /*
      ENTERキー押下: 画像を保存する
      BACKSPACEキー押下: リセット
      */

    if (p.keyCode == p.BACKSPACE) {
      p.setup();
    }
  };
};
