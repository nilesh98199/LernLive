"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./button";
import { X, Menu } from "lucide-react";

interface MobileNavProps {
  onLoginClick?: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function MobileNav({ onLoginClick }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest("[data-mobile-nav]")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle login click
  const handleLoginClick = () => {
    setIsOpen(false);
    if (onLoginClick) {
      onLoginClick();
    }
  };

  return (
    <div data-mobile-nav className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-blue-600 flex flex-col">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-xl font-semibold hover:text-blue-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <hr className="h-px w-24 bg-blue-400 my-2" />

            <div className="flex flex-col space-y-4 mt-4 items-center">
              <button
                className="text-white text-xl font-semibold hover:text-blue-200 transition-colors"
                onClick={handleLoginClick}
              >
                Login
              </button>

              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="#get-started" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
