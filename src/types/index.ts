export interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  image: string;
  isAuthentic: boolean;
}

// src/types/index.ts
export interface Category {
  id: string;
  name: string;
  slug: string; // e.g., 'premier-league'
}