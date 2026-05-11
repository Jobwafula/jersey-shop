import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Heart,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "New Season", path: "/new-season" },
    { name: "Retro Kits", path: "/retro-kits" },
    { name: "Boots", path: "/boots" },
    { name: "Kids", path: "/kids" },
    { name: "Accessories", path: "/accessories" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-md">
              <span className="text-white font-black text-lg">PW</span>
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                PediWa<span className="text-red-600">Jersey</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {link.name}

                  {active && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-red-600 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Categories Dropdown */}
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors">
              Categories
              <ChevronDown className="w-4 h-4" />
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart className="w-5 h-5 text-gray-700" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700" />

              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {mobileMenu ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search jerseys, boots, retro kits..."
                className="w-full h-12 rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none focus:border-red-500 focus:bg-white transition-all"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-base font-semibold transition-colors ${
                    active
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <Link
                to="/wishlist"
                className="flex items-center gap-2 text-gray-700 font-medium"
              >
                <Heart className="w-5 h-5" />
                Wishlist
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-2 text-gray-700 font-medium"
              >
                <ShoppingBag className="w-5 h-5" />
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;