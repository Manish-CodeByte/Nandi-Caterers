"use client";

import React from "react";
import { Phone, Mail, Instagram, MessageCircle, MapPin } from "lucide-react";
import NandiEmblem from "./NandiEmblem";
import SectionDivider from "./SectionDivider";
import { BRAND, getWhatsAppUrl, WHATSAPP_MESSAGES } from "../lib/constants";

export default function ContactSection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.contact);

  return (
    <section
      id="contact"
      className="w-full bg-nandi-ivory py-14 sm:py-16 md:py-24 border-t border-nandi-gold/30"
    >
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-2.5 sm:mb-3">
            Get In Touch
          </div>
          <h2 className="font-serif fluid-h2 font-bold text-nandi-burgundy mb-3 sm:mb-4">
            Let&apos;s Talk About Your Event.
          </h2>
          <p className="font-sans fluid-body text-nandi-charcoal/80">
            Connect directly with our catering directors. No lengthy forms or waiting—we
            are ready to assist you right away.
          </p>
          <SectionDivider className="my-5 sm:my-6 !justify-start" />
        </div>

        {/* 2 Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Brand Lockup & Direct Channels */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Brand Emblem & Name */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <NandiEmblem size={38} showGlow={true} />
                <span className="font-serif text-[24px] sm:text-[28px] font-bold text-nandi-burgundy">
                  {BRAND.name}
                </span>
              </div>
              <p className="font-sans text-[13px] sm:text-[14px] text-nandi-taupe flex items-center gap-2">
                <MapPin className="w-4 h-4 text-nandi-gold shrink-0" />
                Serving Excellence Across Mangalore &amp; Surroundings
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4 sm:space-y-5 pt-2">
              {/* Phone 1 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-nandi-ivory-light border border-nandi-gold/40 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-nandi-gold" />
                </div>
                <div>
                  <span className="text-xs text-nandi-taupe block font-sans">Primary Phone</span>
                  <a
                    href={`tel:+91${BRAND.primaryPhone}`}
                    className="font-sans text-[15px] sm:text-[17px] font-bold text-nandi-burgundy hover:text-nandi-deep-maroon transition-colors"
                  >
                    +91 {BRAND.primaryPhone}
                  </a>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-nandi-ivory-light border border-nandi-gold/40 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-nandi-gold" />
                </div>
                <div>
                  <span className="text-xs text-nandi-taupe block font-sans">Secondary Phone</span>
                  <a
                    href={`tel:+91${BRAND.secondaryPhone}`}
                    className="font-sans text-[15px] sm:text-[17px] font-bold text-nandi-burgundy hover:text-nandi-deep-maroon transition-colors"
                  >
                    +91 {BRAND.secondaryPhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-nandi-ivory-light border border-nandi-gold/40 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-nandi-gold" />
                </div>
                <div>
                  <span className="text-xs text-nandi-taupe block font-sans">Official Email</span>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="font-sans text-[15px] sm:text-[16px] text-nandi-charcoal hover:text-nandi-burgundy transition-colors break-all font-medium"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-nandi-ivory-light border border-nandi-gold/40 flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4 text-nandi-gold" />
                </div>
                <div>
                  <span className="text-xs text-nandi-taupe block font-sans">Instagram</span>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[15px] sm:text-[16px] font-bold text-nandi-burgundy hover:text-nandi-deep-maroon transition-colors"
                  >
                    {BRAND.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Action Card - Ivory card with subtle gold border */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-nandi-ivory-light p-6 sm:p-8 md:p-10 border border-nandi-gold/50 rounded-[4px] shadow-sm">
            <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-nandi-burgundy mb-2 sm:mb-3">
              Direct Contact
            </h3>
            <p className="font-sans text-[13px] sm:text-[14px] text-nandi-taupe leading-relaxed mb-6 sm:mb-8">
              We respond promptly on WhatsApp to discuss your date, guest expectations,
              and specific culinary preferences.
            </p>

            {/* Buttons: Antique Gold with Dark Burgundy Text */}
            <div className="space-y-3.5 sm:space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-nandi-gold hover:bg-nandi-gold-light text-nandi-burgundy py-3.5 sm:py-4 px-6 rounded-[4px] font-sans text-[15px] sm:text-[16px] font-bold tracking-[0.5px] transition-all duration-300 shadow-nandi-gold hover:scale-[1.02] min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-nandi-burgundy/20" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:+91${BRAND.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2.5 bg-transparent hover:bg-nandi-ivory border-2 border-nandi-burgundy text-nandi-burgundy py-3 sm:py-3.5 px-6 rounded-[4px] font-sans text-[15px] sm:text-[16px] font-bold tracking-[0.5px] transition-all duration-300 min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-nandi-burgundy" />
                <span>Call Now: {BRAND.primaryPhone}</span>
              </a>
            </div>

            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-nandi-gold/25 text-center">
              <p className="font-sans text-[11px] sm:text-xs text-nandi-taupe">
                Available 7 days a week for event consultations &amp; tasting appointments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
