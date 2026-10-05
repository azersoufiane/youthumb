import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} GatewayMoon. All rights reserved. Not affiliated with YouTube.
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about-us"
              className="hover:text-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;