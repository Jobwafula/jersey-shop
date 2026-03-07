
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Award, MessageCircle, Sparkles } from 'lucide-react';

const specialKits = [
  {
    id: 1,
    name: 'Champions League Final Edition',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'UEFA Champions League',
    edition: 'Final Edition',
    rating: 5.0,
    special: true
  },
  {
    id: 2,
    name: 'European Championship 2024',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'UEFA Euro 2024',
    edition: 'Tournament Edition',
    rating: 4.9,
    special: true
  },
  {
    id: 3,
    name: 'Copa America 2024',
    price: 114.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'CONMEBOL',
    edition: 'Tournament Edition',
    rating: 4.8,
    special: true
  },
  {
    id: 4,
    name: 'Club World Cup Champions',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'FIFA Club World Cup',
    edition: 'Champions Edition',
    rating: 4.7,
    special: true
  },
  {
    id: 5,
    name: 'Anniversary Edition 125 Years',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Juventus',
    edition: '125th Anniversary',
    rating: 5.0,
    special: true
  },
  {
    id: 6,
    name: 'Charity Match Special',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'Soccer Aid',
    edition: 'Charity Edition',
    rating: 4.9,
    special: true
  },
  {
    id: 7,
    name: 'All-Star Game 2024',
    price: 104.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'MLS All-Stars',
    edition: 'All-Star Edition',
    rating: 4.6,
    special: true
  },
  {
    id: 8,
    name: 'Legends Tribute Series',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    team: 'FIFA Legends',
    edition: 'Tribute Edition',
    rating: 5.0,
    special: true
  }
];

const SpecialKits = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in the special edition ${productName}. Is it available?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold tracking-wide">LIMITED SPECIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Special Kits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Exclusive tournament editions, anniversary kits, and limited releases.
            </p>
          </div>
          
          <Link 
            to="/special" 
            className="group inline-flex items-center mt-4 md:mt-0 text-purple-600 font-semibold hover:text-purple-700 transition-colors bg-purple-50 px-6 py-3 rounded-full"
          >
            View All Specials
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialKits.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-purple-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    SPECIAL
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-110 z-10"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-purple-600 hover:text-white">
                  Quick View
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold ml-1">{product.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <span className="text-xs text-purple-600 font-semibold uppercase tracking-wider">
                  {product.edition}
                </span>
                
                <h3 className="font-bold text-gray-900 mt-1 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-500 mb-3">{product.team}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  
                  <div className="flex gap-2">
                    <button className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
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

export default SpecialKits;