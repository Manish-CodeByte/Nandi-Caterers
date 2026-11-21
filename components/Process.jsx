"use client";

import React from "react";
import SectionDivider from "./SectionDivider";
import { PROCESS_STEPS } from "../lib/constants";

export default function Process() {
  return (
    <section className="w-full bg-nandi-ivory py-14 sm:py-16 md:py-24 border-t border-nandi-gold/20">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <p className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-2.5 sm:mb-3">
            Seamless Execution
          </p>
          <h2 className="font-serif fluid-h2 font-bold text-nandi-burgundy">
            Our Simple Process
          </h2>
          <p className="font-sans fluid-body text-nandi-charcoal/80 mt-2.5 sm:mt-3">
            From initial consultation to the final sweet dessert, we ensure flawless coordination.
          </p>
          <SectionDivider className="my-5 sm:my-6" />
        </div>

        {/* 4 Process Steps Grid: Ivory cards with subtle gold borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-nandi-ivory-light p-6 sm:p-7 rounded-[4px] border border-nandi-gold/35 shadow-sm hover:shadow-md hover:border-nandi-gold/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Accent Bar */}
                <div className="w-12 h-[2px] bg-nandi-gold mb-4 sm:mb-5 group-hover:w-20 transition-all duration-300" />

                {/* Number */}
                <div className="font-serif text-[38px] sm:text-[44px] font-bold text-nandi-gold leading-none mb-2.5 sm:mb-3">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-[19px] sm:text-[21px] md:text-[22px] font-bold text-nandi-burgundy leading-[1.3] mb-2 sm:mb-3 group-hover:text-nandi-deep-maroon transition-colors">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-[13px] sm:text-[14px] text-nandi-taupe leading-[1.6]">
                {step.description}
              </p>

              {/* Arrow indicator between steps (hidden on last step and mobile/tablet) */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-nandi-gold/70 text-xl font-serif select-none pointer-events-none">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
