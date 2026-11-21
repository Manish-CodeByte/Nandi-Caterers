"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone, Award, Sparkles } from "lucide-react";
import NandiEmblem from "./NandiEmblem";
import { BRAND, getWhatsAppUrl, WHATSAPP_MESSAGES } from "../lib/constants";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.hero);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] md:min-h-[90vh] bg-gradient-to-br from-nandi-burgundy via-[#3E010A] to-nandi-deep-maroon text-nandi-ivory flex items-center overflow-hidden py-10 sm:py-14 md:py-20"
    >
      {/* Subtle Background Watermark: Golden Nandi Bull Emblem */}
      <div className="absolute -right-20 md:right-[10%] lg:right-[15%] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden">
        <NandiEmblem
          size={580}
          color="#D7A170"
          opacity={0.08}
          className="transform rotate-6"
        />
      </div>

      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (55% on desktop: lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust Line */}
            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-6">
              <NandiEmblem size={26} showGlow={true} />
              <span className="w-4 h-[1.5px] bg-nandi-gold" />
              <p className="font-sans text-[11px] sm:text-[12px] md:text-[13px] font-semibold tracking-luxury md:tracking-[2px] text-nandi-gold uppercase">
                Weddings &bull; Celebrations &bull; Corporate Events &bull; Special Occasions
              </p>
            </div>

            {/* Main Headline with warm ivory headings as requested */}
            <h1 className="font-serif fluid-h1 font-bold text-nandi-ivory mb-5 sm:mb-6">
              Exceptional Food. <br className="hidden sm:inline" />
              <span className="text-nandi-gold italic font-normal">
                Unforgettable
              </span>{" "}
              Occasions.
            </h1>

            {/* Supporting Copy in Warm Ivory tone */}
            <p className="font-sans fluid-body text-nandi-ivory/85 max-w-[540px] mb-8">
              Premium catering crafted with authentic flavours, thoughtful
              presentation and warm hospitality across Mangalore &amp; surrounding areas.
            </p>

            {/* Action Buttons: Antique Gold with Dark Burgundy Text */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-nandi-gold hover:bg-nandi-gold-light text-nandi-burgundy px-7 sm:px-9 py-3.5 sm:py-4 rounded-[4px] font-sans text-[15px] sm:text-[16px] font-bold tracking-[0.5px] transition-all duration-300 hover:scale-[1.02] shadow-nandi-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nandi-gold min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 fill-nandi-burgundy/20" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:+91${BRAND.primaryPhone}`}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-nandi-gold/15 border-2 border-nandi-gold text-nandi-gold px-6 sm:px-8 py-3 sm:py-[14px] rounded-[4px] font-sans text-[15px] sm:text-[16px] font-bold tracking-[0.5px] transition-all duration-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-nandi-gold min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-nandi-gold" />
                <span>Call: {BRAND.primaryPhoneFormatted}</span>
              </a>
            </div>

            {/* Subtle Trust Bar */}
            <div className="pt-5 sm:pt-6 border-t border-nandi-gold/25 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-nandi-ivory/80">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-nandi-gold shrink-0" />
                <span>Mangalore&apos;s Finest Culinary Heritage</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-nandi-gold shrink-0" />
                <span>100% Bespoke Vegetarian &amp; Non-Veg Menus</span>
              </div>
            </div>
          </div>

          {/* Right Column (45% on desktop: lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[440px] sm:max-w-[480px] lg:max-w-none">
              {/* Outer Decorative Gold Border Frame */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-nandi-gold/50 pointer-events-none hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative w-full aspect-[4/5] bg-nandi-deep-maroon shadow-[0_20px_50px_rgba(51,1,5,0.4)] overflow-hidden rounded-[2px] border border-nandi-gold/30">
                <Image
                  src="/images/hero-traditional-cuisine.jpg"
                  alt="Traditional royal Indian feast and authentic celebratory cuisine by Nandi Caterers"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-nandi-deep-maroon/70 via-transparent to-transparent opacity-75" />

                {/* Floating Heritage Badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-nandi-ivory/95 backdrop-blur-md p-3 sm:p-4 border-l-2 border-nandi-gold shadow-lg flex items-center gap-3 sm:gap-4">
                  <NandiEmblem size={34} showGlow={true} className="shrink-0" />
                  <div className="min-w-0">
                    <div className="font-serif font-bold text-nandi-burgundy text-sm sm:text-base truncate">
                      Pure Celebration Excellence
                    </div>
                    <div className="font-sans text-[11px] sm:text-xs text-nandi-taupe truncate">
                      Authentic Flavours &bull; Thoughtful Presentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
