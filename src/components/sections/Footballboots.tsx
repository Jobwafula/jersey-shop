
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Footprints, MessageCircle,} from 'lucide-react';

const footballBoots = [
  {
    id: 1,
    name: 'SpeedFury Elite FG',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Nike',
    type: 'Firm Ground',
    rating: 4.9,
    color: 'Blue/Red'
  },
  {
    id: 2,
    name: 'ControlMaster Pro SG',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Adidas',
    type: 'Soft Ground',
    rating: 4.8,
    color: 'Black/Gold'
  },
  {
    id: 3,
    name: 'Precision Strike AG',
    price: 219.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Puma',
    type: 'Artificial Grass',
    rating: 4.7,
    color: 'White/Green'
  },
  {
    id: 4,
    name: 'Phantom Vision TF',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Nike',
    type: 'Turf',
    rating: 4.6,
    color: 'Black/White'
  },
  {
    id: 5,
    name: 'Predator Accuracy FG',
    price: 259.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Adidas',
    type: 'Firm Ground',
    rating: 4.9,
    color: 'Red/Black'
  },
  {
    id: 6,
    name: 'Future Z IC',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Puma',
    type: 'Indoor',
    rating: 4.5,
    color: 'Yellow/Black'
  },
  {
    id: 7,
    name: 'Mercurial Superfly',
    price: 289.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Nike',
    type: 'Firm Ground',
    rating: 5.0,
    color: 'Orange/Black'
  },
  {
    id: 8,
    name: 'X Speedportal AG',
    price: 239.99,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=500',
    brand: 'Adidas',
    type: 'Artificial Grass',
    rating: 4.8,
    color: 'White/Blue'
  }
];

const FootballBoots = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${productName} football boots. Do you have size 42?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-full mb-4">
              <Footprints className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold tracking-wide">PRO PERFORMANCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Football Boots
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Elite boots for every playing surface. Used by the pros.
            </p>
          </div>
          
          <Link 
            to="/boots" 
            className="group inline-flex items-center mt-4 md:mt-0 text-gray-800 font-semibold hover:text-gray-900 transition-colors bg-gray-100 px-6 py-3 rounded-full"
          >
            View All Boots
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {footballBoots.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-800 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {product.brand}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-110 z-10"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-gray-800 hover:text-white">
                  Quick View
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold ml-1">{product.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    {product.type}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{product.color}</span>
                </div>
                
                <h3 className="font-bold text-gray-900 mt-1 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-500 mb-3">{product.brand}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  
                  <div className="flex gap-2">
                    <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors">
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

export default FootballBoots;