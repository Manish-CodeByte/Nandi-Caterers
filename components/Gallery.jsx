"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, ZoomIn, ArrowRight } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { GALLERY_ITEMS, getWhatsAppUrl } from "../lib/constants";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="w-full bg-nandi-ivory py-16 md:py-24 border-t border-nandi-gold/20">
      <div className="max-w-nandi mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="font-sans text-[12px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-3">
            A Feast For The Senses
          </p>
          <h2 className="font-serif text-[32px] md:text-[48px] font-bold text-nandi-burgundy leading-[1.2]">
            Celebrating Every Moment
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-nandi-charcoal/80 mt-3">
            A glimpse into the culinary artistry, authentic flavours, and refined setups
            crafted across Mangalore.
          </p>
          <SectionDivider className="my-6" />
        </div>

        {/* Symmetrical, Perfectly Aligned 4-Column Editorial Grid: Ivory cards with subtle gold borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative h-[300px] sm:h-[320px] lg:h-[340px] w-full overflow-hidden bg-nandi-deep-maroon cursor-pointer border border-nandi-gold/40 hover:border-nandi-gold shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[4px]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedItem(item);
              }}
              aria-label={`View ${item.title}`}
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Ambient Bottom Gradient for Clean Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-nandi-deep-maroon/95 via-nandi-deep-maroon/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              {/* Default State Card Info (Visible on all screens by default) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0">
                <span className="font-sans text-[11px] font-bold tracking-eyebrow text-nandi-gold uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-nandi-ivory leading-snug drop-shadow-sm mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-[12px] text-nandi-gold/80 line-clamp-1">
                  {item.alt}
                </p>
                <div className="mt-2 text-[11px] font-sans text-nandi-gold flex items-center gap-1 font-semibold">
                  <span>Tap to enlarge &amp; enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Hover Rich Royal Burgundy Overlay (Smooth Transition on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-nandi-deep-maroon/95 via-nandi-burgundy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                {/* Top Corner Badge & Zoom Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-bold tracking-eyebrow text-nandi-gold uppercase bg-black/40 px-2.5 py-1 rounded-sm border border-nandi-gold/40">
                    {item.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-nandi-gold">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Expanded Info on Hover */}
                <div>
                  <h3 className="font-serif text-[22px] font-bold text-nandi-ivory leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13px] text-nandi-ivory/90 leading-relaxed mb-3">
                    {item.alt}
                  </p>
                  <span className="font-sans text-[12px] font-bold text-nandi-gold inline-flex items-center gap-1.5 underline underline-offset-4 decoration-nandi-gold">
                    Tap to enlarge &amp; enquire <ArrowRight className="w-3.5 h-3.5 text-nandi-gold" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Full-Screen Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[2000] bg-nandi-deep-maroon/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative bg-nandi-ivory-light border border-nandi-gold/50 max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row rounded-[4px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-nandi-deep-maroon/80 text-nandi-gold hover:bg-nandi-burgundy flex items-center justify-center transition-colors focus:outline-none border border-nandi-gold/40"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative w-full md:w-3/5 h-[300px] sm:h-[400px] md:h-[500px] bg-black">
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain md:object-cover"
              />
            </div>

            {/* Modal Content & Direct WhatsApp Enquiry */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-nandi-ivory-light">
              <div>
                <span className="text-xs font-sans font-bold tracking-eyebrow text-nandi-gold uppercase block mb-2">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-nandi-burgundy leading-snug mb-3">
                  {selectedItem.title}
                </h3>
                <p className="font-sans text-[14px] text-nandi-charcoal/80 leading-relaxed mb-6">
                  {selectedItem.alt}. Prepared fresh by Nandi Caterers with authentic
                  traditional recipes and elegant royal presentation.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-nandi-gold/25">
                <a
                  href={getWhatsAppUrl(
                    `Hi Nandi Caterers, I loved the "${selectedItem.title}" (${selectedItem.category}) from your gallery and would like to include this in my upcoming celebration.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-nandi-gold hover:bg-nandi-gold-light text-nandi-burgundy py-3.5 px-5 rounded-[4px] font-sans text-[15px] font-bold tracking-[0.5px] transition-all duration-300 shadow-nandi-gold hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-nandi-burgundy/20" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-2 text-center text-xs text-nandi-taupe hover:text-nandi-burgundy font-sans tracking-wide uppercase font-semibold"
                >
                  Back To Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
