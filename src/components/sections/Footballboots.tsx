// src/components/FootballBoots.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShoppingBag, Heart, Star, Footprints } from 'lucide-react';

// Sample data – replace with real API/Firestore later
const footballBoots = [
  {
    id: 1,
    name: 'SpeedFury Elite FG',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Nike',
    type: 'Firm Ground',
    rating: 4.9,
    color: 'Blue/Red',
  },
  {
    id: 2,
    name: 'ControlMaster Pro SG',
    price: 27999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Adidas',
    type: 'Soft Ground',
    rating: 4.8,
    color: 'Black/Gold',
  },
  {
    id: 3,
    name: 'Precision Strike AG',
    price: 21999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Puma',
    type: 'Artificial Grass',
    rating: 4.7,
    color: 'White/Green',
  },
  {
    id: 4,
    name: 'Phantom Vision TF',
    price: 18999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Nike',
    type: 'Turf',
    rating: 4.6,
    color: 'Black/White',
  },
  {
    id: 5,
    name: 'Predator Accuracy FG',
    price: 25999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Adidas',
    type: 'Firm Ground',
    rating: 4.9,
    color: 'Red/Black',
  },
  {
    id: 6,
    name: 'Future Z IC',
    price: 16999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Puma',
    type: 'Indoor',
    rating: 4.5,
    color: 'Yellow/Black',
  },
  {
    id: 7,
    name: 'Mercurial Superfly',
    price: 28999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Nike',
    type: 'Firm Ground',
    rating: 5.0,
    color: 'Orange/Black',
  },
  {
    id: 8,
    name: 'X Speedportal AG',
    price: 23999,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800',
    brand: 'Adidas',
    type: 'Artificial Grass',
    rating: 4.8,
    color: 'White/Blue',
  },
];

const FootballBoots = () => {
  const formatPrice = (price: number) => `KES ${price.toLocaleString()}`;

  const handleWhatsApp = (name: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${name} football boots. Do you have size 42 in stock?`
    );
    window.open(`https://wa.me/254743666719?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 text-white mb-4">
            <Footprints className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">PRO PERFORMANCE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Football Boots
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Elite boots built for every surface — from firm ground to indoor turf.
          </p>

          <Link
            to="/boots"
            className="group inline-flex items-center gap-2 text-gray-800 font-semibold hover:text-gray-900 transition-colors"
          >
            View All Football Boots
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {footballBoots.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image + Badges */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.brand} ${product.type} football boots in ${product.color}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Brand badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {product.brand}
                  </span>
                </div>

                {/* WhatsApp quick contact */}
                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 z-10"
                  aria-label={`Inquire about ${product.name} on WhatsApp`}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-colors shadow-lg">
                    Quick View
                  </button>
                </div>

                {/* Rating badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center shadow-md">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1.5 text-sm font-semibold">{product.rating}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                    {product.type}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {product.color}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-gray-800 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3">{product.brand}</p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>

                  <div className="flex gap-2">
                    <button className="bg-gray-800 text-white p-2.5 rounded-full hover:bg-gray-900 transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="bg-green-600 text-white p-2.5 rounded-full hover:bg-green-700 transition-colors"
                      aria-label={`Inquire about ${product.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FootballBoots;