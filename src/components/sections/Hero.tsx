import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Shield, Truck, Star } from 'lucide-react';
import stadiumImage from '../../assets/tadium.webp';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={stadiumImage}
          alt="Stadium background"
          className="w-full h-full object-cover"
        />
        {/* Fixed gradient overlay - using proper Tailwind colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Content - Centered */}
      <div className="relative container-custom text-white z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 animate-fadeIn border border-white/30">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">Official Football Merchandise Store</span>
          </div>

          {/* Main Heading - Centered */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fadeIn">
            <span className="text-white drop-shadow-lg">Wear Your Passion</span>
            <br />
            <span className="text-red-400 relative inline-block mt-2 drop-shadow-lg">
              Play Like a Legend
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-400 rounded-full shadow-lg"></span>
            </span>
          </h1>

          {/* Description - Centered */}
          <p className="text-xl text-white/95 max-w-2xl mx-auto mb-10 animate-fadeIn drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            Premium football jerseys, retro classics, and latest kits from around the world. 
            Authentic quality, fast delivery.
          </p>

          {/* Buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <Link to="/products" className="w-full sm:w-auto">
              <button className="group bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl w-full sm:w-48 border-2 border-red-400/20">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <a
              href="https://wa.me/1234567890?text=Hi%20I'm%20interested%20in%20your%20jerseys"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="group bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl hover:shadow-2xl w-full sm:w-48 border-2 border-green-400/20">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </button>
            </a>
          </div>

          {/* Trust Badges - Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-red-400/30">
                <Truck className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-sm font-medium text-white">Free Shipping</p>
              <p className="text-xs text-white/80">On orders over $100</p>
            </div>
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-red-400/30">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-sm font-medium text-white">Authentic</p>
              <p className="text-xs text-white/80">100% genuine</p>
            </div>
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-red-400/30">
                <Star className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-sm font-medium text-white">10k+ Reviews</p>
              <p className="text-xs text-white/80">4.8/5 rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Centered */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-black/10">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* WhatsApp Floating Button (for mobile) */}
      <a
        href="https://wa.me/1234567890?text=Hi%20I'm%20interested%20in%20your%20jerseys"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-colors z-50 animate-bounce-slow border-2 border-green-400/30"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;