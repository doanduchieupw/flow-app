import { create } from 'zustand';

export interface IViewport {
  x: number;
  y: number;
  zoom: number;
  setViewport: (params: Pick<IViewport, 'x' | 'y' | 'zoom'>) => void;
}

export const useViewportFlow = create<IViewport>()((set) => ({
  x: 0,
  y: 0,
  zoom: 1,
  setViewport: (params) => set(params),
}));
