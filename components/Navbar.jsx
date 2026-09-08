"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import NandiEmblem from "./NandiEmblem";
import { BRAND, NAV_LINKS, getWhatsAppUrl, WHATSAPP_MESSAGES } from "../lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const whatsappLink = getWhatsAppUrl(WHATSAPP_MESSAGES.navbar);

  return (
    <header
      className={`sticky top-0 z-[1000] w-full transition-all duration-300 ${
        isScrolled
          ? "bg-nandi-ivory/95 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-b border-nandi-gold/20"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{ height: "80px" }}
    >
      <div className="max-w-nandi mx-auto h-full px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-nandi-burgundy rounded-sm p-1"
          aria-label="Nandi Caterers Home"
        >
          <div className="transform transition-transform duration-300 group-hover:scale-105 shrink-0">
            <NandiEmblem size={36} showGlow={true} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[19px] sm:text-[22px] md:text-[24px] font-bold tracking-tight text-nandi-burgundy leading-none">
              Nandi Caterers
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[1.5px] text-nandi-gold font-medium mt-0.5 whitespace-nowrap">
              Mangalore &bull; Luxury Catering
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[13px] lg:text-[14px] tracking-[0.5px] text-nandi-charcoal hover:text-nandi-burgundy transition-colors duration-200 relative py-1 group focus:outline-none focus:text-nandi-burgundy"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-nandi-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-nandi-burgundy hover:bg-nandi-deep-burgundy text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-[4px] font-sans text-[13px] lg:text-[14px] font-semibold tracking-[0.5px] transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_12px_rgba(100,28,45,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nandi-burgundy"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-nandi-burgundy focus:outline-none focus:ring-2 focus:ring-nandi-burgundy rounded min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu with Smooth Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[80px] z-50 bg-nandi-ivory md:hidden overflow-y-auto border-t border-nandi-gold/20 flex flex-col justify-between p-6 pb-28 animate-fadeIn"
          style={{ minHeight: "calc(100dvh - 80px)" }}
        >
          <nav className="flex flex-col space-y-4 pt-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-[22px] sm:text-[24px] font-semibold text-nandi-charcoal hover:text-nandi-burgundy border-b border-nandi-gold/15 pb-3 transition-colors flex items-center justify-between min-h-[48px]"
              >
                <span>{link.name}</span>
                <span className="text-nandi-gold text-lg">&rarr;</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 space-y-3.5">
            <div className="text-center text-xs tracking-luxury text-nandi-taupe uppercase">
              Direct Contact &bull; Mangalore
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-nandi-burgundy text-white py-3.5 rounded-[4px] font-sans text-[15px] font-semibold tracking-[0.5px] shadow-nandi-burgundy min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us Directly</span>
            </a>
            <a
              href={`tel:+91${BRAND.primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 border border-nandi-burgundy text-nandi-burgundy py-3 rounded-[4px] font-sans text-[15px] font-semibold min-h-[48px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BRAND.primaryPhoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
