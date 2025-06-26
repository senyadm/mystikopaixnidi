// src/app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Σχετικά με εμάς | Mystikopaixnidi',
  description:
    'Το mystikopaixnidi.gr προσφέρει αξιόπιστη, ποιοτική και διαφανή πληροφόρηση για online καζίνο στην Ελλάδα.',
};

export default function AboutPage() {
  return (
    <main className="bg-brand-light/5 py-16">
      <div className="mx-auto max-w-4xl px-4 space-y-16">
        {/* Заголовок */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">
          Σχετικά με εμάς
        </h1>

        {/* Вступительный абзац */}
        <p className="text-gray-700 leading-relaxed">
          Το mystikopaixnidi.gr είναι μια ανεξάρτητη ιστοσελίδα που δημιουργήθηκε για να προσφέρει
          αξιόπιστη, ποιοτική και διαφανή πληροφόρηση για το online καζίνο στην Ελλάδα.
          Παρουσιάζουμε με αξιοπιστία τα νόμιμα online καζίνο, προσφορές, μπόνους και οδηγούς
          για τους παίκτες που θέλουν να παίξουν με ασφάλεια και ενημέρωση.
        </p>

        {/* Η Αποστολή μας */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Η Αποστολή μας</h2>
          <p className="text-gray-700 leading-relaxed">
            Το mystikopaixnidi.gr δημιουργήθηκε με σκοπό να αποτελέσει την πιο αξιόπιστη πηγή ενημέρωσης
            για τους παίκτες που ενδιαφέρονται για νόμιμα online καζίνο στην Ελλάδα. Εδώ θα βρείτε:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Αξιολογήσεις για πλατφόρμες που λειτουργούν νόμιμα με άδεια από την ΕΕΕΠ',
              'Αναλυτικούς οδηγούς για φρουτάκια, live καζίνο και επιτραπέζια παιχνίδια',
              'Συγκρίσεις μπόνους και προσφορών',
              'Συμβουλές για υπεύθυνο και ασφαλές παιχνίδι',
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

        {/* Η Ομάδα μας */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Η Ομάδα μας</h2>
          <p className="text-gray-700 leading-relaxed">
            Η ομάδα πίσω από το mystikopaixnidi.gr αποτελείται από ανθρώπους με εμπειρία στο
            χώρο του iGaming και της ψηφιακής ασφάλειας. Αναλύουμε τις online πλατφόρμες με
            κριτήρια που αφορούν:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Την ποικιλία και ποιότητα των παιχνιδιών',
              'Τη διαφάνεια στους όρους και τις πληρωμές',
              'Την υποστήριξη πελατών σε ελληνική γλώσσα',
              'Τη χρηστικότητα της πλατφόρμας από κινητά και desktop',
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

        {/* Τι Κάνουμε Διαφορετικά */}
        <section className="bg-white rounded-xl p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Τι Κάνουμε Διαφορετικά
          </h2>
          <ul className="space-y-3">
            {[
              'Στην αντικειμενική παρουσίαση κάθε καζίνο',
              'Στην τακτική ενημέρωση του περιεχομένου με βάση τις τελευταίες εξελίξεις',
              'Στην προστασία των παικτών, δίνοντας έμφαση σε brands που υποστηρίζουν υπεύθυνο παιχνίδι',
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

        {/* Μείνετε Συντονισμένοι */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Μείνετε Συντονισμένοι
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Το Mystikopaixnidi.gr ανανεώνεται καθημερινά με προσφορές, νέα μπόνους,
            τουρνουά και οδηγούς παιχνιδιών. Αν θέλετε να είστε πάντα ένα βήμα μπροστά
            στον κόσμο των online casino, επιστρέφετε τακτικά στη σελίδα μας ή εγγραφείτε
            στο newsletter μας (σύντομα διαθέσιμο).
          </p>
        </section>
      </div>
    </main>
  );
}
