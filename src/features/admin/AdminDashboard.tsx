// src/features/admin/AdminDashboard.tsx
import { useState } from 'react';
import { Category, Product } from '../../types';

export const AdminDashboard = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Form Area */}
      <aside className="w-1/3 bg-white border-r p-8 overflow-y-auto">
        <h1 className="text-2xl font-black mb-8 italic">JERSEY ADMIN</h1>
        
        {/* Category Creator */}
        <section className="mb-10">
          <h2 className="text-sm font-bold text-slate-400 uppercase mb-4">Create Category</h2>
          <CategoryForm onAdd={(cat) => setCategories([...categories, cat])} />
        </section>

        {/* Product Creator */}
        <section>
          <h2 className="text-sm font-bold text-slate-400 uppercase mb-4">Post Product</h2>
          <ProductForm 
            categories={categories} 
            onAdd={(prod) => setProducts([...products, prod])} 
          />
        </section>
      </aside>

      {/* Live Preview Area */}
      <main className="w-2/3 p-12">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Storefront Preview</h2>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Live Sync Active</span>
        </header>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard 
              key={p.id} 
              product={p} 
              categoryName={categories.find(c => c.id === p.categoryId)?.name}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
