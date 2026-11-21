"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { OCCASIONS, getWhatsAppUrl } from "../lib/constants";

export default function Occasions() {
  return (
    <section id="occasions" className="w-full bg-nandi-ivory py-14 sm:py-16 md:py-24 border-t border-nandi-gold/20">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <p className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-2.5 sm:mb-3">
            Bespoke Celebration Services
          </p>
          <h2 className="font-serif fluid-h2 font-bold text-nandi-burgundy">
            Made For Every Occasion
          </h2>
          <SectionDivider className="my-5 sm:my-6" />
        </div>

        {/* Occasions Grid: 1 col on xs (<380px), 2 cols on sm, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {OCCASIONS.map((item) => {
            const occasionWhatsAppUrl = getWhatsAppUrl(
              `Hi Nandi Caterers, I would like to enquire about catering for an upcoming ${item.title} event.`
            );

            return (
              <a
                key={item.id}
                href={occasionWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square w-full overflow-hidden block bg-nandi-deep-maroon cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-nandi-gold rounded-[4px] border border-nandi-gold/40 hover:border-nandi-gold"
                aria-label={`Enquire about catering for ${item.title}`}
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />

                {/* Ambient baseline gradient so mobile users see the title clearly */}
                <div className="absolute inset-0 bg-gradient-to-t from-nandi-deep-maroon/95 via-nandi-deep-maroon/35 to-transparent sm:opacity-90 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Default Mobile/Unhovered Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-200">
                  <span className="font-serif text-nandi-ivory text-[20px] sm:text-[22px] font-semibold tracking-wide drop-shadow-sm leading-snug">
                    {item.title}
                  </span>
                  <span className="font-sans text-nandi-gold text-[11px] sm:text-[12px] uppercase tracking-wider mt-0.5">
                    {item.subtitle}
                  </span>
                </div>

                {/* Hover Rich Overlay (Royal Burgundy Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-br from-nandi-burgundy/90 to-nandi-deep-maroon/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 sm:p-6">
                  {/* Subtle top corner gold flourish */}
                  <div className="text-right">
                    <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-eyebrow text-nandi-gold uppercase">
                      Inquire via WhatsApp
                    </span>
                  </div>

                  {/* Bottom Text & Sliding Arrow */}
                  <div className="flex items-end justify-between gap-3 sm:gap-4">
                    <div>
                      <h3 className="font-serif text-[22px] sm:text-[26px] md:text-[28px] font-semibold text-nandi-ivory leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[11px] sm:text-xs text-nandi-gold/90 mt-1">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-nandi-gold flex items-center justify-center shrink-0 text-nandi-gold group-hover:translate-x-2 transition-transform duration-300 bg-black/20">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-nandi-gold" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
