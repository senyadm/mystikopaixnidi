"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { casinos } from "@/constants/casinos"; // ⬅️ массив из 10 казино

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCasinos, setShowCasinos] = useState(false); // dropdown «ΚΑΖΙΝΟ»
  const [showAbout, setShowAbout] = useState(false);

  return (
    <header className="bg-[#5f99b8] text-white shadow-soft shadow-2xl">
      <nav className="mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between h-20 relative">
        {/* ─── Логотип ───────────────────────────────────────────────────── */}
        <Link href="/" className="block">
          <div className="w-44 h-44 relative">
            <Image
              src="/logo.png"
              alt="Mystikopaixnidi"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>

        {/* ─── Burger ───────────────────────────────────────────────────── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white mt-1 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white mt-1 transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* ─── Главное меню ─────────────────────────────────────────────── */}
        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-[#5f99b8] md:bg-transparent
            md:flex md:gap-10 font-semibold text-center transition-all duration-300
            ${open ? "block" : "hidden"}
          `}
        >
          {/* ΚΑΖΙΝΟ с выпадающим списком */}
          {/* ΚΑΖΙΝΟ με ομαλό fade/slide dropdown */}
          <li className="relative md:py-0 py-4">
            <button
              onClick={() => setShowCasinos((s) => !s)}
              className="group flex items-center gap-1 px-4 py-2 uppercase tracking-wide
               transition-transform duration-300 hover:scale-105 text-white"
            >
              <span className="relative z-10">ΚΑΖΙΝΟ</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  showCasinos ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* dropdown всегда в DOM и анимируется через utility‐классы */}
            <ul
              className={`
            absolute md:left-0 left-1/2 md:-translate-x-0 -translate-x-1/2
                mt-2 w-56 bg-white text-gray-700 rounded-xl shadow-xl z-40 overflow-hidden
                 origin-top transform transition-all duration-300 ease-out
             ${
               showCasinos
                 ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                 : "opacity-0 scale-y-90 -translate-y-2 pointer-events-none"
             }
                `}
            >
              {casinos.map((cas) => (
                <li key={cas.slug}>
                  <Link
                    href={`/${cas.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setShowCasinos(false);
                    }}
                    className="
            block px-4 py-2 text-sm
            hover:bg-[#5f99b8]/10 hover:text-[#5f99b8]
            transition-colors
          "
                  >
                    {cas.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* --- МПΟΝΟΥΣ (прямая ссылка) ----------------------------- */}
          <li className="md:py-0 py-4">
            <Link
              href="/bonuses"
              onClick={() => setOpen(false)}
              className="group relative px-4 py-2 uppercase tracking-wide
               overflow-hidden transition-transform duration-300
               hover:scale-105 text-white items-center flex"
            >
              <span className="relative z-10">ΜΠΟΝΟΥΣ</span>
            </Link>
          </li>

          {/* --- ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ (dropdown) ------------------------- */}
          <li className="relative md:py-0 py-4">
            {/* Кнопка-триггер */}
            <button
              onClick={() => setShowAbout((v) => !v)}
              className="group flex items-center gap-1 px-4 py-2 uppercase tracking-wide
               transition-transform duration-300 hover:scale-105 text-white"
            >
              <span>ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAbout ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Выпадающий список (всегда в DOM) */}
            <ul
              className={`
      absolute md:left-0 left-1/2 md:-translate-x-0 -translate-x-1/2
      mt-2 w-56 bg-white text-gray-700 rounded-xl shadow-xl z-40 overflow-hidden
      origin-top transform transition-all duration-300 ease-out
      ${
        showAbout
          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
          : "opacity-0  scale-y-90 -translate-y-2 pointer-events-none"
      }
    `}
            >
              {[
                { label: "About Us", href: "/about" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Responsible Gaming", href: "/responsible-gaming" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => {
                      setOpen(false);
                      setShowAbout(false);
                    }}
                    className="
            block px-4 py-2 text-sm
            hover:bg-[#5f99b8]/10 hover:text-[#5f99b8]
            transition-colors
          "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
