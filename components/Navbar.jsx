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
      className={`sticky top-0 z-[1000] w-full transition-all duration-500 ease-in-out bg-nandi-burgundy border-b ${
        isScrolled
          ? "border-nandi-gold/40 shadow-[0_8px_24px_rgba(51,1,5,0.4)]"
          : "border-nandi-gold/25"
      }`}
      style={{ height: "80px" }}
    >
      <div className="max-w-nandi mx-auto h-full px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-nandi-gold rounded-sm p-1"
          aria-label="Nandi Caterers Home"
        >
          <div className="transform transition-transform duration-300 group-hover:scale-105 shrink-0">
            <NandiEmblem size={44} showGlow={true} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[19px] sm:text-[22px] md:text-[24px] font-bold tracking-tight text-nandi-ivory leading-none">
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
              className="font-sans text-[13px] lg:text-[14px] tracking-[0.5px] text-nandi-ivory/90 hover:text-nandi-gold transition-colors duration-200 relative py-1 group focus:outline-none focus:text-nandi-gold"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-nandi-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop WhatsApp Action Button: Antique Gold with Dark Burgundy Text */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-nandi-gold hover:bg-nandi-gold-light text-nandi-burgundy px-5 lg:px-6 py-2.5 lg:py-3 rounded-[4px] font-sans text-[13px] lg:text-[14px] font-bold tracking-[0.5px] transition-all duration-300 hover:scale-[1.02] shadow-nandi-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nandi-gold"
          >
            <MessageCircle className="w-4 h-4 text-nandi-burgundy fill-nandi-burgundy/20" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-nandi-gold focus:outline-none focus:ring-2 focus:ring-nandi-gold rounded min-h-[48px] min-w-[48px] flex items-center justify-center"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu with Smooth Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[80px] z-50 bg-nandi-burgundy md:hidden overflow-y-auto border-t border-nandi-gold/30 flex flex-col justify-between p-6 pb-28 animate-fadeIn"
          style={{ minHeight: "calc(100dvh - 80px)" }}
        >
          <nav className="flex flex-col space-y-4 pt-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-[22px] sm:text-[24px] font-semibold text-nandi-ivory hover:text-nandi-gold border-b border-nandi-gold/20 pb-3 transition-colors flex items-center justify-between min-h-[48px]"
              >
                <span>{link.name}</span>
                <span className="text-nandi-gold text-lg">&rarr;</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 space-y-3.5">
            <div className="text-center text-xs tracking-luxury text-nandi-gold uppercase">
              Direct Contact &bull; Mangalore
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-nandi-gold hover:bg-nandi-gold-light text-nandi-burgundy py-3.5 rounded-[4px] font-sans text-[15px] font-bold tracking-[0.5px] shadow-nandi-gold min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5 fill-nandi-burgundy/20" />
              <span>WhatsApp Us Directly</span>
            </a>
            <a
              href={`tel:+91${BRAND.primaryPhone}`}
              className="w-full flex items-center justify-center gap-2 border-2 border-nandi-gold text-nandi-gold hover:bg-nandi-gold/10 py-3 rounded-[4px] font-sans text-[15px] font-bold min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-nandi-gold" />
              <span>Call: {BRAND.primaryPhoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
