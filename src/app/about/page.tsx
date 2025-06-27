"use client";
import Head from 'next/head';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  const siteUrl = 'https://mystikopaixnidi.gr';
  const pagePath = '/about';
  const fullUrl = siteUrl + pagePath;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Σχετικά με εμάς | Mystikopaixnidi</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Το mystikopaixnidi.gr προσφέρει αξιόπιστη, ποιοτική και διαφανή πληροφόρηση για online καζίνο στην Ελλάδα." />
        <meta name="keywords" content="online καζίνο, μπόνους, προσφορές, φρουτάκια, live καζίνο, επιτραπέζια παιχνίδια, υπεύθυνο παιχνίδι" />
        <meta name="author" content="Mystikopaixnidi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={fullUrl} />     

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Mystikopaixnidi",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              sameAs: [
                "https://facebook.com/mystikopaixnidi",
                "https://twitter.com/mystikopaixnidi",
                "https://instagram.com/mystikopaixnidi"
              ]
            }),
          }}
        />
      </Head>

      <main className="bg-gradient-to-b from-brand-light/10 to-white py-20">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/about-hero.png"
            alt="Mystikopaixnidi Hero"
            fill
            className="object-cover brightness-75"
          />
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white text-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Σχετικά με εμάς
          </motion.h1>
        </section>

        <div className="mx-auto max-w-5xl px-6 mt-12 space-y-20">
          {/* Intro */}
          <motion.div
            className="prose prose-lg mx-auto text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <p>
              Το mystikopaixnidi.gr είναι μια ανεξάρτητη ιστοσελίδα που δημιουργήθηκε για να
              προσφέρει αξιόπιστη, ποιοτική και διαφανή πληροφόρηση για το online καζίνο στην
              Ελλάδα. Παρουσιάζουμε με αξιοπιστία τα νόμιμα online καζίνο, προσφορές, μπόνους και
              οδηγούς για τους παίκτες που θέλουν να παίξουν με ασφάλεια και ενημέρωση.
            </p>
          </motion.div>

          {/* Sections Array */}
          {[
            {
              title: 'Η Αποστολή μας',
              image: '/images/mission.jpg',
              items: [
                'Αξιολογήσεις για πλατφόρμες που λειτουργούν νόμιμα με άδεια από την ΕΕΕΠ',
                'Αναλυτικούς οδηγούς για φρουτάκια, live καζίνο και επιτραπέζια παιχνίδια',
                'Συγκρίσεις μπόνους και προσφορών',
                'Συμβουλές για υπεύθυνο και ασφαλές παιχνίδι',
              ],
              reverse: false,
            },
            {
              title: 'Η Ομάδα μας',
              image: '/images/team.jpg',
              items: [
                'Την ποικιλία και ποιότητα των παιχνιδιών',
                'Τη διαφάνεια στους όρους και τις πληρωμές',
                'Την υποστήριξη πελατών σε ελληνική γλώσσα',
                'Τη χρηστικότητα της πλατφόρμας από κινητά και desktop',
              ],
              reverse: true,
            },
            {
              title: 'Τι Κάνουμε Διαφορετικά',
              image: '/images/difference.jpg',
              items: [
                'Στην αντικειμενική παρουσίαση κάθε καζίνο',
                'Στην τακτική ενημέρωση του περιεχομένου με βάση τις τελευταίες εξελίξεις',
                'Στην προστασία των παικτών, δίνοντας έμφαση σε brands που υποστηρίζουν υπεύθυνο παιχνίδι',
              ],
              reverse: false,
            },
          ].map(({ title, image, items, reverse }) => (
            <motion.section
              key={title}
              className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <div className="w-full md:w-1/2 shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 animate-pulse" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          ))}

          {/* Newsletter */}
          <motion.section
            className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <Image
              src="/logo.png"
              alt="Μείνετε Συντονισμένοι"
              width={500}
              height={200}
              className="rounded-lg mx-auto mb-6 shadow-inner overflow-hidden"
            />
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Μείνετε Συντονισμένοι</h2>
            <p className="text-gray-700 mb-6">
              Το Mystikopaixnidi.gr ανανεώνεται καθημερινά με προσφορές, νέα μπόνους, τουρνουά και
              οδηγοί παιχνιδιών. Αν θέλετε να είστε πάντα ένα βήμα μπροστά στον κόσμο των online
              casino, επιστρέφετε τακτικά στη σελίδα μας ή εγγραφείτε στο newsletter μας
              (σύντομα διαθέσιμο).
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
}
