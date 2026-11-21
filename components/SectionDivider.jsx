"use client";

import React from "react";
import NandiEmblem from "./NandiEmblem";

export default function SectionDivider({ className = "", light = false }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 select-none ${className}`}>
      <span
        className={`h-[1px] w-12 sm:w-20 md:w-32 transition-colors ${
          light ? "bg-nandi-gold/20" : "bg-nandi-gold/30"
        }`}
      />
      <NandiEmblem
        size={24}
        color="#D7A170"
        opacity={0.5}
        className="transform hover:scale-110 transition-transform duration-300"
      />
      <span
        className={`h-[1px] w-12 sm:w-20 md:w-32 transition-colors ${
          light ? "bg-nandi-gold/20" : "bg-nandi-gold/30"
        }`}
      />
    </div>
  );
}
