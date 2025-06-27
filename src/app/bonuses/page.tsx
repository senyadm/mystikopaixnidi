// src/app/bonuses/page.tsx
import Head from "next/head";
import Link from "next/link";
import { casinos } from "@/constants/casinos";

export default function BonusesPage() {
  return (
    <>
      <Head>
        <title>Νέα Μπόνους Καζίνο στην Ελλάδα (2025) | MystikoPaixnidi.gr</title>
        <meta
          name="description"
          content="Βρείτε και συγκρίνετε τα πιο γενναιόδωρα μπόνους online καζίνο στην Ελλάδα: προσφορές καλωσορίσματος, δωρεάν περιστροφές, VIP rewards."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mystikopaixnidi.gr/bonuses" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MystikoPaixnidi.gr" />
        <meta
          property="og:title"
          content="Νέα Μπόνους Καζίνο στην Ελλάδα (2025) | MystikoPaixnidi.gr"
        />
        <meta
          property="og:description"
          content="Συγκρίνετε τα πιο γενναιόδωρα μπόνους online καζίνο στην Ελλάδα: μπόνους καλωσορίσματος, δωρεάν περιστροφές και VIP rewards."
        />
        <meta property="og:url" content="https://mystikopaixnidi.gr/bonuses" />
        <meta property="og:image:alt" content="Νέα μπόνους καζίνο στην Ελλάδα" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-brand-light/5 py-12">
        <section id="bonuses-hero" className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Νέα Μπόνους Καζίνο στην Ελλάδα (2025)
          </h1>
          <p className="text-gray-600 mb-10">
            Αναζητάτε τα πιο γενναιόδωρα μπόνους online καζίνο στην Ελλάδα; Στη σελίδα αυτή
            συγκεντρώσαμε τις καλύτερες προσφορές καλωσορίσματος, μπόνους χωρίς κατάθεση,
            δωρεάν περιστροφές, VIP rewards και loyalty προγράμματα. Συγκρίνετε νέα
            καζίνο με χαμηλό ελάχιστο ποντάρισμα, ελληνική υποστήριξη και εύκολες
            αναλήψεις, και διαλέξτε αυτό που σας ταιριάζει.
          </p>
        </section>

        <ul role="list" className="mx-auto max-w-4xl px-4 space-y-8">
          {casinos.map((casino, idx) => (
            <li
              key={casino.slug}
              className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6"
            >
              <div className="md:col-span-2 lg:col-span-1 flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-800">
                  {idx + 1}. {casino.name}
                </span>
                <span className="inline-flex items-center text-yellow-500 font-bold">
                  {casino.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                </span>
              </div>

              <section aria-labelledby={`${casino.slug}-bonus`} className="md:border-l md:pl-6">
                <h2 id={`${casino.slug}-bonus`} className="text-gray-700 font-medium mb-2">
                  Μπόνους:
                </h2>
                <p className="text-gray-800 font-semibold">{casino.bonus}</p>
              </section>

              <section aria-labelledby={`${casino.slug}-advantages`} className="md:border-l md:pl-6">
                <h2 id={`${casino.slug}-advantages`} className="text-gray-700 font-medium mb-2">
                  Πλεονεκτήματα:
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {casino.advantages.map((adv) => (
                    <li key={adv}>{adv}</li>
                  ))}
                </ul>
              </section>

              <div className="md:border-l md:pl-6 flex items-center">
                <Link
                  href={`/kazino/${casino.slug}`} 
                  className="relative inline-block px-6 py-3 font-bold text-white rounded-full
                    bg-gradient-to-r from-[#5f00b8] to-[#f4c542]
                    shadow-lg overflow-hidden
                    transform transition-transform duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Παίξτε τώρα</span>
                  <span
                    className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-30
                      transition-opacity duration-300"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
