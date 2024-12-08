"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/70 backdrop-blur-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
          <Link
            href="/"
            className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? "text-gray-800" : "text-gray-900"
            }`}
          >
            Logo
          </Link>
          <ul className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 backdrop-blur-md bg-white/30 shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="h-full p-4 overflow-y-auto">
          <button
            onClick={closeMobileMenu}
            className="mb-4 text-gray-800 focus:outline-none"
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-gray-900 block"
                  onClick={closeMobileMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
}
