"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import NandiEmblem from "./NandiEmblem";
import { BRAND, getWhatsAppUrl, WHATSAPP_MESSAGES } from "../lib/constants";

export default function CTASection() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.cta);

  return (
    <section className="w-full bg-gradient-to-b from-nandi-cream to-nandi-ivory py-16 sm:py-20 md:py-28 relative overflow-hidden border-t border-nandi-gold/20">
      {/* Background Watermark Accent */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
        <NandiEmblem size={500} opacity={0.06} />
      </div>

      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10 text-center relative z-10">
        <div className="inline-block mb-3 sm:mb-4">
          <NandiEmblem size={36} showGlow={true} />
        </div>

        <h2 className="font-serif fluid-h1 font-bold text-nandi-charcoal max-w-4xl mx-auto mb-4 sm:mb-6">
          Let&apos;s Make Your Next Celebration <br className="hidden sm:inline" />
          <span className="text-nandi-burgundy">Deliciously Memorable.</span>
        </h2>

        <p className="font-sans fluid-body text-nandi-taupe max-w-[700px] mx-auto mb-8 sm:mb-10">
          Planning a wedding, celebration or special event? Talk to Nandi Caterers
          directly and let&apos;s create an unforgettable culinary experience for you and your guests.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-nandi-burgundy hover:bg-nandi-deep-burgundy text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] font-sans text-[15px] sm:text-[16px] font-semibold tracking-[0.5px] transition-all duration-300 hover:scale-[1.02] shadow-nandi-burgundy-lg min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 fill-white/10" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:+91${BRAND.primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-nandi-cream border-2 border-nandi-burgundy text-nandi-burgundy px-7 sm:px-9 py-3 sm:py-[14px] rounded-[4px] font-sans text-[15px] sm:text-[16px] font-semibold tracking-[0.5px] transition-all duration-300 hover:shadow-sm min-h-[48px]"
          >
            <Phone className="w-4 h-4 text-nandi-burgundy" />
            <span>Call Now</span>
          </a>
        </div>

        <div className="mt-6 sm:mt-8 text-xs font-sans text-nandi-taupe">
          Quick response on WhatsApp &bull; Mangalore &bull; Udupi &bull; Coastal Karnataka
        </div>
      </div>
    </section>
  );
}
