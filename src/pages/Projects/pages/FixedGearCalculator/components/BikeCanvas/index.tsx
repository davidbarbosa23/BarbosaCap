import React from 'react';

import Canvas from 'components/Canvas';

import styles from './styles.module.scss';

const BikeCanvas: React.FC = () => {
  const draw = (ctx: CanvasRenderingContext2D) => {
    const wheelPosX = 150;
    const wheelPosY = 150;

    // Tire
    ctx.beginPath();
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 7;
    ctx.arc(wheelPosX, wheelPosY, 120, 0, Math.PI * 2, true);
    ctx.stroke();
    // Rim
    ctx.beginPath();
    ctx.strokeStyle = '#888888';
    ctx.lineWidth = 6;
    ctx.arc(wheelPosX, wheelPosY, 113, 0, Math.PI * 2, true);
    ctx.stroke();
    // Radius
    ctx.strokeStyle = '#BBBBBB';
    ctx.lineWidth = 1;
    for (var i = 0; i < 24; i++) {
      ctx.beginPath();
      ctx.arc(
        wheelPosX,
        wheelPosX,
        110,
        i * ((Math.PI * 2) / 24),
        ((i + 0.1) * Math.PI * 2) / 24,
        false
      );
      ctx.lineTo(wheelPosX, wheelPosX);
      ctx.stroke();
    }
  };

  return <Canvas width={500} height={300} draw={draw} className={styles.bikeCanvas} />;
};

export default BikeCanvas;
