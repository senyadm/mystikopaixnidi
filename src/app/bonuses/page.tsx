// src/app/bonuses/page.tsx
import Link from "next/link";
import { casinos } from "@/constants/casinos";

export const metadata = {
  title: "Νέα Μπόνους Καζίνο στην Ελλάδα (2025)",
  description:
    "Αναζητάτε τα πιο γενναιόδωρα μπόνους online καζίνο στην Ελλάδα; Συγκρίνετε προσφορές καλωσορίσματος, δωρεάν περιστροφές και VIP rewards.",
};

export default function BonusesPage() {
  return (
    <section className="bg-brand-light/5 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
          Νέα Μπόνους Καζίνο στην Ελλάδα (2025)
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Αναζητάτε τα πιο γενναιόδωρα μπόνους online καζίνο στην Ελλάδα; Στη σελίδα αυτή
          συγκεντρώσαμε τις καλύτερες προσφορές καλωσορίσματος, μπόνους χωρίς κατάθεση,
          δωρεάν περιστροφές, VIP rewards και loyalty προγράμματα. Συγκρίνετε νέα
          καζίνο με χαμηλό ελάχιστο ποντάρισμα, ελληνική υποστήριξη και εύκολες αναλήψεις,
          και διαλέξτε αυτό που σας ταιριάζει.
        </p>

        <ul className="space-y-8">
          {casinos.map((c, idx) => (
            <li
              key={c.slug}
              className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6"
            >
              {/* 1. Αρίθμηση + Όνομα + Βαθμολογία */}
              <div className="flex items-center justify-between md:col-span-2 lg:col-span-1">
                <span className="text-xl font-semibold text-gray-800">
                  {idx + 1}. {c.name}
                </span>
                <span className="inline-flex items-center text-yellow-500 font-bold">
                  {c.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                </span>
              </div>

              {/* 2. Μπόνους */}
              <div className="md:border-l md:pl-6">
                <h4 className="text-gray-700 font-medium mb-2">Μπόνους:</h4>
                <p className="text-gray-800 font-semibold">{c.bonus}</p>
              </div>

              {/* 3. Πλεονεκτήματα */}
              <div className="md:border-l md:pl-6">
                <h4 className="text-gray-700 font-medium mb-2">Πλεονεκτήματα:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {c.advantages.map((adv) => (
                    <li key={adv}>{adv}</li>
                  ))}
                </ul>
              </div>

              {/* 4. Κουμπί */}
              <div className="md:border-l md:pl-6 flex items-center justify-start">
                <Link
                  href={`/kazino/${c.slug}`}
                  className="group relative inline-block px-6 py-3 font-bold text-white rounded-full
                             bg-gradient-to-r from-[#5f00b8] to-[#f4c542]
                             shadow-lg overflow-hidden
                             transform transition-transform duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Παίξτε τώρα</span>
                  <span
                    className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30
                               transition-opacity duration-300"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
