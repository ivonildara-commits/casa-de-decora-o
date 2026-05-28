/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'mobiliario' | 'iluminacao' | 'acessorios' | 'arte';
  price: number;
  rating: number;
  image: string;
  description: string;
  dimensions: string;
  material: string;
  colors: string[];
}

export interface ColorPalette {
  id: string;
  name: string;
  description: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  textColor: string;
}

export type RoomType = 'sala' | 'quarto' | 'escritorio' | 'jantar';

export interface StyleTheme {
  id: string;
  name: string;
  description: string;
  roomImages: Record<RoomType, string>;
  colors: ColorPalette;
  suggestion: string;
}

export interface BudgetStep {
  title: string;
  description: string;
}

export interface BudgetData {
  roomType: RoomType;
  styleId: string;
  areaRange: string;
  needConsultancy: boolean;
  notes: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
}

export interface RoomPreset {
  id: string;
  name: string;
  styles: StyleTheme[];
}
