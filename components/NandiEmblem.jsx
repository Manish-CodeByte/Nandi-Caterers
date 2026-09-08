"use client";

import React from "react";

/**
 * NandiEmblem Component
 * The central brand icon of Nandi Caterers:
 * An ornate golden Nandi bull resting regally inside a circular ornamental ring frame.
 */
export default function NandiEmblem({
  size = 40,
  className = "",
  color,
  opacity = 1,
  showGlow = false,
}) {
  const gradientId = "nandiGoldGradient";
  const strokeColor = color || `url(#${gradientId})`;
  const fillColor = color || `url(#${gradientId})`;

  return (
    <div
      className={`inline-flex items-center justify-center relative select-none transition-all duration-300 ${
        showGlow ? "hover:drop-shadow-[0_0_14px_rgba(201,169,97,0.6)]" : ""
      } ${className}`}
      style={{
        width: size,
        height: size,
        opacity: opacity,
      }}
      aria-label="Nandi Caterers Emblem"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="35%" stopColor="#F5E0A3" />
            <stop offset="65%" stopColor="#B89A5A" />
            <stop offset="100%" stopColor="#96793A" />
          </linearGradient>
        </defs>

        {/* Outer Circular Beaded Ring */}
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeDasharray="2.5 1.5"
          opacity="0.85"
        />

        {/* Concentric Fine Ring */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke={strokeColor}
          strokeWidth="1.5"
        />

        {/* Inner Delicately Inset Ring */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={strokeColor}
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* 4 Cardinal Sacred Petal Flourishes on the rim */}
        {/* Top */}
        <path
          d="M50 3 C48 7 46 9 50 12 C54 9 52 7 50 3Z"
          fill={fillColor}
        />
        {/* Bottom */}
        <path
          d="M50 97 C48 93 46 91 50 88 C54 91 52 93 50 97Z"
          fill={fillColor}
        />
        {/* Left */}
        <path
          d="M3 50 C7 48 9 46 12 50 C9 54 7 52 3 50Z"
          fill={fillColor}
        />
        {/* Right */}
        <path
          d="M97 50 C93 48 91 46 88 50 C91 54 93 52 97 50Z"
          fill={fillColor}
        />

        {/* Base Lotus Pedestal for Sacred Nandi */}
        <path
          d="M24 74 C32 71 42 70 50 70 C58 70 68 71 76 74 C74 77 66 79 50 79 C34 79 26 77 24 74Z"
          fill={fillColor}
          opacity="0.35"
        />
        <path
          d="M26 74 Q50 68 74 74 Q50 80 26 74 Z"
          stroke={strokeColor}
          strokeWidth="1.2"
          fill="none"
        />

        {/* Detailed Silhouette of Sacred Seated Nandi Bull */}
        {/* Body & Folded Forelegs & Hindquarters */}
        <path
          d="M28 69 
             C27 63 30 57 36 55 
             C38 52 41 46 45 42 
             C47 38 49 33 52 32 
             C56 31 59 34 60 38 
             C63 38 67 40 69 44 
             C72 48 74 54 73 62 
             C73 66 71 69 68 70 
             C62 71 56 71 50 71 
             C42 71 34 71 28 69Z"
          fill={fillColor}
          opacity="0.9"
        />

        {/* Sacred Hump (Kakud) of Nandi */}
        <path
          d="M44 43 C42 35 48 30 52 32 C54 34 55 38 55 42 Z"
          fill={fillColor}
        />

        {/* Regal Bull Head, Curved Horns & Crown Crescent */}
        <path
          d="M59 38 
             C62 36 67 36 71 39 
             C73 41 74 44 73 47 
             C71 49 68 50 65 48 
             C62 46 60 42 59 38Z"
          fill={fillColor}
        />
        {/* Horns curving upward gracefully */}
        <path
          d="M62 37 C64 30 67 24 71 23 C71 27 69 31 66 36 Z"
          fill={fillColor}
        />
        <path
          d="M58 36 C59 29 61 24 64 22 C64 26 63 30 61 35 Z"
          fill={fillColor}
          opacity="0.8"
        />
        {/* Soft Ear */}
        <path
          d="M57 40 C54 41 53 44 55 45 C57 45 59 43 59 41 Z"
          fill={fillColor}
        />

        {/* Ceremonial Bell Collar / Ghanti Garland around Neck */}
        <path
          d="M59 46 Q64 51 68 53"
          stroke="#FAF7F0"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="61" cy="48" r="1.2" fill="#FAF7F0" />
        <circle cx="64" cy="50.5" r="1.4" fill="#FAF7F0" />
        <circle cx="67" cy="52.5" r="1.2" fill="#FAF7F0" />

        {/* Ornamental Back Blanket (Jhula/Cloth) */}
        <path
          d="M39 56 C44 54 52 54 57 56 C57 62 55 65 48 66 C41 65 39 61 39 56Z"
          fill="#42121E"
          opacity="0.4"
          stroke={strokeColor}
          strokeWidth="0.8"
        />
        {/* Blanket Fringe */}
        <path
          d="M41 64 L41 66 M44 65 L44 67 M48 66 L48 68 M52 65 L52 67 M55 64 L55 66"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* Peaceful Eye Accent */}
        <circle cx="68.5" cy="41" r="0.9" fill="#42121E" />

        {/* Sacred Forehead Tilak */}
        <path
          d="M69 37 L70 35 L71 37 Z"
          fill="#641C2D"
        />
      </svg>
    </div>
  );
}
