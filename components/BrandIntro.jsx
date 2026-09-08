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
    <section id="about" className="w-full bg-white py-14 sm:py-16 md:py-24">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        {/* Intro Header & Editorial Copy */}
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <div className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-3 sm:mb-4">
            The Nandi Experience
          </div>

          {/* Heading with fluid clamp */}
          <h2 className="font-serif fluid-h2 font-bold text-nandi-charcoal mb-5 sm:mb-6">
            Where Every Celebration Begins With Great Food.
          </h2>

          {/* Body */}
          <p className="font-sans fluid-body text-nandi-taupe mb-6 sm:mb-8">
            At Nandi Caterers, we celebrate life&apos;s most precious moments through
            authentic flavours, elegant presentation, and warm Indian hospitality.
            Our team brings decades of experience in fine wedding catering, crafting
            menus that honour tradition while delighting contemporary palates.
          </p>

          {/* Cultural Heritage Callout */}
          <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-nandi-ivory border-l-2 border-nandi-gold/60 mb-10 sm:mb-12">
            <NandiEmblem size={28} opacity={0.7} className="mt-0.5 shrink-0" />
            <p className="font-sans text-[13px] sm:text-[14px] text-nandi-taupe italic leading-relaxed">
              The sacred Nandi bull emblem represents strength, prosperity, and joyous
              celebration in Indian culture. It reflects our unwavering promise to deliver
              flawless feasts for you and your cherished guests.
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <SectionDivider className="my-8 sm:my-10" />

        {/* 3 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-10 sm:mt-12">
          {HIGHLIGHTS.map((item, index) => (
            <div key={item.number} className="flex flex-col group">
              {/* Icon */}
              <div className="mb-3.5 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-1">
                {icons[index]}
              </div>

              {/* Number */}
              <div className="font-serif text-[28px] sm:text-[32px] font-semibold text-nandi-gold leading-[1.2] mb-1.5 sm:mb-2">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-nandi-charcoal mb-2.5 sm:mb-3 group-hover:text-nandi-burgundy transition-colors">
                {item.title}
              </h3>

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
