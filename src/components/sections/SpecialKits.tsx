// src/components/SpecialKits.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShoppingBag, Heart, Star, Sparkles } from 'lucide-react';

// Sample data – replace with real API/Firestore later
const specialKits = [
  {
    id: 1,
    name: 'Champions League Final Edition',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'UEFA Champions League',
    edition: 'Final Edition',
    rating: 5.0,
    special: true,
  },
  {
    id: 2,
    name: 'European Championship 2024',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'UEFA Euro 2024',
    edition: 'Tournament Edition',
    rating: 4.9,
    special: true,
  },
  {
    id: 3,
    name: 'Copa America 2024',
    price: 11499,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'CONMEBOL',
    edition: 'Tournament Edition',
    rating: 4.8,
    special: true,
  },
  {
    id: 4,
    name: 'Club World Cup Champions',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'FIFA Club World Cup',
    edition: 'Champions Edition',
    rating: 4.7,
    special: true,
  },
  {
    id: 5,
    name: 'Anniversary Edition 125 Years',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'Juventus',
    edition: '125th Anniversary',
    rating: 5.0,
    special: true,
  },
  {
    id: 6,
    name: 'Charity Match Special',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'Soccer Aid',
    edition: 'Charity Edition',
    rating: 4.9,
    special: true,
  },
  {
    id: 7,
    name: 'All-Star Game 2024',
    price: 10499,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'MLS All-Stars',
    edition: 'All-Star Edition',
    rating: 4.6,
    special: true,
  },
  {
    id: 8,
    name: 'Legends Tribute Series',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'FIFA Legends',
    edition: 'Tribute Edition',
    rating: 5.0,
    special: true,
  },
];

const SpecialKits = () => {
  const formatPrice = (price: number) => `KES ${price.toLocaleString()}`;

  const handleWhatsApp = (name: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the special edition ${name}. Is it available?`
    );
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 via-white to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-800 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">LIMITED SPECIALS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Special Kits
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Exclusive tournament editions, anniversary kits, charity releases & limited drops.
          </p>

          <Link
            to="/special"
            className="group inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            View All Special Kits
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid – Consistent with other sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {specialKits.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image + Badges */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.team} ${product.edition}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Special badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    SPECIAL
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
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors shadow-lg">
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
                <span className="text-xs text-purple-600 font-semibold uppercase tracking-wider bg-purple-50 px-2 py-1 rounded-full">
                  {product.edition}
                </span>

                <h3 className="font-bold text-gray-900 mt-2 mb-1 line-clamp-2 group-hover:text-purple-700 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3">{product.team}</p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>

                  <div className="flex gap-2">
                    <button className="bg-purple-600 text-white p-2.5 rounded-full hover:bg-purple-700 transition-colors">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="bg-green-600 text-white p-2.5 rounded-full hover:bg-green-700 transition-colors"
                      aria-label={`Inquire about ${product.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-100 text-gray-700 p-2.5 rounded-full hover:bg-gray-200 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile "View All" */}
        <div className="text-center mt-10 lg:hidden">
          <Link
            to="/special"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            View All Special Kits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialKits;