
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Package, MessageCircle, Shirt, Footprints, } from 'lucide-react';

const othersProducts = [
  {
    id: 1,
    name: 'Pro Training Top',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Training Wear',
    rating: 4.7,
    icon: <Shirt className="w-3 h-3 mr-1" />
  },
  {
    id: 2,
    name: 'Goalkeeper Gloves Pro',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Gloves',
    rating: 4.8,
    icon: <Footprints className="w-3 h-3 mr-1" />
  },
  {
    id: 3,
    name: 'Team Socks 3-Pack',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Socks',
    rating: 4.5,
    icon: <Footprints className="w-3 h-3 mr-1" />
  },
  {
    id: 4,
    name: 'Team Scarf',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Accessories',
    rating: 4.6,
    icon: <Shirt className="w-3 h-3 mr-1" />
  },
  {
    id: 5,
    name: 'Training Bibs (10 Pack)',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Training Wear',
    rating: 4.4,
    icon: <Shirt className="w-3 h-3 mr-1" />
  },
  {
    id: 6,
    name: 'Team Backpack',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Bags',
    rating: 4.7,
    icon: <Package className="w-3 h-3 mr-1" />
  },
  {
    id: 7,
    name: 'Captain Armband',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Accessories',
    rating: 4.9,
    icon: <Shirt className="w-3 h-3 mr-1" />
  },
  {
    id: 8,
    name: 'Shin Guards Pro',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=500',
    category: 'Protection',
    rating: 4.6,
    icon: <Shield className="w-3 h-3 mr-1" />
  }
];

import { Shield } from 'lucide-react';

const Others = () => {
  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${productName}. Is it in stock?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-teal-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center bg-teal-600 text-white px-4 py-2 rounded-full mb-4">
              <Package className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold tracking-wide">EVERYTHING ELSE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Others
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Training gear, accessories, and everything else you need for the beautiful game.
            </p>
          </div>
          
          <Link 
            to="/others" 
            className="group inline-flex items-center mt-4 md:mt-0 text-teal-600 font-semibold hover:text-teal-700 transition-colors bg-teal-50 px-6 py-3 rounded-full"
          >
            View All Accessories
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {othersProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-teal-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center">
                    {product.icon}
                    {product.category}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="absolute top-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors transform hover:scale-110 z-10"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-teal-600 hover:text-white">
                  Quick View
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold ml-1">{product.rating}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">
                  {product.name}
                </h3>
                
                <p className="text-sm text-teal-600 font-semibold mb-3">{product.category}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  
                  <div className="flex gap-2">
                    <button className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors">
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

export default Others;