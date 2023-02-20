import { create } from 'zustand';

export interface IPreviewShape {
  zIndex: number;
  cursor: 'default' | 'crosshair';
  setPreview: (params: Pick<IPreviewShape, 'zIndex' | 'cursor'>) => void;
}

export const usePreviewShape = create<IPreviewShape>()((set) => ({
  zIndex: 30,
  cursor: 'default',
  setPreview: (params) => set(params),
}));
