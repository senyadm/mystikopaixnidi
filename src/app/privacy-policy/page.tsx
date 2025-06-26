// src/app/privacy-policy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Πολιτική Απορρήτου | Mystikopaixnidi',
  description:
    'Πολιτική Απορρήτου του mystikopaixnidi.gr – συλλογή, χρήση και προστασία των προσωπικών δεδομένων σας σύμφωνα με GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-light/5 py-16">
      <div className="mx-auto max-w-4xl px-4 space-y-12">
        {/* Заголовок */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center">
          Πολιτική Απορρήτου
        </h1>

        {/* Вступительный абзац */}
        <p className="text-gray-700 leading-relaxed">
          Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο το{' '}
          <strong>mystikopaixnidi.gr</strong> συλλέγει, χρησιμοποιεί, διατηρεί
          και προστατεύει τα προσωπικά δεδομένα των επισκεπτών του, σύμφωνα με
          τον Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR) και την
          ισχύουσα ελληνική νομοθεσία.
        </p>

        {/* Τι δεδομένα συλλέγουμε */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Τι δεδομένα συλλέγουμε
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Πληροφορίες επικοινωνίας (αν τις εισάγετε)</li>
            <li>Cookies και ανώνυμα στατιστικά χρήσης</li>
          </ul>
        </section>

        {/* Πώς χρησιμοποιούνται */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Πώς χρησιμοποιούνται
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Για απάντηση σε αιτήματα ή σχόλια</li>
            <li>Για βελτίωση της εμπειρίας χρήστη</li>
            <li>Για ανάλυση επισκεψιμότητας (μέσω cookies)</li>
          </ul>
        </section>

        {/* Τα δικαιώματά σας */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Τα δικαιώματά σας</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Πρόσβαση, διόρθωση, διαγραφή ή περιορισμός των προσωπικών σας
              στοιχείων
            </li>
            <li>Ανάκληση συγκατάθεσης</li>
            <li>
              Υποβολή αιτήματος στο email:{' '}
              <a
                href="mailto:privacy@mystikopaixnidi.gr"
                className="text-[#5f99b8] hover:underline"
              >
                privacy@mystikopaixnidi.gr
              </a>
            </li>
          </ul>
        </section>

        {/* Заключение */}
        <section className="text-gray-700 leading-relaxed">
          <p>
            Για αναλυτική πολιτική ή για να μάθετε πώς να διαχειρίζεστε τα cookies,
            επισκεφθείτε την πλήρη έκδοση της σελίδας μας ή επικοινωνήστε μαζί μας.
          </p>
        </section>
      </div>
    </main>
  );
}
