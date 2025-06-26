// src/app/responsible-gaming/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Υπεύθυνο Παιχνίδι | Mystikopaixnidi",
  description:
    "Προωθούμε την αξία του υπεύθυνου παιχνιδιού και ενθαρρύνουμε τους παίκτες να παίζουν με ασφάλεια.",
};

export default function ResponsibleGamingPage() {
  return (
    <main className="bg-brand-light/5 py-16">
      <div className="mx-auto max-w-4xl px-4 space-y-16">
        {/* Заголовок */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">
          Υπεύθυνο Παιχνίδι
        </h1>

        {/* Вступительный абзац */}
        <p className="text-gray-700 leading-relaxed text-center">
          Στο <strong>mystikopaixnidi.gr</strong>, προωθούμε την αξία του υπεύθυνου
          παιχνιδιού και ενθαρρύνουμε τους επισκέπτες μας να παίζουν με μέτρο,
          αυτοέλεγχο και απόλυτη επίγνωση.
        </p>

        {/* Οι βασικές μας αρχές */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Οι βασικές μας αρχές</h2>
          <ul className="space-y-4">
            {[
              "Το παιχνίδι είναι διασκέδαση, όχι τρόπος εισοδήματος.",
              "Μην παίζετε για να καλύψετε απώλειες.",
              "Θέστε όρια σε χρόνο και χρήματα πριν ξεκινήσετε.",
              "Αποφύγετε το παιχνίδι υπό πίεση, άγχος ή επιρροή ουσιών.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 flex-shrink-0 text-green-500 mt-1"
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
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Διαθέσιμα εργαλεία */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Διαθέσιμα εργαλεία</h2>
          <p className="text-gray-700 leading-relaxed">
            Οι νόμιμες πλατφόρμες που παρουσιάζουμε προσφέρουν:
          </p>
          <ul className="space-y-4">
            {[
              "Καθημερινά/μηνιαία όρια κατάθεσης",
              "Υπενθυμίσεις χρόνου παιχνιδιού",
              "Δυνατότητα προσωρινής ή οριστικής αυτο-αποκλεισμού",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 flex-shrink-0 text-green-500 mt-1"
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
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Χρειάζεστε βοήθεια; */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Χρειάζεστε βοήθεια;</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <strong>ΚΕΘΕΑ ΑΛΦΑ:</strong> 210 9215776
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <strong>Γραμμή Στήριξης 1114 (ΕΕΕΠ):</strong> Ανώνυμη &amp; Δωρεάν
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <a
                  href="https://www.kethea.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5f99b8] hover:underline"
                >
                  www.kethea.gr
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
