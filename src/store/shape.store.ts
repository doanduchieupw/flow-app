import { create } from 'zustand';
import { initRetangle, IReatangle } from '../constants/define-shape';

export interface IShape {
  type: string;
  attribute: IReatangle;
  setType: (params: string) => void;
}

export const useShape = create<IShape>()((set) => ({
  type: 'retangle',
  attribute: initRetangle,
  setType: (params) => set({ type: params }),
}));
