"use client";
import Head from 'next/head';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Πολιτική Απορρήτου | Mystikopaixnidi</title>
        <meta
          name="description"
          content="Μάθετε πώς το mystikopaixnidi.gr συλλέγει και προστατεύει τα προσωπικά δεδομένα των επισκεπτών του σύμφωνα με τον GDPR."
        />
      </Head>
      <main className="bg-white py-16">
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/privacy.jpg"
            alt="Mystikopaixnidi Hero"
            fill
            className="object-cover brightness-75"
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Πολιτική Απορρήτου
          </motion.h1>
        </section>

        <div className="max-w-4xl mx-auto px-6 mt-16 space-y-16">
          <motion.div
            className="prose prose-lg text-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <p>
              Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο το <strong>mystikopaixnidi.gr</strong> συλλέγει, χρησιμοποιεί,
              διατηρεί και προστατεύει τα προσωπικά δεδομένα των επισκεπτών του, σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων
              (GDPR) και την ισχύουσα ελληνική νομοθεσία.
            </p>
          </motion.div>

          <motion.section
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Τι δεδομένα συλλέγουμε:</h2>
              <ul className="space-y-3">
                {[
                  'Πληροφορίες επικοινωνίας (αν τις εισάγετε)',
                  'Cookies και ανώνυμα στατιστικά χρήσης',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Πώς χρησιμοποιούνται:</h2>
              <ul className="space-y-3">
                {[
                  'Για απάντηση σε αιτήματα ή σχόλια',
                  'Για βελτίωση της εμπειρίας χρήστη',
                  'Για ανάλυση επισκεψιμότητας (μέσω cookies)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            className="bg-gray-50 rounded-xl p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Τα δικαιώματά σας:</h2>
            <ul className="space-y-3">
              {[
                'Πρόσβαση, διόρθωση, διαγραφή ή περιορισμός των προσωπικών σας στοιχείων',
                'Ανάκληση συγκατάθεσης',
                'Υποβολή αιτήματος στο email: privacy@mystikopaixnidi.gr',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              Για αναλυτική πολιτική ή για να μάθετε πώς να διαχειρίζεστε τα cookies, επισκεφθείτε την πλήρη έκδοση της σελίδας μας ή
              επικοινωνήστε μαζί μας.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
}
