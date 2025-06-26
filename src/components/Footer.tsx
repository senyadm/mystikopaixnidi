"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 

import { casinos } from "@/constants/casinos";

export default function Footer() {
  const top3 = casinos.slice(0, 3);

  const fadeIn = {
    hidden:  { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  };

  const licences = [
    { src: "/licences/mga.png", alt: "MGA", w: 160, h: 80 },
    { src: "/licences/rgf.png", alt: "Responsible Gaming Foundation", w: 160, h: 80 },
    { src: "/licences/ga.png", alt: "Gamble Aware", w: 160, h: 80 },
    { src: "/licences/gs.svg", alt: "Gam Stop", w: 160, h: 80 },
    { src: "/licences/18plus.svg", alt: "18+", w: 40, h: 40 },  
  ];

  return (
    <footer className="bg-[#5f99b8] pt-10 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Логотип */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Mystikopaixnidi logo"
            width={200}
            height={80}
            priority
            className="object-contain"
          />
        </Link>

        {/* Меню с анимациями */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* ───── Online καζίνο ───── */}
          <div>
            <motion.h3
              className="text-xl font-semibold mb-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Online καζίνο
            </motion.h3>

            <ul>
              {top3.map((c, i) => (
                <motion.li
                  key={c.slug}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}               // лёгкий сдвиг
                  className="mb-2"
                >
                  <Link
                    href={`/${c.slug}`}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {c.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ───── Σχετικά με εμάς ───── */}
          <div>
            <motion.h3
              className="text-xl font-semibold mb-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Σχετικά με εμάς
            </motion.h3>

            <ul>
              {[
                { href: "/privacy-policy", label: "Πολιτική Απορρήτου" },
                { href: "/about", label: "Σχετικά με εμάς" },
                { href: "/responsible-gaming", label: "Υπεύθυνο παιχνίδι" },
              ].map((item, i) => (
                <motion.li
                  key={item.href}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="mb-2"
                >
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* ───── ΜΠΟΝΟΥΣ ───── */}
          <div>
            <motion.h3
              className="text-xl font-semibold mb-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              ΜΠΟΝΟΥΣ
            </motion.h3>

            <ul>
              <motion.li
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
              >
                <Link
                  href="/privacy-policy"
                  className="transition-colors duration-200 hover:text-white"
                >
                  ΜΠΟΝΟΥΣ Info
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>

      {/* ░░░ Disclaimer text ░░░ */}
      <div className="mx-auto max-w-5xl px-4 mt-12 text-sm leading-relaxed space-y-4">
        <p>
          Ο παρών ιστότοπος λειτουργεί ανεξάρτητα για σκοπούς ενημέρωσης σχετικά
          με online καζίνο στην Ελλάδα. Το περιεχόμενο απευθύνεται αποκλειστικά
          σε ενήλικες άνω των 18 ετών και ενδέχεται να υπόκειται σε όρους και
          περιορισμούς ανάλογα με τη νομοθεσία. Οι πληροφορίες και οι προσφορές
          που παρουσιάζονται βασίζονται σε δημόσια διαθέσιμα στοιχεία και
          συνεργασίες με τρίτους παρόχους. Συνιστάται να διαβάζετε προσεκτικά
          τους πλήρεις όρους χρήσης κάθε πλατφόρμας πριν εγγραφείτε. Δεν
          παρέχουμε στοιχηματικές ή τυχερές υπηρεσίες και δεν φέρουμε ευθύνη για
          την ακρίβεια των πληροφοριών τρίτων. Παίξτε υπεύθυνα.
        </p>
      </div>


      <div className="border-t border-white/40 mx-auto max-w-7xl mt-10 pt-6 px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {licences.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={l.w}
              height={l.h}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* ░░░ Copyright ░░░ */}
      <p className="text-center mt-8 text-sm font-medium">
        © 2025 Όλα τα δικαιώματα διατηρούνται
      </p>
    </footer>
  );
}
