"use client";
import Head from "next/head";
import Image from "next/image";
import { CheckCircle, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ResponsibleGamingPage() {
  return (
    <>
      <Head>
        <title>Υπεύθυνο Παιχνίδι | MystikoPaixnidi.gr</title>
        <meta
          name="description"
          content="Μάθετε τις αρχές, τα εργαλεία και τους φορείς υποστήριξης για υπεύθυνο παιχνίδι στο MystikoPaixnidi.gr – παίζετε πάντα με μέτρο."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://mystikopaixnidi.gr/responsible-gaming"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MystikoPaixnidi.gr" />
        <meta
          property="og:title"
          content="Υπεύθυνο Παιχνίδι | MystikoPaixnidi.gr"
        />
        <meta
          property="og:description"
          content="Ανακαλύψτε πώς να παίζετε με μέτρο, ποια εργαλεία αυτοπεριορισμού υπάρχουν και πού να απευθυνθείτε σε περίπτωση ανάγκης."
        />
        <meta
          property="og:url"
          content="https://mystikopaixnidi.gr/responsible-gaming"
        />
        <meta
          property="og:image"
          content="https://mystikopaixnidi.gr/og/responsible-gaming.png"
        />
        <meta
          property="og:image:alt"
          content="Υπεύθυνο Παιχνίδι στο MystikoPaixnidi.gr"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-gradient-to-b from-brand-light/10 to-white py-16">
        {/* Hero */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/responsible-gaming-hero.jpg"
            alt="Υπεύθυνο Παιχνίδι"
            fill
            className="object-cover brightness-75"
          />
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Υπεύθυνο Παιχνίδι
          </motion.h1>
        </section>

        <div className="mx-auto max-w-4xl px-6 mt-12 space-y-16">
          {/* Intro */}
          <motion.div
            className="prose prose-lg text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <p>
              Στο <strong>mystikopaixnidi.gr</strong> προωθούμε την αξία του
              υπεύθυνου παιχνιδιού. Ενθαρρύνουμε τους επισκέπτες μας να παίζουν
              με μέτρο, αυτοέλεγχο και απόλυτη επίγνωση.
            </p>
          </motion.div>

          {/* Core Principles */}
          <motion.section
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Βασικές Αρχές
            </h2>
            <ul className="space-y-3">
              {[
                "Το παιχνίδι είναι διασκέδαση, όχι πηγή εισοδήματος.",
                "Μην παίζετε για να καλύψετε απώλειες.",
                "Ορίστε όρια σε χρόνο και χρήμα προτού ξεκινήσετε.",
                "Αποφύγετε το παιχνίδι υπό πίεση ή επιρροή ουσιών.",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Tools */}
          <motion.section
            className="space-y-6 bg-gray-50 rounded-2xl p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Διαθέσιμα Εργαλεία
            </h2>
            <p className="text-gray-700">
              Όλες οι νόμιμες πλατφόρμες που προβάλλουμε παρέχουν:
            </p>
            <ul className="space-y-3">
              {[
                "Καθημερινά ή μηνιαία όρια κατάθεσης",
                "Υπενθυμίσεις χρόνου παιχνιδιού",
                "Επιλογές προσωρινής ή μόνιμης αυτο-αποκλεισμού",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Help Contacts */}
          <motion.section
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Χρειάζεστε Βοήθεια;
            </h2>
            <p className="text-gray-700">
              Εάν το παιχνίδι ξεφεύγει από τον έλεγχο, επικοινωνήστε με:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">
                  ΚΕΘΕΑ ΑΛΦΑ: <strong>210 9215776</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">
                  Γραμμή Στήριξης 1114 (ΕΕΕΠ) – Ανώνυμο &amp; Δωρεάν
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-500" />
                <a
                  href="https://www.kethea.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  www.kethea.gr
                </a>
              </li>
            </ul>
          </motion.section>
        </div>
      </main>
    </>
  );
}
