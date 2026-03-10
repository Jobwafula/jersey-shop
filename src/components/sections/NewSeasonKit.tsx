// src/components/NewSeasonKits.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShoppingBag, Heart, Star, Calendar } from 'lucide-react';

// Sample data – replace with real API/Firestore later
const newSeasonKits = [
  {
    id: 1,
    name: 'Manchester United 2024/25 Home',
    price: 12500,
    originalPrice: 13999,
    image: 'https://images.unsplash.com/photo-1689624291789-7b402a15915a?auto=format&fit=crop&q=80&w=800',
    team: 'Manchester United',
    league: 'Premier League',
    releaseDate: 'July 2024',
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: 'Real Madrid 2024/25 Away',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1595853663378-fc2879e00d72?auto=format&fit=crop&q=80&w=800',
    team: 'Real Madrid',
    league: 'La Liga',
    releaseDate: 'June 2024',
    rating: 5.0,
    isNew: true,
  },
  {
    id: 3,
    name: 'Bayern Munich 2024/25 Third',
    price: 11500,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1763656813028-3eb492fa7bcf?auto=format&fit=crop&q=80&w=800',
    team: 'Bayern Munich',
    league: 'Bundesliga',
    releaseDate: 'August 2024',
    rating: 4.7,
    isNew: true,
  },
  {
    id: 4,
    name: 'Paris Saint-Germain 2024/25 Home',
    price: 12299,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'Paris Saint-Germain',
    league: 'Ligue 1',
    releaseDate: 'July 2024',
    rating: 4.6,
    isNew: true,
  },
  {
    id: 5,
    name: 'Liverpool 2024/25 Away',
    price: 11799,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'Liverpool',
    league: 'Premier League',
    releaseDate: 'June 2024',
    rating: 4.9,
    isNew: true,
  },
  {
    id: 6,
    name: 'Barcelona 2024/25 Third',
    price: 12199,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'Barcelona',
    league: 'La Liga',
    releaseDate: 'August 2024',
    rating: 4.7,
    isNew: true,
  },
  {
    id: 7,
    name: 'AC Milan 2024/25 Home',
    price: 11699,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'AC Milan',
    league: 'Serie A',
    releaseDate: 'July 2024',
    rating: 4.8,
    isNew: true,
  },
  {
    id: 8,
    name: 'Arsenal 2024/25 Away',
    price: 11499,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?auto=format&fit=crop&q=80&w=800',
    team: 'Arsenal',
    league: 'Premier League',
    releaseDate: 'June 2024',
    rating: 4.7,
    isNew: true,
  },
];

const NewSeasonKits = () => {
  const formatPrice = (price: number) => `KES ${price.toLocaleString()}`;

  const handleWhatsApp = (name: string, price: number) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${name} (KES ${price.toLocaleString()}). Is it available for pre-order?`
    );
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">2024/25 SEASON</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            New Season Kits
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Get ready for the new season with the latest authentic kits from your favorite clubs.
          </p>

          <Link
            to="/new-season"
            className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All New Season Kits
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newSeasonKits.map((product, index) => (
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
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    NEW SEASON
                  </span>
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
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
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors shadow-lg">
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
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                  {product.league}
                </span>

                <h3 className="font-bold text-gray-900 mt-1.5 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>


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
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
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
            to="/new-season"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All New Season Kits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewSeasonKits;