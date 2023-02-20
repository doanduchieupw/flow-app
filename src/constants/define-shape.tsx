import { ReactNode } from 'react';
import { Rect } from 'react-konva';

export interface IReatangle {
  x: number;
  y: number;
  width: number;
  height: number;

  previewShape: (params: Pick<IReatangle, 'x' | 'y' | 'width' | 'height'>) => ReactNode;
}

export const initRetangle: IReatangle = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,

  previewShape: ({ x, y, width, height }) => (
    <Rect x={x} y={y} width={width} height={height} stroke='#9f9f9f' strokeWidth={2} />
  ),
};
