import { useEffect, useRef } from 'react';

interface CanvasProps {
  width: number;
  height: number;
  draw: Function;
  className?: string;
}

const Canvas = ({ width, height, draw, className }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context && draw) {
        draw(context);
      }
    }
    // eslint-disable-next-line
  }, [canvasRef]);

  return <canvas ref={canvasRef} height={height} width={width} className={className} />;
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  draw: () => {},
  className: '',
};

export default Canvas;
