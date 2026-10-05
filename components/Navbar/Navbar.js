import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition-colors"
        >
          Gateway<span className="text-gray-900">Moon</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1 sm:space-x-4 text-sm font-medium text-gray-600">
          <Link
            href="/"
            className="px-3 py-2 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="px-3 py-2 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="px-3 py-2 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="px-3 py-2 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;