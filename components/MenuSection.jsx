"use client";

import React from "react";
import { MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { MENU_CATEGORIES, getWhatsAppUrl, WHATSAPP_MESSAGES } from "../lib/constants";

export default function MenuSection() {
  const menuWhatsAppUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.menu);

  return (
    <section id="menu" className="w-full bg-white py-14 sm:py-16 md:py-24">
      <div className="max-w-nandi mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-[700px] mb-10 sm:mb-12 md:mb-16">
          <div className="font-sans text-[11px] sm:text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-2.5 sm:mb-3">
            Our Signatures
          </div>
          <h2 className="font-serif fluid-h2 font-bold text-nandi-charcoal mb-3 sm:mb-4">
            A Menu Worth Gathering Around.
          </h2>
          <p className="font-sans fluid-body text-nandi-taupe">
            Every dish is tailored to your celebration, made fresh from locally sourced
            ingredients and traditional culinary recipes.
          </p>
          <SectionDivider className="my-5 sm:my-6 !justify-start" />
        </div>

        {/* 6 Category Menu Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MENU_CATEGORIES.map((cat) => {
            const isNonVeg = cat.category === "NON-VEGETARIAN";
            const categoryWhatsApp = getWhatsAppUrl(
              `Hi Nandi Caterers, I would like to explore your ${cat.category} options for an upcoming event.`
            );

            return (
              <div
                key={cat.category}
                className="bg-nandi-ivory p-6 sm:p-8 border-t-[3px] border-nandi-gold flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group rounded-b-[2px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="flex items-center gap-2.5">
                      {/* Dietary Symbol (Veg/Non-Veg) */}
                      <span
                        className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                          isNonVeg
                            ? "border-red-800"
                            : "border-emerald-700"
                        }`}
                        title={isNonVeg ? "Non-Vegetarian" : "Vegetarian"}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isNonVeg ? "bg-red-800" : "bg-emerald-700"
                          }`}
                        />
                      </span>

                      <h3 className="font-serif text-[21px] sm:text-[24px] font-bold text-nandi-burgundy tracking-wide">
                        {cat.category}
                      </h3>
                    </div>

                    <Sparkles className="w-4 h-4 text-nandi-gold/60 group-hover:text-nandi-gold transition-colors" />
                  </div>

                  <ul className="space-y-3 sm:space-y-3.5" role="list">
                    {cat.dishes.map((dish, i) => (
                      <li
                        key={i}
                        className="font-sans text-[13px] sm:text-[14px] text-nandi-charcoal tracking-[0.3px] leading-[1.8] border-b border-nandi-gold/10 pb-2 last:border-b-0 flex items-center justify-between"
                      >
                        <span>{dish}</span>
                        <span className="text-[11px] text-nandi-gold opacity-0 group-hover:opacity-100 transition-opacity">
                          &bull; Signature
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-nandi-gold/15 flex items-center justify-between">
                  <a
                    href={categoryWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-nandi-burgundy hover:text-nandi-deep-burgundy uppercase tracking-luxury transition-colors py-1 min-h-[36px]"
                  >
                    <span>Enquire {cat.category}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-nandi-gold" />
                  </a>

                  <span className="text-[11px] text-nandi-taupe">Freshly Prepared</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Width CTA Box Below Menu Grid */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto p-6 sm:p-10 bg-nandi-cream border border-nandi-gold/30 rounded-[2px]">
          <p className="font-sans text-[15px] sm:text-[17px] font-medium text-nandi-charcoal mb-4 sm:mb-5">
            Want a customized menu for your event?
          </p>
          <a
            href={menuWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-nandi-burgundy hover:bg-nandi-deep-burgundy text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-[4px] font-sans text-[14px] sm:text-[16px] font-semibold tracking-[0.5px] transition-all duration-300 hover:scale-[1.02] shadow-nandi-burgundy min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 fill-white/10" />
            <span>WhatsApp Us To Discuss Your Menu</span>
          </a>
          <p className="font-sans text-[11px] sm:text-xs text-nandi-taupe mt-3">
            Custom tasting sessions &bull; Jain &bull; Pure Veg &bull; Multi-course banquets available
          </p>
        </div>
      </div>
    </section>
  );
}
