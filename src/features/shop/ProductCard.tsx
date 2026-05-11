// src/features/shop/ProductCard.tsx
import { Product, Category } from '../../types';

interface Props {
  product: Product;
  categoryName?: string;
}

export const ProductCard = ({ product, categoryName }: Props) => {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="aspect-[3/4] bg-slate-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isAuthentic && (
          <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            Authentic
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-slate-500 uppercase tracking-tighter mb-1">
          {categoryName || 'General'}
        </p>
        <h3 className="font-bold text-slate-900 truncate">{product.name}</h3>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-black text-blue-600">
            KSh {product.price.toLocaleString()}
          </span>
          <button className="bg-slate-900 text-white text-xs px-3 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
