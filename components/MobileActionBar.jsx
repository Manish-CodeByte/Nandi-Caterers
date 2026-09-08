"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND, getWhatsAppUrl, WHATSAPP_MESSAGES } from "../lib/constants";

export default function MobileActionBar() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.mobileBar);

  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white border-t border-nandi-gold shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
      aria-label="Quick contact actions"
    >
      <div className="flex w-full h-[70px]">
        {/* Call Now (Left Half) */}
        <a
          href={`tel:+91${BRAND.primaryPhone}`}
          className="flex-1 flex items-center justify-center gap-2.5 bg-white active:bg-nandi-ivory text-nandi-burgundy border-r border-nandi-gold/30 font-sans text-[14px] font-semibold tracking-[0.5px] transition-colors focus:outline-none"
          aria-label={`Call Nandi Caterers directly at ${BRAND.primaryPhoneFormatted}`}
        >
          <div className="w-8 h-8 rounded-full bg-nandi-ivory flex items-center justify-center border border-nandi-gold/30">
            <Phone className="w-4 h-4 text-nandi-burgundy" />
          </div>
          <span>Call Now</span>
        </a>

        {/* WhatsApp (Right Half) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 bg-nandi-burgundy active:bg-nandi-deep-burgundy text-white font-sans text-[14px] font-semibold tracking-[0.5px] transition-colors shadow-inner focus:outline-none"
          aria-label="Chat with Nandi Caterers on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white fill-white/20" />
          </div>
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
