import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  User, 
  ChevronDown, 
  Heart,
  LogOut,
  Settings,
  Package,
  HelpCircle
} from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const location = useLocation();

  // Mock authentication state - replace with real auth later
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const categories = [
    { 
      name: 'All Jerseys', 
      href: '/products',
      description: 'Browse our complete collection'
    },
    { 
      name: 'Home Jerseys', 
      href: '/category/home',
      description: 'Classic home kits'
    },
    { 
      name: 'Away Jerseys', 
      href: '/category/away',
      description: 'Stylish away designs'
    },
    { 
      name: 'Third Jerseys', 
      href: '/category/third',
      description: 'Unique third kits'
    },
    { 
      name: 'Retro Classics', 
      href: '/category/retro',
      description: 'Vintage and throwback'
    },
    { 
      name: 'Training Gear', 
      href: '/category/training',
      description: 'Practice and casual wear'
    },
  ];

  const leagues = [
    { name: 'Premier League', href: '/league/premier-league', teams: 20 },
    { name: 'La Liga', href: '/league/la-liga', teams: 20 },
    { name: 'Serie A', href: '/league/serie-a', teams: 20 },
    { name: 'Bundesliga', href: '/league/bundesliga', teams: 18 },
    { name: 'Ligue 1', href: '/league/ligue-1', teams: 18 },
    { name: 'Champions League', href: '/league/champions-league', teams: 32 },
  ];

  const popularTeams = [
    { name: 'Manchester United', href: '/team/manchester-united' },
    { name: 'Liverpool', href: '/team/liverpool' },
    { name: 'Real Madrid', href: '/team/real-madrid' },
    { name: 'Barcelona', href: '/team/barcelona' },
    { name: 'Bayern Munich', href: '/team/bayern-munich' },
    { name: 'AC Milan', href: '/team/ac-milan' },
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg py-2' 
            : 'bg-gradient-to-b from-black/50 to-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-white/10 text-white'
              }`}
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
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">JS</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-primary-600">Jersey</span>
                <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
                  Shop
                </span>
              </span>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Categories Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('categories')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium hover:text-primary-600 transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${activeDropdown === 'categories' ? 'bg-white/10' : ''}`}
                >
                  <span>Categories</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'categories' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'categories' && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6 animate-slideDown">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                        Shop by Category
                      </h3>
                      <ul className="space-y-2">
                        {categories.map((category) => (
                          <li key={category.href}>
                            <Link
                              to={category.href}
                              className="block p-2 rounded-lg hover:bg-primary-50 transition-colors"
                            >
                              <p className="font-medium text-gray-900">{category.name}</p>
                              <p className="text-sm text-gray-500">{category.description}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                        Popular Teams
                      </h3>
                      <ul className="space-y-2">
                        {popularTeams.map((team) => (
                          <li key={team.href}>
                            <Link
                              to={team.href}
                              className="block p-2 rounded-lg hover:bg-primary-50 transition-colors"
                            >
                              <p className="font-medium text-gray-900">{team.name}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      
                      <h3 className="font-semibold text-gray-900 mt-6 mb-3 pb-2 border-b border-gray-200">
                        Featured
                      </h3>
                      <Link
                        to="/new-arrivals"
                        className="block p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                      >
                        <p className="font-medium text-primary-700">New Arrivals</p>
                        <p className="text-sm text-primary-600">Check out the latest kits</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Leagues Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('leagues')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium hover:text-primary-600 transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${activeDropdown === 'leagues' ? 'bg-white/10' : ''}`}
                >
                  <span>Leagues</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'leagues' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'leagues' && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl p-4 animate-slideDown">
                    <ul className="space-y-1">
                      {leagues.map((league) => (
                        <li key={league.href}>
                          <Link
                            to={league.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 transition-colors"
                          >
                            <span className="font-medium text-gray-900">{league.name}</span>
                            <span className="text-xs text-gray-500">{league.teams} teams</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link
                to="/products"
                className={`px-4 py-2 rounded-lg font-medium hover:text-primary-600 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                All Jerseys
              </Link>

              <Link
                to="/sale"
                className={`px-4 py-2 rounded-lg font-medium text-primary-600 hover:text-primary-700 transition-colors ${
                  isScrolled ? '' : 'bg-white/10'
                }`}
              >
                Sale
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-1">
              {/* Search Button/Bar */}
              <div className="hidden md:block relative">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search jerseys..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-64 pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
                      isScrolled 
                        ? 'border-gray-300 bg-white' 
                        : 'border-white/30 bg-white/10 text-white placeholder-white/70'
                    }`}
                  />
                  <Search className={`absolute left-3 top-2.5 w-5 h-5 ${
                    isScrolled ? 'text-gray-400' : 'text-white/70'
                  }`} />
                </form>
              </div>

              {/* Mobile Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'hover:bg-gray-100 text-gray-700' 
                    : 'hover:bg-white/10 text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className={`relative p-2 rounded-lg transition-colors hidden sm:block ${
                  isScrolled 
                    ? 'hover:bg-gray-100 text-gray-700' 
                    : 'hover:bg-white/10 text-white'
                }`}
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </Link>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`p-2 rounded-lg transition-colors ${
                    isScrolled 
                      ? 'hover:bg-gray-100 text-gray-700' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                  aria-label="User menu"
                >
                  <User className="w-5 h-5" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 animate-slideDown">
                    {isLoggedIn ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="font-medium text-gray-900">John Doe</p>
                          <p className="text-sm text-gray-500">john@example.com</p>
                        </div>
                        <Link
                          to="/account"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <User className="w-4 h-4 mr-3" />
                          My Profile
                        </Link>
                        <Link
                          to="/orders"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Package className="w-4 h-4 mr-3" />
                          Orders
                        </Link>
                        <Link
                          to="/settings"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <div className="border-t border-gray-100 my-2"></div>
                        <button
                          onClick={() => {
                            setIsLoggedIn(false);
                            setIsUserMenuOpen(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Create Account
                        </Link>
                        <div className="border-t border-gray-100 my-2"></div>
                        <Link
                          to="/help"
                          className="flex items-center px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <HelpCircle className="w-4 h-4 mr-3" />
                          Help Center
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 rounded-lg transition-colors"
                aria-label="Cart"
              >
               
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden mt-4 animate-slideDown">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search jerseys..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  autoFocus
                />
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              </form>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
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
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">JS</span>
                  </div>
                  <span className="text-xl font-bold">
                    <span className="text-primary-600">Jersey</span>
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

              {/* Mobile Menu Content */}
              <div className="space-y-6">
                {/* Categories Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.href}
                        to={category.href}
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <p className="font-medium text-gray-900">{category.name}</p>
                        <p className="text-sm text-gray-500">{category.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Leagues Section */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Leagues</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {leagues.map((league) => (
                      <Link
                        key={league.href}
                        to={league.href}
                        className="p-2 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <p className="font-medium text-gray-900 text-sm">{league.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Teams */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Popular Teams</h3>
                  <div className="space-y-2">
                    {popularTeams.map((team) => (
                      <Link
                        key={team.href}
                        to={team.href}
                        className="block p-2 hover:bg-primary-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {team.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <Link
                      to="/new-arrivals"
                      className="block p-3 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p className="font-medium text-primary-700">New Arrivals</p>
                      <p className="text-sm text-primary-600">Latest collections</p>
                    </Link>
                    <Link
                      to="/sale"
                      className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <p className="font-medium text-red-700">Sale</p>
                      <p className="text-sm text-red-600">Up to 40% off</p>
                    </Link>
                  </div>
                </div>

                {/* Account Section */}
                <div className="border-t border-gray-200 pt-4">
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/account"
                        className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="w-5 h-5 mr-3 text-gray-600" />
                        <span>My Account</span>
                      </Link>
                      <Link
                        to="/orders"
                        className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Package className="w-5 h-5 mr-3 text-gray-600" />
                        <span>My Orders</span>
                      </Link>
                      <Link
                        to="/wishlist"
                        className="flex items-center p-2 hover:bg-gray-100 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Heart className="w-5 h-5 mr-3 text-gray-600" />
                        <span>Wishlist</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block w-full text-center bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 mb-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="block w-full text-center border border-primary-600 text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Create Account
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;