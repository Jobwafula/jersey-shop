
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Calendar, MessageCircle, Heart } from 'lucide-react';

const newSeasonKits = [
  {
    id: 1,
    name: 'Manchester United 2024/25 Home',
    price: 12500,
    originalPrice: 13999,
    image: 'https://images.unsplash.com/photo-1689624291789-7b402a15915a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZvb3RiYWxsJTIwamVyc2V5fGVufDF8fHx8MTc3MjczNDU1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'Manchester United',
    league: 'Premier League',
    releaseDate: 'July 2024',
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: 'Real Madrid 2024/25 Away',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Real Madrid',
    league: 'La Liga',
    releaseDate: 'June 2024',
    rating: 5.0,
    isNew: true
  },
  {
    id: 3,
    name: 'Bayern Munich 2024/25 Third',
    price: 11500,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Bayern Munich',
    league: 'Bundesliga',
    releaseDate: 'August 2024',
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: 'Paris Saint-Germain 2024/25 Home',
    price: 12299,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Paris Saint-Germain',
    league: 'Ligue 1',
    releaseDate: 'July 2024',
    rating: 4.6,
    isNew: true
  },
  {
    id: 5,
    name: 'Liverpool 2024/25 Away',
    price: 11799,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Liverpool',
    league: 'Premier League',
    releaseDate: 'June 2024',
    rating: 4.9,
    isNew: true
  },
  {
    id: 6,
    name: 'Barcelona 2024/25 Third',
    price: 12199,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Barcelona',
    league: 'La Liga',
    releaseDate: 'August 2024',
    rating: 4.7,
    isNew: true
  },
  {
    id: 7,
    name: 'AC Milan 2024/25 Home',
    price: 11699,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'AC Milan',
    league: 'Serie A',
    releaseDate: 'July 2024',
    rating: 4.8,
    isNew: true
  },
  {
    id: 8,
    name: 'Arsenal 2024/25 Away',
    price: 11499,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Arsenal',
    league: 'Premier League',
    releaseDate: 'June 2024',
    rating: 4.7,
    isNew: true
  }
];

const NewSeasonKits = () => {
  const handleWhatsApp = (productName: string, price: number) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${productName} (KSh ${price.toLocaleString()}). Is it available for pre-order?`);
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  // Format price in KES
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  // Calculate discount percentage
  const getDiscountPercentage = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - Perfectly Centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold tracking-wide">2024/25 SEASON</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            New Season Kits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get ready for the new season with the latest kits from your favorite clubs.
          </p>
          
          <div className="flex justify-center mt-6">
            <Link 
              to="/new-season" 
              className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-blue-50 px-6 py-3 rounded-full"
            >
              View All New Season
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newSeasonKits.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    NEW SEASON
                  </span>
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      -{getDiscountPercentage(product.originalPrice, product.price)}%
                    </span>
                  )}
                </div>

                {/* WhatsApp Button on Image */}
                <button
                  onClick={() => handleWhatsApp(product.name, product.price)}
                  className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-110 z-10"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                {/* Quick View Button */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-blue-500 hover:text-white">
                  Quick View
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold ml-1">{product.rating}</span>
                </div>
              </div>

              <div className="p-5">
                {/* League */}
                <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                  {product.league}
                </span>
                
                {/* Product Name */}
                <h3 className="font-bold text-gray-900 mt-1 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Team */}
                <p className="text-sm text-gray-500 mb-2">{product.team}</p>
                
                {/* Release Date */}
                <p className="text-xs text-blue-500 mb-3">Releases: {product.releaseDate}</p>
                
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
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile */}
        <div className="text-center mt-10 lg:hidden">
          <Link 
            to="/new-season" 
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-blue-50 px-6 py-3 rounded-full"
          >
            View All New Season
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewSeasonKits;