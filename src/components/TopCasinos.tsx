"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { casinos } from "@/constants/casinos";
import { useRouter } from "next/navigation";

function AnimatedRating({ target }: { target: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.min(target * progress, target);
      setValue(current);
      if (frame === totalFrames) clearInterval(counter);
    }, duration / totalFrames);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <span className="text-gray-900 text-md">
      {value.toFixed(1)}/{5}
    </span>
  );
}

export default function TopCasinos() {
  const router = useRouter();
  const [animateStars, setAnimateStars] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimateStars(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="kazino" className="bg-brand-light/5 sm:py-0 py-4">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 text-center">
          Τα καλύτερα 10 νέα καζίνο
        </h2>
        <p className="text-xs md:text-sm text-red-600 text-center mb-8">
          Κάντε κλικ στην ίδια την κάρτα για να μάθετε περισσότερες πληροφορίες.
        </p>
        <ul className="space-y-8">
          {casinos.map((c) => {
            const fullStars = Math.floor(c.rating);
            const fraction = c.rating - fullStars;
            return (
              <li key={c.slug} className="relative">
                <div
                  className="
                                    cursor-pointer 
                                    bg-white rounded-2xl shadow-lg p-6
                                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6
                                    items-start text-center
                                    transform transition-transform duration-300 ease-out
                                    hover:scale-101 hover:shadow-2xl
                                  "
                  onClick={() => router.push(`/${c.slug}`)}
                >
                  {/* 1. Логотип + название + рейтинг */}
                  <div className="flex flex-col items-center">
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="h-20 sm:h-22 md:h-24 mb-4 object-contain"
                    />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      {c.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-1">
                      {Array.from({ length: 5 }).map((_, idx) => {
                        const isFull = idx < fullStars;
                        const isPartial = idx === fullStars && fraction > 0;
                        const target = isFull
                          ? 100
                          : isPartial
                          ? fraction * 100
                          : 0;

                        return (
                          <span key={idx} className="relative w-5 h-5">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="absolute inset-0 w-5 h-5 text-gray-300"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 
                              00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 
                              00-.364 1.118l1.287 3.97c.3.922-.755 
                              1.688-1.54 1.118l-3.386-2.46a1 1 0 
                              00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.97a1 1 
                              0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 
                              0 00.95-.69l1.286-3.97z"
                              />
                            </svg>
                            {(isFull || isPartial) && (
                              <div
                                className="absolute inset-0 overflow-hidden"
                                style={{
                                  width: animateStars ? `${target}%` : "0%",
                                  transition: `width 0.5s ease-out ${
                                    idx * 150
                                  }ms`,
                                }}
                              >
                                <svg
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5 text-yellow-500"
                                >
                                  <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 
                                  00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 
                                  00-.364 1.118l1.287 3.97c.3.922-.755 
                                  1.688-1.54 1.118l-3.386-2.46a1 1 0 
                                  00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.97a1 1 
                                  0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 
                                  0 00.95-.69l1.286-3.97z"
                                  />
                                </svg>
                              </div>
                            )}
                          </span>
                        );
                      })}
                      <AnimatedRating target={c.rating} />
                    </div>
                  </div>

                  {/* 2. Ранг + бонус */}
                  <div
                    className="
    group
    flex flex-col items-center justify-center
    md:col-span-1 md:justify-self-end
    md:border-l md:border-gray-200 md:pl-8
  "
                  >
                    <span
                      className="
      relative inline-block
      bg-yellow-400 text-gray-700 text-sm font-bold
      rounded-full px-3 py-1 mb-2
      transform transition-transform duration-300
      before:absolute before:inset-0 before:rounded-full before:bg-yellow-300 before:opacity-0
      group-hover:before:opacity-30 group-hover:before:scale-125
      group-hover:scale-110
    "
                    >
                      #{c.rank}
                    </span>

                    <p
                      className="
      text-gray-700 font-semibold text-xl leading-snug
      transform transition-transform duration-200
      group-hover:scale-105
    "
                    >
                      {c.bonus}
                    </p>
                  </div>

                  {/* 3. Преимущества */}
                  <div className="flex flex-col items-start md:justify-self-end md:border-l md:border-gray-200 md:pl-10">
                    <ul className="space-y-2 text-left">
                      {c.advantages.map((adv) => (
                        <li key={adv} className="flex items-center gap-3 group">
                          <svg
                            className="
            w-5 h-5 text-green-500 flex-shrink-0
            transform transition-transform duration-300
            group-hover:-rotate-6 group-hover:scale-110
          "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span
                            className="
            block text-gray-700 text-sm leading-tight
            transform transition-transform duration-300
            group-hover:translate-x-2 group-hover:text-gray-900
          "
                          >
                            {adv}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 4. Кнопка */}
                  <div className="justify-center items-center self-center">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
  group relative inline-block self-center items-center justify-center
  w-fit       /* <-- добавили */
  px-6 py-3   /* подберите размер */
  text-md 
  font-extrabold text-gray-900 rounded-full
  bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400
  border-0 border-transparent
  shadow-[0_0_15px_rgba(255,165,0,0.8)]
  overflow-hidden transition-transform duration-300
  hover:scale-110 hover:border-yellow-300
"
                    >
                      {/* Glow overlay */}
                      <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
                      {/* Sliding shine */}
                      <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 group-hover:w-full transition-[width] duration-700 ease-out" />
                      {/* Subtle pulse */}
                      <span className="absolute inset-0 rounded-full bg-white opacity-10 animate-pulse" />
                      <span className="relative z-10">Παίξτε τώρα</span>
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="text-xs md:text-sm text-red-600 text-center mt-8 mb-4">
          Κάντε κλικ στην ίδια την κάρτα για να μάθετε περισσότερες πληροφορίες.
        </p>
      </div>
    </section>
  );
}
