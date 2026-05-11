// src/components/Hero.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

import jersey1 from "../../assets/jersey1.jpg";
import jersey2 from "../../assets/jersey1.jpg";
import jersey3 from "../../assets/jersey1.jpg";
import jersey4 from "../../assets/jersey1.jpg";

const slides = [
  {
    image: jersey1,
    title: "2025/26 Football Jerseys",
    subtitle: "Premium match kits from top clubs worldwide",
    button: "Shop Collection",
  },
  {
    image: jersey2,
    title: "Retro Classics Collection",
    subtitle: "Legendary jerseys that shaped football history",
    button: "Explore Retro",
  },
  {
    image: jersey3,
    title: "New Season Arrivals",
    subtitle: "Fresh drops updated weekly for true football fans",
    button: "View New Kits",
  },
  {
    image: jersey4,
    title: "Authentic Fan Wear",
    subtitle: "Wear your passion with premium quality kits",
    button: "Start Shopping",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* BACKGROUND SLIDES */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              current === index
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* overlays */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-black/30" />
          </div>
        ))}
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-3xl rounded-full" />

      {/* MAIN CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center justify-center text-center">
        <div className="container mx-auto px-6">

          <div className="max-w-3xl mx-auto">

            {/* LABEL */}
            <p
              key={`label-${current}`}
              className="uppercase tracking-[0.3em] text-xs text-red-500 font-semibold mb-5 animate-slideUp"
            >
              Premium Football Store
            </p>

            {/* TITLE */}
            <h1
              key={slides[current].title}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-black leading-[0.95] text-white animate-slideUp"
            >
              {slides[current].title}
            </h1>

            {/* SUBTITLE */}
            <p
              key={slides[current].subtitle}
              className="mt-6 text-sm sm:text-base md:text-xl text-white/75 max-w-2xl mx-auto animate-slideUp delay-100"
            >
              {slides[current].subtitle}
            </p>

            {/* CTA */}
            <div className="mt-10 animate-slideUp delay-200">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 bg-white text-black hover:bg-red-600 hover:text-white px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                {slides[current].button}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* DESKTOP INDICATORS */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-30 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 rounded-full ${
              current === index
                ? "w-14 h-[3px] bg-red-500"
                : "w-6 h-[3px] bg-white/30 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* MOBILE INDICATORS (CLEAN, NO ARROWS) */}
      <div className="md:hidden absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-500 ${
              current === index
                ? "w-8 h-[3px] bg-red-500"
                : "w-2 h-[2px] bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* FLOATING WHATSAPP (KEPT CLEAN) */}
      <a
        href="https://wa.me/254743666719"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </a>

    </section>
  );
};

export default Hero;