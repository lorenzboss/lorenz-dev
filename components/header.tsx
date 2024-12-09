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
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className={`flex items-center shadow-lg backdrop-blur-lg transition-[height] duration-300 ease-in-out ${
          isScrolled ? "h-12 lg:h-16" : "h-16 lg:h-20"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <button
              onClick={toggleMobileMenu}
              className="mr-4 text-gray-800 focus:outline-none dark:text-gray-200 lg:hidden"
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
            <Link
              href="/"
              className={`hover-underline-animation text-2xl tracking-widest transition-all duration-300 hover:font-medium ${
                isScrolled
                  ? "text-gray-800 dark:text-gray-200"
                  : "text-gray-900 dark:text-gray-100"
              }`}
            >
              Lorenz Boss
            </Link>

            <ul className="hidden space-x-4 lg:flex">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={"hover-underline-animation text-xl"}
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
        className={`fixed inset-y-0 left-0 w-full transform bg-transparent shadow-lg backdrop-blur-md sm:w-64 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50 transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex h-full flex-col bg-white/70 dark:bg-gray-900/70">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={closeMobileMenu}
              className="text-gray-800 focus:outline-none dark:text-gray-200"
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
                    className="block text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
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
