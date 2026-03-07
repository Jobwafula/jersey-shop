import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Star, ShoppingBag, Trophy, Calendar, Heart, MessageCircle } from 'lucide-react';

// Sample retro kits data with KES prices
const retroKits = [
  {
    id: 1,
    name: 'Manchester United 1999 Treble',
    price: 13999,
    originalPrice: 17999,
    image: 'https://images.unsplash.com/photo-1668791160369-d20b8175eab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMGplcnNleXxlbnwxfHx8fDE3NzI3MTMxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'Manchester United',
    year: '1999',
    era: '90s Classics',
    discount: 23,
    rating: 4.9,
    limited: true
  },
  {
    id: 2,
    name: 'Brazil 1970 World Cup',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1668791160369-d20b8175eab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMGplcnNleXxlbnwxfHx8fDE3NzI3MTMxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'Brazil National Team',
    year: '1970',
    era: 'Golden Era',
    rating: 5.0,
    limited: true
  },
  {
    id: 3,
    name: 'AC Milan 1989 Champions',
    price: 12999,
    originalPrice: 15999,
    image: 'https://images.unsplash.com/photo-1584371632528-60e154034672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb290YmFsbCUyMGplcnNleSUyMHJlZHxlbnwxfHx8fDE3NzI3MzQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'AC Milan',
    year: '1989',
    era: '80s Legends',
    discount: 17,
    rating: 4.8
  },
  {
    id: 4,
    name: 'Germany 1990 World Cup',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Germany National Team',
    year: '1990',
    era: '90s Classics',
    rating: 4.7
  },
  {
    id: 5,
    name: 'Ajax 1995 Champions',
    price: 13999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Ajax Amsterdam',
    year: '1995',
    era: '90s Classics',
    rating: 4.9,
    limited: true
  },
  {
    id: 6,
    name: 'Argentina 1986 Maradona',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Argentina National Team',
    year: '1986',
    era: '80s Legends',
    rating: 5.0,
    limited: true
  },
  {
    id: 7,
    name: 'Manchester City 1970 FA Cup',
    price: 10999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Manchester City',
    year: '1970',
    era: 'Golden Era',
    rating: 4.6
  },
  {
    id: 8,
    name: 'Juventus 1996 Champions',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Juventus',
    year: '1996',
    era: '90s Classics',
    rating: 4.8
  }
];

// Era filters
const eras = [
  { name: 'All Eras', value: 'all' },
  { name: 'Golden Era (70s)', value: 'golden' },
  { name: '80s Legends', value: '80s' },
  { name: '90s Classics', value: '90s' },
  { name: 'Early 2000s', value: '2000s' }
];

const RetroKits = () => {
  const [selectedEra, setSelectedEra] = React.useState('all');

  const handleWhatsApp = (productName: string, price: number) => {
    const message = encodeURIComponent(`Hi, I'm interested in the retro kit: ${productName} (KSh ${price.toLocaleString()}). Is this vintage item available?`);
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  // Format price in KES
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  // Filter products based on selected era
  const filteredKits = selectedEra === 'all' 
    ? retroKits 
    : retroKits.filter(kit => {
        if (selectedEra === 'golden') return kit.era === 'Golden Era';
        if (selectedEra === '80s') return kit.era === '80s Legends';
        if (selectedEra === '90s') return kit.era === '90s Classics';
        return true;
      });

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Vintage Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        
        {/* Vintage Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L45 15 L30 0 L15 15 L30 30 L45 45 L30 60 L15 45 L30 30' stroke='%239C7C5C' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - Perfectly Centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold tracking-wide">TIMELESS CLASSICS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Retro Kits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the glory days with our collection of vintage and retro football jerseys. 
            Authentic replicas from football's golden eras.
          </p>
          
          <div className="flex justify-center mt-6">
            <Link 
              to="/retro" 
              className="group inline-flex items-center text-amber-700 font-semibold hover:text-amber-800 transition-colors bg-amber-100 px-6 py-3 rounded-full"
            >
              Explore All Retro Kits
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Era Filters - Perfectly Centered */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {eras.map((era) => (
            <button
              key={era.value}
              onClick={() => setSelectedEra(era.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedEra === era.value
                  ? 'bg-amber-700 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {era.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredKits.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fadeIn border border-amber-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Vintage Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.limited && (
                    <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      LIMITED
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-amber-400 px-3 py-1.5 rounded-full text-sm font-bold border border-amber-500/30">
                  {product.year}
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsApp(product.name, product.price)}
                  className="absolute top-20 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-110 z-10"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                {/* Quick View Button */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-amber-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-amber-600 hover:text-white">
                  Quick View
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold ml-1">{product.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Era Tag */}
                <span className="text-xs text-amber-700 font-semibold uppercase tracking-wider bg-amber-50 px-2 py-1 rounded-full">
                  {product.era}
                </span>
                
                {/* Product Name */}
                <h3 className="font-bold text-gray-900 mt-2 mb-1 line-clamp-1 group-hover:text-amber-700 transition-colors">
                  {product.name}
                </h3>
                
                {/* Team */}
                <p className="text-sm text-gray-500 mb-3 flex items-center">
                  <Trophy className="w-3 h-3 mr-1 text-amber-500" />
                  {product.team}
                </p>
                
                {/* Price in KES */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => handleWhatsApp(product.name, product.price)}
                    className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>

                  <button className="bg-gray-100 text-gray-600 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Vintage Badge */}
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

        {/* View All Button - Mobile */}
        <div className="text-center mt-10 lg:hidden">
          <Link 
            to="/retro" 
            className="inline-flex items-center text-amber-700 font-semibold hover:text-amber-800 transition-colors bg-amber-100 px-6 py-3 rounded-full"
          >
            Explore All Retro Kits
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Nostalgia Banner - Perfectly Centered */}
        <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200" 
              alt="Vintage football"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/80"></div>
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
                Authentic retro jerseys from football's most memorable moments. 
                Each piece comes with a certificate of authenticity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/retro/collectors">
                  <button className="bg-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-600 transition-colors shadow-xl w-full sm:w-auto">
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

        {/* Era Highlights - Centered Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-200 hover:bg-amber-50 transition-colors group">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-200 transition-colors">
              <span className="text-3xl">🏆</span>
            </div>
            <h4 className="font-bold text-gray-900">70s Golden Era</h4>
            <p className="text-sm text-amber-600">12 kits</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-200 hover:bg-amber-50 transition-colors group">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-200 transition-colors">
              <span className="text-3xl">⭐</span>
            </div>
            <h4 className="font-bold text-gray-900">80s Legends</h4>
            <p className="text-sm text-amber-600">18 kits</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-200 hover:bg-amber-50 transition-colors group">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-200 transition-colors">
              <span className="text-3xl">⚽</span>
            </div>
            <h4 className="font-bold text-gray-900">90s Classics</h4>
            <p className="text-sm text-amber-600">24 kits</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-200 hover:bg-amber-50 transition-colors group">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-200 transition-colors">
              <span className="text-3xl">📀</span>
            </div>
            <h4 className="font-bold text-gray-900">Early 2000s</h4>
            <p className="text-sm text-amber-600">15 kits</p>
          </div>
        </div>

        {/* Vintage Newsletter - Perfectly Centered */}
        <div className="mt-16 bg-amber-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-100 mb-3">
            Relive the Memories
          </h3>
          <p className="text-amber-200/80 mb-6 max-w-xl mx-auto">
            Subscribe to get updates on new retro arrivals, vintage collections, and exclusive re-releases.
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