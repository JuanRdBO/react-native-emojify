import type { ImageSource } from 'expo-image';

export interface Item {
  itemToRender: string | ImageSource;
  x: number;
  y: number;
  type: 'emoji' | 'image';
}
