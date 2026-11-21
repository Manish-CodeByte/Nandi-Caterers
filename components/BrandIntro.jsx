"use client";

import React from "react";
import { Utensils, Sparkles, HeartHandshake } from "lucide-react";
import SectionDivider from "./SectionDivider";
import NandiEmblem from "./NandiEmblem";
import { HIGHLIGHTS } from "../lib/constants";

export default function BrandIntro() {
  const icons = [
    <Utensils key="1" className="w-6 h-6 text-nandi-gold" />,
    <Sparkles key="2" className="w-6 h-6 text-nandi-gold" />,
    <HeartHandshake key="3" className="w-6 h-6 text-nandi-gold" />,
  ];

  return (
    <section id="about" className="w-full bg-nandi-ivory py-14 sm:py-16 md:py-24">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        {/* Intro Header & Editorial Copy */}
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <div className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-3 sm:mb-4">
            The Nandi Experience
          </div>

          {/* Heading with fluid clamp */}
          <h2 className="font-serif fluid-h2 font-bold text-nandi-burgundy mb-5 sm:mb-6">
            Where Every Celebration Begins With Great Food.
          </h2>

          {/* Body */}
          <p className="font-sans fluid-body text-nandi-charcoal/85 mb-6 sm:mb-8">
            At Nandi Caterers, we celebrate life&apos;s most precious moments through
            authentic flavours, elegant presentation, and warm Indian hospitality.
            Our team brings decades of experience in fine wedding catering, crafting
            menus that honour tradition while delighting contemporary palates.
          </p>

          {/* Cultural Heritage Callout - Ivory card with subtle gold border */}
          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-nandi-ivory-light border border-nandi-gold/40 rounded-[4px] shadow-sm mb-10 sm:mb-12">
            <NandiEmblem size={28} opacity={0.8} className="mt-0.5 shrink-0" />
            <p className="font-sans text-[13px] sm:text-[14px] text-nandi-charcoal/80 italic leading-relaxed">
              The sacred Nandi bull emblem represents strength, prosperity, and joyous
              celebration in Indian culture. It reflects our unwavering promise to deliver
              flawless feasts for you and your cherished guests.
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <SectionDivider className="my-8 sm:my-10 !justify-start" />

        {/* 3 Highlights Grid - Ivory cards with subtle gold borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.number}
              className="bg-nandi-ivory-light p-6 sm:p-7 border border-nandi-gold/35 rounded-[4px] shadow-sm hover:shadow-md hover:border-nandi-gold/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="mb-3.5 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {icons[index]}
                </div>

                {/* Number */}
                <div className="font-serif text-[28px] sm:text-[32px] font-semibold text-nandi-gold leading-[1.2] mb-1.5 sm:mb-2">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-nandi-burgundy mb-2.5 sm:mb-3 group-hover:text-nandi-deep-maroon transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-[13px] sm:text-[14px] text-nandi-taupe leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
