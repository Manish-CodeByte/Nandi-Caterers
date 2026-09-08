"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import NandiEmblem from "./NandiEmblem";
import { BRAND, NAV_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-nandi-charcoal text-nandi-ivory border-t border-nandi-gold/40 pt-14 sm:pt-16 pb-32 md:pb-16">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Column 1: Branding */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <NandiEmblem size={32} color="#B89A5A" />
              <span className="font-serif text-[24px] sm:text-[26px] font-bold text-nandi-gold leading-none">
                {BRAND.name}
              </span>
            </div>
            <p className="font-sans text-[13px] sm:text-[14px] text-nandi-ivory/80 leading-[1.6] mb-3 sm:mb-4">
              {BRAND.tagline}
            </p>
            <p className="font-sans text-[12px] sm:text-[13px] text-nandi-taupe leading-relaxed">
              Rooted in sacred tradition and culinary finesse, providing peerless catering
              experiences across coastal Karnataka.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="font-sans text-[12px] sm:text-[13px] font-bold text-nandi-gold tracking-[1px] uppercase mb-3 sm:mb-4">
              Navigation
            </div>
            <ul className="space-y-2 sm:space-y-2.5" role="list">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-sans text-[13px] sm:text-[14px] text-nandi-ivory/80 hover:text-nandi-gold transition-colors duration-200 block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <div className="font-sans text-[12px] sm:text-[13px] font-bold text-nandi-gold tracking-[1px] uppercase mb-3 sm:mb-4">
              Direct Contact
            </div>
            <ul className="space-y-2.5 sm:space-y-3" role="list">
              <li>
                <a
                  href={`tel:+91${BRAND.primaryPhone}`}
                  className="font-sans text-[13px] sm:text-[14px] text-nandi-ivory/80 hover:text-nandi-gold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-nandi-gold shrink-0" />
                  <span>+91 {BRAND.primaryPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${BRAND.secondaryPhone}`}
                  className="font-sans text-[13px] sm:text-[14px] text-nandi-ivory/80 hover:text-nandi-gold transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-nandi-gold shrink-0" />
                  <span>+91 {BRAND.secondaryPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-sans text-[13px] sm:text-[14px] text-nandi-ivory/80 hover:text-nandi-gold transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-nandi-gold shrink-0" />
                  <span>{BRAND.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Location */}
          <div>
            <div className="font-sans text-[12px] sm:text-[13px] font-bold text-nandi-gold tracking-[1px] uppercase mb-3 sm:mb-4">
              Connect &bull; Location
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[13px] sm:text-[14px] text-nandi-ivory/80 hover:text-nandi-gold transition-colors inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-nandi-gold shrink-0" />
                  <span>{BRAND.instagram}</span>
                </a>
              </div>
              <div className="flex items-start gap-2 text-[13px] sm:text-[14px] text-nandi-ivory/80">
                <MapPin className="w-4 h-4 text-nandi-gold shrink-0 mt-0.5" />
                <span>{BRAND.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-nandi-gold/20 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-xs text-nandi-taupe space-y-1">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>Catering &bull; Celebrations &bull; Hospitality &bull; Mangalore</p>
        </div>
      </div>
    </footer>
  );
}
