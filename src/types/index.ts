export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  sizes: string[];
  colors?: string[];
  inStock: boolean;
  description: string;
  team: string;
  league: string;
  isNew?: boolean;
  isFeatured?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}