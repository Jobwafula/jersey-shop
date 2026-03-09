
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RotateCcw,
  Heart,
  Clock,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns Policy', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Blog', href: '/blog' },
  ];

  const categories = [
    { name: 'New Arrivals', href: '/new-arrivals', icon: '✨' },
    { name: 'Retro Kits', href: '/retro', icon: '🏆' },
    { name: 'New Season Kits', href: '/new-season', icon: '⚡' },
    { name: 'Football Boots', href: '/boots', icon: '👟' },
    { name: 'Special Kits', href: '/special', icon: '🌟' },
    { name: 'Kids Kits', href: '/kids', icon: '👶' },
    { name: 'Training Wear', href: '/training', icon: '💪' },
    { name: 'Accessories', href: '/accessories', icon: '🧢' },
  ];

  const leagues = [
    { name: 'Premier League', href: '/league/premier-league' },
    { name: 'La Liga', href: '/league/la-liga' },
    { name: 'Serie A', href: '/league/serie-a' },
    { name: 'Bundesliga', href: '/league/bundesliga' },
    { name: 'Ligue 1', href: '/league/ligue-1' },
    { name: 'Champions League', href: '/league/champions-league' },
    { name: 'Europa League', href: '/league/europa-league' },
    { name: 'World Cup', href: '/league/world-cup' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/palcherin.wekesa.9/', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/_wekesapaul', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/pediwajerseyke/', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com', label: 'YouTube' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'Github' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const paymentMethods = [
    { icon: <CreditCard className="w-6 h-6" />, name: 'Visa' },
    { icon: <CreditCard className="w-6 h-6" />, name: 'Mastercard' },
    { icon: <CreditCard className="w-6 h-6" />, name: 'PayPal' },
    { icon: <CreditCard className="w-6 h-6" />, name: 'Apple Pay' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L45 15 L30 0 L15 15 L30 30 L45 45 L30 60 L15 45 L30 30' stroke='%23ffffff' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-3xl p-8 backdrop-blur-sm border border-yellow-500/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Join the Jersey Family</h3>
                    <p className="text-gray-400">Subscribe for exclusive offers and new arrivals</p>
                  </div>
                </div>
                
                <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none text-white w-full sm:w-64"
                    />
                  </div>
                  <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 group">
                    Subscribe
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section - Logo and Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-gray-900 font-bold text-xl">JS</span>
              </div>
              <span className="text-xl font-bold text-white">Jersey<span className="text-yellow-500">Shop</span></span>
            </Link>
            
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Your ultimate destination for authentic football jerseys. From retro classics to the latest kits, we bring the beautiful game to your wardrobe.
            </p>
            
            {/* Trust Badges */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center gap-1 bg-gray-800/50 px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-300">4.8/5</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-800/50 px-3 py-1.5 rounded-full">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-xs text-gray-300">10k+ Fans</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-800/50 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-300">Authentic</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-colors text-gray-400"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 rounded-full mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 rounded-full mr-2"></span>
              Shop by Category
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.href} 
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group"
                  >
                    <span className="mr-2 text-base">{category.icon}</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leagues */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 rounded-full mr-2"></span>
              Top Leagues
            </h3>
            <ul className="space-y-2">
              {leagues.map((league) => (
                <li key={league.name}>
                  <Link 
                    to={league.href} 
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {league.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center">
              <span className="w-1 h-6 bg-yellow-500 rounded-full mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Magic Business Center,<br />Along Ronald Ngala Street Nairobi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  + (254) 743666719
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:support@jerseyshop.com" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">
                  pediwajersey@gmail.com
                </a>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-white font-semibold">Business Hours</span>
              </div>
              <p className="text-xs text-gray-400">Mon - Fri: 9:00 AM - 7:00 PM</p>
              <p className="text-xs text-gray-400">Sat - Sun: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods and Certifications */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                    title={method.name}
                  >
                    {method.icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>SSL Secure</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Truck className="w-4 h-4 text-yellow-500" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <RotateCcw className="w-4 h-4 text-blue-500" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950/50">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} JerseyShop. All rights reserved. | 
              <Link to="/privacy" className="hover:text-yellow-500 transition-colors ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-yellow-500 transition-colors ml-1">Terms of Service</Link> | 
              <Link to="/cookies" className="hover:text-yellow-500 transition-colors ml-1">Cookie Policy</Link>
            </p>
            
            <p className="text-xs text-gray-600">
              Made with <Heart className="w-3 h-3 inline-block text-red-500 mx-1" /> for football fans
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/0743666719?text=Hi%20I%20have%20a%20question%20about%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-colors z-50 animate-bounce-slow group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </footer>
  );
};

export default Footer;