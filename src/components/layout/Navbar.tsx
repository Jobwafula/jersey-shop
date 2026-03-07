import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  Heart,
  Shirt,
  Footprints,
  Sparkles,
  Baby,
  Package,
  Trophy,
  Trash2,
  Plus,
  Minus
} from 'lucide-react';

// Mock cart data
const mockCartItems = [
  {
    id: '1',
    name: 'Manchester United Home Jersey 2024/25',
    price: 89.99,
    size: 'M',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=100',
    team: 'Manchester United'
  },
  {
    id: '2',
    name: 'Liverpool Away Jersey 2024/25',
    price: 84.99,
    size: 'L',
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1580086316916-1a4fc1c5be6f?w=100',
    team: 'Liverpool'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(mockCartItems);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsCartOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen, isCartOpen]);

  // Cart calculations
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Cart handlers
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Menu items - exactly as specified
  const menuItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Retro Kits', href: '/category/retro', icon: <Trophy className="w-4 h-4 mr-2" /> },
    { name: 'New Season Kits', href: '/category/new-season', icon: <Sparkles className="w-4 h-4 mr-2" /> },
    { name: 'Football Boots', href: '/boots', icon: <Footprints className="w-4 h-4 mr-2" /> },
    { name: 'Special Kits', href: '/special', icon: <Package className="w-4 h-4 mr-2" /> },
    { name: 'Kids Kits', href: '/kids', icon: <Baby className="w-4 h-4 mr-2" /> },
    { name: 'Others', href: '/others', icon: <Shirt className="w-4 h-4 mr-2" /> },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
          isScrolled ? 'py-2 shadow-xl' : 'py-4 shadow-lg'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-red-600">Jersey</span>
                <span className="text-gray-900">Shop</span>
              </span>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center px-4 py-2 rounded-lg font-medium hover:text-red-600 transition-colors text-gray-700"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors hidden sm:block"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Link>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors group"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5 group-hover:text-red-600 transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-fadeIn">
                    {cartItemCount > 9 ? '9+' : cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="mt-4 animate-slideDown">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search for jerseys, boots, accessories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 rounded-lg border-2 border-red-200 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  autoFocus
                />
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-red-400" />
              </form>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl animate-slideLeft">
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <ShoppingCart className="w-6 h-6 text-red-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                  <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold">
                    {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">Your cart is empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.team}</p>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-red-600">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-red-600"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-red-600">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/checkout"
                      className="block w-full bg-red-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                      onClick={() => setIsCartOpen(false)}
                    >
                      Checkout
                    </Link>
                    <button
                      onClick={clearCart}
                      className="block w-full text-red-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto animate-slideRight">
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">JS</span>
                  </div>
                  <span className="text-xl font-bold">
                    <span className="text-red-600">Jersey</span>
                    <span className="text-gray-900">Shop</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center py-3 px-2 text-gray-900 font-medium hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && <span className="mr-3 text-red-600">{item.icon}</span>}
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Wishlist */}
                <Link
                  to="/wishlist"
                  className="flex items-center py-3 px-2 text-gray-900 font-medium hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Heart className="w-5 h-5 mr-3 text-red-600" />
                  Wishlist
                </Link>

                {/* Mobile Cart Summary */}
                <Link
                  to="/cart"
                  className="flex items-center justify-between py-3 px-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2 text-red-600" />
                    <span className="font-medium text-gray-900">Cart</span>
                  </div>
                  {cartItemCount > 0 && (
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;