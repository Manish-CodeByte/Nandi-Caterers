"use client";

import React from "react";
import { Star } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { TESTIMONIALS } from "../lib/constants";

export default function Testimonials() {
  return (
    <section className="w-full bg-nandi-cream py-14 sm:py-16 md:py-24">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <p className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-2.5 sm:mb-3">
            Voices of Delight
          </p>
          <h2 className="font-serif fluid-h2 font-bold text-nandi-charcoal">
            Celebrations That Speak For Themselves.
          </h2>
          <p className="font-sans text-[13px] sm:text-[14px] text-nandi-taupe mt-2.5 sm:mt-3">
            Client feedback from cherished weddings, gatherings, and celebrations.
          </p>
          <SectionDivider className="my-5 sm:my-6" />
        </div>

        {/* 3 Testimonials Grid (1 col mobile, 3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 md:p-10 border border-nandi-gold/20 flex flex-col justify-between transition-all duration-300 hover:border-nandi-gold/60 hover:shadow-md rounded-[2px]"
            >
              <div>
                {/* Decorative Quotation Mark */}
                <div className="font-serif text-[44px] sm:text-[52px] text-nandi-gold/50 leading-none mb-3 sm:mb-4 select-none font-bold">
                  &ldquo;
                </div>

                {/* Quote Text */}
                <p className="font-serif text-[16px] sm:text-[17px] md:text-[18px] text-nandi-charcoal leading-[1.7] italic mb-6">
                  {item.quote}
                </p>
              </div>

              <div>
                <div className="border-t border-nandi-gold/15 pt-4">
                  {/* Author Name */}
                  <div className="font-sans text-[13px] sm:text-[14px] font-semibold text-nandi-charcoal">
                    {item.author}
                  </div>
                  {/* Event Type */}
                  <div className="font-sans text-[12px] sm:text-[13px] text-nandi-taupe tracking-[0.5px] mt-0.5">
                    {item.eventType}
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mt-3" aria-label="5 stars">
                  {[...Array(item.stars)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-nandi-gold text-nandi-gold"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
