// src/components/RetroKits.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ShoppingBag, Heart, Star, Trophy, Calendar, Clock } from 'lucide-react';

// Sample data – replace with real API/Firestore later
const retroKits = [
  {
    id: 1,
    name: 'Manchester United 1999 Treble',
    price: 13999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1668791160369-d20b8175eab2?auto=format&fit=crop&q=80&w=800',
    team: 'Manchester United',
    year: '1999',
    era: '90s Classics',
    discount: 23,
    rating: 4.9,
    limited: true,
  },
  {
    id: 2,
    name: 'Brazil 1970 World Cup',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1668791160369-d20b8175eab2?auto=format&fit=crop&q=80&w=800',
    team: 'Brazil National Team',
    year: '1970',
    era: 'Golden Era',
    rating: 5.0,
    limited: true,
  },
  {
    id: 3,
    name: 'AC Milan 1989 Champions',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1584371632528-60e154034672?auto=format&fit=crop&q=80&w=800',
    team: 'AC Milan',
    year: '1989',
    era: '80s Legends',
    discount: 17,
    rating: 4.8,
  },
  // ... add remaining items similarly
];

const eras = [
  { name: 'All Eras', value: 'all' },
  { name: 'Golden Era (70s)', value: 'golden' },
  { name: '80s Legends', value: '80s' },
  { name: '90s Classics', value: '90s' },
  { name: 'Early 2000s', value: '2000s' },
];

const RetroKits = () => {
  const [selectedEra, setSelectedEra] = useState('all');

  const formatPrice = (price: number) => `KES ${price.toLocaleString()}`;

  const handleWhatsApp = (name: string, price: number) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the retro kit: ${name} (KES ${price.toLocaleString()}). Is this vintage item available?`
    );
   window.open(`https://wa.me/254743666719?text=${message}`, '_blank');
  };

  // Filter kits by selected era
  const filteredKits = selectedEra === 'all'
    ? retroKits
    : retroKits.filter(kit => {
        if (selectedEra === 'golden') return kit.era === 'Golden Era';
        if (selectedEra === '80s') return kit.era === '80s Legends';
        if (selectedEra === '90s') return kit.era === '90s Classics';
        return true;
      });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 via-orange-50 to-white relative overflow-hidden">
      {/* Vintage subtle background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C7C5C' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-800 text-amber-100 mb-4">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">TIMELESS CLASSICS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Retro Kits
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Relive football's golden eras with authentic retro jerseys and vintage replicas.
          </p>

          <Link
            to="/retro"
            className="group inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors"
          >
            Explore All Retro Kits
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Era Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 md:mb-12">
          {eras.map(era => (
            <button
              key={era.value}
              onClick={() => setSelectedEra(era.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedEra === era.value
                  ? 'bg-amber-800 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {era.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredKits.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image + Badges */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.team} ${product.year} retro jersey`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Vintage overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent pointer-events-none" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.limited && (
                    <span className="bg-amber-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      LIMITED
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-amber-300 px-3 py-1.5 rounded-full text-sm font-bold border border-amber-500/30">
                  {product.year}
                </div>

                {/* WhatsApp quick contact */}
                <button
                  onClick={() => handleWhatsApp(product.name, product.price)}
                  className="absolute top-20 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 z-10"
                  aria-label={`Inquire about ${product.name} on WhatsApp`}
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors shadow-lg">
                    Quick View
                  </button>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center shadow-md">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="ml-1.5 text-sm font-semibold">{product.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-full">
                  {product.era}
                </span>

                <h3 className="font-bold text-gray-900 mt-2 mb-1 line-clamp-2 group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-3 flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-amber-500" />
                  {product.team}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
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

                {/* Year info */}
                {product.year && (
                  <div className="mt-3 flex items-center text-xs text-amber-600">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Vintage {product.year}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="text-center mt-10 lg:hidden">
          <Link
            to="/retro"
            className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 transition-colors"
          >
            Explore All Retro Kits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Nostalgia Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200"
              alt="Vintage football action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/80" />
          </div>

          <div className="relative px-8 py-16 md:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-amber-500/20 backdrop-blur-sm text-amber-300 px-4 py-2 rounded-full mb-6 border border-amber-400/30">
                <Trophy className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">COLLECTOR'S EDITION</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Own a Piece of History
              </h3>

              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                Authentic retro jerseys from football's most iconic moments. Each piece includes a certificate of authenticity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/retro/collectors">
                  <button className="bg-amber-500 text-amber-900 px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-xl w-full sm:w-auto">
                    View Collector's Edition
                  </button>
                </Link>

                <Link to="/retro/limited">
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/30 w-full sm:w-auto">
                    Limited Stock
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Era Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { emoji: '🏆', title: '70s Golden Era', count: '12 kits' },
            { emoji: '⭐', title: '80s Legends', count: '18 kits' },
            { emoji: '⚽', title: '90s Classics', count: '24 kits' },
            { emoji: '📀', title: 'Early 2000s', count: '15 kits' },
          ].map((era, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-200 hover:bg-amber-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-200 transition-colors">
                <span className="text-3xl">{era.emoji}</span>
              </div>
              
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-amber-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-100 mb-3">
            Relive the Memories
          </h3>
          <p className="text-amber-200/80 mb-6 max-w-xl mx-auto">
            Subscribe for updates on new retro arrivals, vintage collections, and exclusive re-releases.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-amber-800/50 border border-amber-700 text-white placeholder-amber-400 focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <button className="bg-amber-500 text-amber-900 px-6 py-3 rounded-xl font-semibold hover:bg-amber-400 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RetroKits;