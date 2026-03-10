// src/components/Hero.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Shield, Truck, Star } from 'lucide-react';
import stadiumImage from '../../assets/tadium.webp';

const Hero = () => {
  return (
    <section className="relative py-3 min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 md:pt-20">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src={stadiumImage}
          alt="Vibrant packed football stadium with passionate fans and dramatic lighting"
          className="h-full w-full object-cover brightness-[0.42] contrast-[1.12] saturate-[1.08]"
          loading="eager"
          fetchpriority="high"
        />
        {/* Stronger, more balanced overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </div>

      {/* Subtle animated background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 -top-40 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl animate-pulse-slow delay-1500" />
      </div>

      {/* Floating particles – reduced for performance, only on md+ */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/25 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 lg:px-8 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 md:mb-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/15 shadow-sm animate-fade-in">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold tracking-wide">Official Football Merchandise Store</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 md:mb-8 animate-fade-in-up">
          <span className="block">Wear Your Passion</span>
          <span className="block mt-1.5 md:mt-3 text-red-500 drop-shadow-[0_4px_16px_rgba(239,68,68,0.7)]">
            Play Like a Legend
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed animate-fade-in-up delay-100">
          Authentic jerseys, retro classics & latest match kits from top clubs worldwide.<br className="hidden sm:inline" />
          Fast countrywide delivery • 100% genuine products
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 animate-fade-in-up delay-200">
          <Link
            to="/products"
            className="group inline-flex items-center justify-center gap-3 px-9 py-4.5 md:px-10 md:py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-500/50 min-w-[180px]"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>

          <a
            href="https://wa.me/0743666719?text=Hi%20I'm%20interested%20in%20your%20football%20jerseys!"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-9 py-4.5 md:px-10 md:py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-base md:text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-500/50 min-w-[180px]"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto animate-fade-in-up delay-300">
          {[
            {
              icon: Truck,
              title: 'Countrywide Delivery',
              desc: 'Free on orders over KES 10,000',
              color: 'red',
            },
            {
              icon: Shield,
              title: '100% Authentic',
              desc: 'Official licensed products',
              color: 'red',
            },
            {
              icon: Star,
              title: '4.9 / 5 Rating',
              desc: '10,000+ happy customers',
              color: 'yellow',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-5 md:p-6 bg-black/35 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-${item.color}-600/20 flex items-center justify-center border border-${item.color}-500/30`}
              >
                <item.icon className={`w-6 h-6 md:w-7 md:h-7 text-${item.color}-400`} />
              </div>
              <p className="font-semibold text-white text-base">{item.title}</p>
              <p className="text-xs md:text-sm text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-7 h-11 md:w-8 md:h-12 border-2 border-white/35 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white/75 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Floating WhatsApp Button – mobile only */}
      <a
        href="https://wa.me/0743666719?text=Hi%20I'm%20interested%20in%20your%20football%20jerseys!"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4.5 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50"
        aria-label="Contact us on WhatsApp for enquiries"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </section>
  );
};

export default Hero;