"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme.toggle";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md py-2"
            : "bg-white dark:bg-gray-900 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-gray-800 dark:text-gray-200 focus:outline-none mr-4"
                aria-label="Toggle mobile menu"
              >
                <Menu size={24} />
              </button>
              <Link
                href="/"
                className={`text-2xl font-bold transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-800 dark:text-gray-200"
                    : "text-gray-900 dark:text-gray-100"
                }`}
              >
                <span>&lt;</span>
                <span>Lorenz</span>
                <span>/</span>
                <span>Boss</span>
                <span>&gt;</span>
              </Link>
            </div>
            <ul className="hidden lg:flex space-x-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                        : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-full sm:w-64 bg-transparent backdrop-blur-md shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="h-full flex flex-col bg-white/70 dark:bg-gray-900/70">
          <div className="p-4 flex justify-between items-center">
            <button
              onClick={closeMobileMenu}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
            <ThemeToggle />
          </div>
          <nav className="flex-grow overflow-y-auto">
            <ul className="space-y-4 p-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 block"
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
