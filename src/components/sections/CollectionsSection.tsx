// src/components/CollectionsSection.tsx

import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShoppingBag,
  Star,
} from "lucide-react";

// MOCK PRODUCTS GROUPED BY CATEGORY
const collections = [
  {
    id: 1,
    category: "New Season Kits",
    slug: "new-season-kits",
    products: [
      {
        id: 101,
        name: "Arsenal Home 24/25",
        price: "KES 4,500",
        image:
          "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 102,
        name: "Chelsea Away 24/25",
        price: "KES 4,800",
        image:
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 103,
        name: "Barcelona Third Kit",
        price: "KES 5,000",
        image:
          "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 2,
    category: "Retro Jerseys",
    slug: "retro-jerseys",
    products: [
      {
        id: 201,
        name: "AC Milan Retro 2007",
        price: "KES 5,500",
        image:
          "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 202,
        name: "Brazil 2002 Retro",
        price: "KES 5,200",
        image:
          "https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 203,
        name: "Manchester United 1999",
        price: "KES 5,700",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    id: 3,
    category: "Training Wear",
    slug: "training-wear",
    products: [
      {
        id: 301,
        name: "Nike Strike Training Top",
        price: "KES 3,500",
        image:
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 302,
        name: "Adidas Training Set",
        price: "KES 4,000",
        image:
          "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 303,
        name: "Puma Elite Training Kit",
        price: "KES 4,200",
        image:
          "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

const CollectionsSection = () => {
  return (
    <section className="bg-[#050505] py-20 md:py-28">
      <div className="container mx-auto px-5 lg:px-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-red-500 text-xs font-semibold mb-4">
              Collections
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Shop By
              <span className="block text-white/60">
                Category
              </span>
            </h2>
          </div>

          <p className="text-white/60 max-w-xl leading-relaxed">
            Explore premium football jerseys from your favorite
            clubs, retro classics and elite training collections.
          </p>
        </div>

        {/* CATEGORY SECTIONS */}
        <div className="space-y-20">
          {collections.map((collection) => (
            <div key={collection.id}>

              {/* CATEGORY HEADER */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {collection.category}
                  </h3>

                  <p className="text-white/50 mt-2 text-sm">
                    {collection.products.length} Products Available
                  </p>
                </div>

                <Link
                  to={`/collections/${collection.slug}`}
                  className="hidden md:flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-red-500 transition-colors"
                >
                  View All

                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* PRODUCTS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {collection.products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group relative overflow-hidden rounded-[28px] bg-zinc-900 border border-white/5 hover:border-red-500/30 transition-all duration-500"
                  >
                    {/* IMAGE */}
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      {/* TOP BADGES */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          New
                        </div>

                        <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                          <Star className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 line-clamp-1">
                        {product.name}
                      </h4>

                      <div className="flex items-center justify-between">
                        <p className="text-red-500 text-lg font-black">
                          {product.price}
                        </p>

                        <button className="flex items-center gap-2 bg-white text-black hover:bg-red-600 hover:text-white px-4 py-2 rounded-full text-sm font-bold transition-all duration-300">
                          <ShoppingBag className="w-4 h-4" />

                          Shop
                        </button>
                      </div>
                    </div>

                    {/* HOVER EFFECT */}
                    <div className="absolute inset-0 rounded-[28px] ring-1 ring-transparent group-hover:ring-red-500/40 transition-all duration-500" />
                  </Link>
                ))}
              </div>

              {/* MOBILE VIEW ALL */}
              <div className="mt-8 md:hidden">
                <Link
                  to={`/collections/${collection.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-red-500 transition-colors"
                >
                  View All

                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;