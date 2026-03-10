// src/components/NewArrivals.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShoppingBag, Heart, Star, Clock } from 'lucide-react';

// Sample data with KES prices (replace with real API/Firestore data later)
const newArrivals = [
  {
    id: 1,
    name: 'Manchester United 2024/25 Home',
    price: 12500,
    originalPrice: 13999,
    image: 'https://images.unsplash.com/photo-1689624291789-7b402a15915a?auto=format&fit=crop&q=80&w=800',
    team: 'Manchester United',
    league: 'Premier League',
    discount: 10,
    isNew: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Real Madrid 2024/25 Away',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1595853663378-fc2879e00d72?auto=format&fit=crop&q=80&w=800',
    team: 'Real Madrid',
    league: 'La Liga',
    isNew: true,
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Bayern Munich 2024/25 Third',
    price: 11500,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1763656813028-3eb492fa7bcf?auto=format&fit=crop&q=80&w=800',
    team: 'Bayern Munich',
    league: 'Bundesliga',
    discount: 11,
    isNew: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'AC Milan Retro Edition 2024',
    price: 13499,
    image: 'https://images.unsplash.com/photo-1584371632528-60e154034672?auto=format&fit=crop&q=80&w=800',
    team: 'AC Milan',
    league: 'Serie A',
    isNew: true,
    rating: 4.9,
  },
];

const NewArrivals = () => {
  const formatPrice = (price: number) => `KES ${price.toLocaleString()}`;

  const handleWhatsApp = (name: string, price: number) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${name} (KES ${price.toLocaleString()}). Is it available?`
    );
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 mb-4">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">FRESH DROPS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            New Arrivals
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Be the first to rock the latest authentic kits from top clubs worldwide.
          </p>

          <Link
            to="/new-arrivals"
            className="group inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
          >
            View All New Arrivals
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newArrivals.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image + Badges */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.team} ${product.league} jersey`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Top-left badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* WhatsApp quick contact */}
                <button
                  onClick={() => handleWhatsApp(product.name, product.price)}
                  className="absolute top-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 z-10"
                  aria-label={`Inquire about ${product.name} on WhatsApp`}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                {/* Quick actions overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition-colors shadow-lg">
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
                <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wider">
                  {product.league}
                </span>

                <h3 className="font-bold text-gray-900 mt-1.5 mb-1 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3">{product.team}</p>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>

                  <button
                    onClick={() => handleWhatsApp(product.name, product.price)}
                    className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
                    aria-label={`Inquire about ${product.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>

                  <button className="bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile "View All" */}
        <div className="text-center mt-10 lg:hidden">
          <Link
            to="/new-arrivals"
            className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
          >
            View All New Arrivals
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;