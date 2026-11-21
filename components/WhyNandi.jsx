"use client";

import React from "react";
import Image from "next/image";
import SectionDivider from "./SectionDivider";
import NandiEmblem from "./NandiEmblem";
import { WHY_NANDI_REASONS } from "../lib/constants";

export default function WhyNandi() {
  return (
    <section id="services" className="w-full bg-nandi-ivory py-14 sm:py-16 md:py-24 border-t border-nandi-gold/20">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Editorial Photo (45% on desktop: lg:col-span-5) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28">
              <div className="relative w-full max-w-[460px] mx-auto lg:max-w-none aspect-[4/5] bg-nandi-ivory-light shadow-[0_16px_48px_rgba(51,1,5,0.1)] overflow-hidden rounded-[4px] border border-nandi-gold/40">
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=85"
                  alt="Fine dining catering hospitality by Nandi Caterers"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Inset Border */}
                <div className="absolute inset-3 sm:inset-4 border border-nandi-gold/40 pointer-events-none" />

                {/* Corner Emblem Badge */}
                <div className="absolute top-6 sm:top-8 left-6 sm:left-8 bg-nandi-ivory-light/95 backdrop-blur-md p-2.5 sm:p-3 shadow-md flex items-center gap-2.5 sm:gap-3 border border-nandi-gold/40 rounded-sm">
                  <NandiEmblem size={26} color="#D7A170" />
                  <span className="font-serif text-[11px] sm:text-xs font-bold tracking-luxury text-nandi-burgundy uppercase">
                    Trusted In Mangalore
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Numbered Reasons (55% on desktop: lg:col-span-7) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-2.5 sm:mb-3">
              The Standard of Perfection
            </div>
            <h2 className="font-serif fluid-h2 font-bold text-nandi-burgundy mb-3 sm:mb-4">
              Why Choose Nandi?
            </h2>
            <p className="font-sans fluid-body text-nandi-charcoal/80 mb-6 sm:mb-8">
              Catering is not merely serving food—it is curating an indelible sensory memory
              for your family and honoured guests.
            </p>

            <SectionDivider className="my-5 sm:my-6 !justify-start" />

            {/* 6 Reasons 2-column grid: Ivory cards with subtle gold borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
              {WHY_NANDI_REASONS.map((reason) => (
                <div
                  key={reason.number}
                  className="bg-nandi-ivory-light p-5 sm:p-6 rounded-[4px] border border-nandi-gold/35 shadow-sm hover:shadow-md hover:border-nandi-gold/70 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="font-serif text-[28px] sm:text-[32px] font-bold text-nandi-gold leading-none mb-1.5 sm:mb-2">
                      {reason.number}
                    </div>
                    <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-nandi-burgundy mb-1.5 sm:mb-2 group-hover:text-nandi-deep-maroon transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[13px] sm:text-[14px] text-nandi-taupe leading-[1.6]">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
