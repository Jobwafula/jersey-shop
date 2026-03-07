
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Clock, MessageCircle, Heart } from 'lucide-react';

// Sample new arrivals data with KES prices
const newArrivals = [
  {
    id: 1,
    name: 'Manchester United 2024/25 Home',
    price: 12500,
    originalPrice: 13999,
    image: 'https://images.unsplash.com/photo-1689624291789-7b402a15915a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZvb3RiYWxsJTIwamVyc2V5fGVufDF8fHx8MTc3MjczNDU1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'Manchester United',
    league: 'Premier League',
    discount: 10,
    isNew: true,
    rating: 4.8
  },
  {
    id: 2,
    name: 'Real Madrid 2024/25 Away',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1595853663378-fc2879e00d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNvY2NlciUyMGplcnNleXxlbnwxfHx8fDE3NzI3MzQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'Real Madrid',
    league: 'La Liga',
    isNew: true,
    rating: 5.0
  },
  {
    id: 3,
    name: 'Bayern Munich 2024/25 Third',
    price: 11500,
    originalPrice: 12999,
    image: 'https://images.unsplash.com/photo-1763656813028-3eb492fa7bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGplcnNleSUyMGJsdWV8ZW58MXx8fHwxNzcyNzM0NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'Bayern Munich',
    league: 'Bundesliga',
    discount: 11,
    isNew: true,
    rating: 4.7
  },
  {
    id: 4,
    name: 'AC Milan Retro Edition 2024',
    price: 13499,
    image: 'https://images.unsplash.com/photo-1584371632528-60e154034672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmb290YmFsbCUyMGplcnNleSUyMHJlZHxlbnwxfHx8fDE3NzI3MzQ1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    team: 'AC Milan',
    league: 'Serie A',
    isNew: true,
    rating: 4.9
  },
  
];

const NewArrivals = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${productName} (KSh ${new Intl.NumberFormat().format(12500)}). Is it available?`);
    window.open(`https://wa.me/254712345678?text=${message}`, '_blank');
  };

  // Format price in KES
  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - Centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4 mx-auto">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold tracking-wide">FRESH DROPS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            New Arrivals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be the first to wear the latest kits from top clubs around the world. 
            Fresh styles, authentic quality.
          </p>
          
          <Link 
            to="/new-arrivals" 
            className="group inline-flex items-center mt-6 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors bg-yellow-50 px-6 py-3 rounded-full mx-auto"
          >
            View All New Arrivals
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {/* WhatsApp Button - Prominently Displayed */}
                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-110 z-10"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                {/* Quick View Button */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-yellow-500 hover:text-white">
                  Quick View
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold ml-1">{product.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* League Tag */}
                <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wider">
                  {product.league}
                </span>
                
                {/* Product Name */}
                <h3 className="font-bold text-gray-900 mt-1 mb-2 line-clamp-1 group-hover:text-yellow-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Team */}
                <p className="text-sm text-gray-500 mb-3">{product.team}</p>
                
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
                  <button className="flex-1 bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => handleWhatsApp(product.name)}
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
            to="/new-arrivals" 
            className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors bg-yellow-50 px-6 py-3 rounded-full"
          >
            View All New Arrivals
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;