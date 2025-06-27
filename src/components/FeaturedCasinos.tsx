import React from "react";
import Image from "next/image";
import { RefreshCcw } from "lucide-react";

const featured = [
  {
    slug: "kinbet",
    name: "Kinbet",
    logo: "/kinbet.png",
    bonusTitle: "100% Μπόνους Κατάθεσης έως €500",
    bonusSubs: "+ 200 Δωρεάν Περιστροφές",
    url: "https://kinbet.example.com",
  },
  {
    slug: "trueluck",
    name: "True Luck",
    logo: "/trueluck.png",
    bonusTitle: "150% Μπόνους Καλωσορίσματος έως €600",
    bonusSubs: "+ 100 Δωρεάν Περιστροφές",
    url: "https://trueluck.example.com",
  },
  {
    slug: "hugocasino",
    name: "Hugo Casino",
    logo: "/hugo.png",
    bonusTitle: "100% Μπόνους έως €300",
    bonusSubs: "+ 150 Δωρεάν Περιστροφές",
    url: "https://hugocasino.example.com",
  },
];

export default function FeaturedCasinos() {
  return (
    <section className="relative overflow-hidden bg-[#CCE0EA] py-16">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-200 opacity-30 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-pink-200 opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000" />

      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
          Δείτε τα κορυφαία καζίνο για το 2025
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
          {featured.map((c) => (
            <div
              key={c.slug}
              className="group block w-80 h-full transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col justify-between items-center text-center bg-white/70 backdrop-blur-lg border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl h-full">
                {/* Logo + Divider + Content */}
                <div className="w-full">
                  <div className="mb-6 w-40 h-28 relative mx-auto">
                    <Image src={c.logo} alt={c.name} fill style={{ objectFit: "contain" }} />
                  </div>
                  <div className="w-16 h-px bg-gray-300 mx-auto mb-6" />
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                      {c.bonusTitle}
                    </span>
                    <div className="flex items-center space-x-3">
                      <RefreshCcw className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm md:text-base text-gray-700 italic">
                        {c.bonusSubs}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Button */}
                <div className="flex justify-center items-center w-full">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative inline-flex items-center justify-center
                      w-fit px-6 py-3 text-md font-extrabold text-black rounded-full
                      bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400
                      border-0 border-transparent shadow-[0_0_15px_rgba(255,165,0,0.8)]
                      overflow-hidden transition-transform duration-300
                      hover:scale-110 hover:border-yellow-300
                    "
                  >
                    <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
                    <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 group-hover:w-full transition-[width] duration-700 ease-out" />
                    <span className="absolute inset-0 rounded-full bg-white opacity-10 animate-pulse" />
                    <span className="relative z-10">Παίξτε τώρα</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
