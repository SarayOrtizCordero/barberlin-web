"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-premium">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={cn(
              "font-sans text-2xl font-bold tracking-wider transition-colors",
              scrolled ? "text-gold" : "text-white"
            )}>
              {SITE.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-gold",
                  scrolled ? "text-gray-300" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{SITE.phone}</span>
            </a>
            <Link
              href="/reservas"
              className="btn-primary text-xs py-2.5"
            >
              <Calendar className="h-4 w-4" />
              Reservar
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              scrolled ? "text-gold" : "text-white"
            )}
            aria-label="Menú"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark/98 backdrop-blur-md border-t border-white/5"
          >
            <nav className="container-premium py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-gold transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 text-sm text-gold"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
                <Link
                  href="/reservas"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center text-xs"
                >
                  Reservar Turno
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
