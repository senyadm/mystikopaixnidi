"use client";

import Image from "next/image";
import { casinos } from "@/constants/casinos";
import { notFound } from "next/navigation";
import Head from "next/head";
import React from "react";
import {
  Gift,
  CreditCard,
  ArrowUpCircle,
  ArrowDownCircle,
  CalendarClock,
  MessageCircle,
  Mail,
  Phone,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Получаем данные казино по slug
const casino = casinos.find((c) => c.slug === "abuking");

export default function AbuKingPage() {
  if (!casino) notFound();
  const { name, logo, rating, url, slug } = casino;

  const bonuses = [
    {
      type: "Μπόνους Καλωσορίσματος",
      desc: "100% έως €500 + 200 Δωρεάν Περιστροφές + 1 Bonus Crab στην πρώτη κατάθεση",
      minDep: "€20",
      wager: "35x (μπόνους + κατάθεση)",
      limit: "Μέγιστο ποντάρισμα €5 ανά γύρο",
    },
    {
      type: "Μπόνους Επαναφόρτωσης Σαββατοκύριακου",
      desc: "50% έως €700 + 50 Δωρεάν Περιστροφές",
      minDep: "€20",
      wager: "35x (μπόνους + κατάθεση)",
      limit: "Μέγιστο ποντάρισμα €5 ανά γύρο",
    },
    {
      type: "Εβδομαδιαίο Cashback",
      desc: "15% έως €3.000 επιστροφή χρημάτων",
      minDep: "—",
      wager: "—",
      limit: "Διαθέσιμο για όλους τους παίκτες",
    },
    {
      type: "Live Casino Cashback",
      desc: "25% έως €200 επιστροφή χρημάτων για ζωντανά παιχνίδια καζίνο",
      minDep: "—",
      wager: "—",
      limit: "Διαθέσιμο για όλους τους παίκτες",
    },
  ];

  const popularGames = [
    { name: "Gates of Olympus", img: "gates-of-olympus" },
    { name: "Sweet Bonanza", img: "sweet-bonanza" },
    { name: "Book of Dead", img: "book-of-dead" },
    { name: "Big Bass Bonanza", img: "big-bass-bonanza" },
    { name: "Joker Stoker", img: "joker-stoker" },
  ];

  const providers = [
    "NetEnt",
    "Evolution Gaming",
    "Pragmatic Play",
    "Play’n GO",
    "Microgaming",
    "Yggdrasil",
    "Red Tiger",
    "Quickspin",
    "και άλλοι",
  ];

  const paymentMethods = [
    { name: "Visa", img: "visa", deposit: true, withdraw: true },
    { name: "Mastercard", img: "mastercard", deposit: true, withdraw: true },
    { name: "Skrill", img: "skrill", deposit: true, withdraw: true },
    { name: "Neteller", img: "neteller", deposit: true, withdraw: true },
    { name: "Paysafecard", img: "paysafecard", deposit: true, withdraw: false },
    {
      name: "Τραπεζικό Έμβασμα",
      img: "bank-transfer",
      deposit: true,
      withdraw: true,
    },
    { name: "Bitcoin", img: "bitcoin", deposit: true, withdraw: true },
    { name: "Ethereum", img: "ethereum", deposit: true, withdraw: true },
    { name: "Litecoin", img: "litecoin", deposit: true, withdraw: true },
    { name: "Tether (USDT)", img: "tether", deposit: true, withdraw: true },
    { name: "Revolut", img: "revolut", deposit: true, withdraw: true },
    { name: "MiFinity", img: "mifinity", deposit: true, withdraw: true },
  ];

  const transactionLimits = [
    {
      title: "Ελάχιστη Κατάθεση",
      value: "€10",
      icon: CreditCard,
    },
    {
      title: "Ελάχιστη Ανάληψη",
      value: "€10",
      icon: ArrowUpCircle,
    },
    {
      title: "Μέγιστη Ανάληψη",
      value: "€500/ημέρα, €7.000/μήνα (VIP 1) έως €20.000/μήνα (VIP 5)",
      icon: ArrowDownCircle,
    },
    {
      title: "Χρόνος Ανάληψης",
      value:
        "Έως 24 ώρες για κρυπτονομίσματα & e-wallets\n3-7 εργάσιμες ημέρες για τραπεζικά εμβάσματα & κάρτες",
      icon: CalendarClock,
    },
  ];

  const supportChannels = [
    { name: "Ζωντανή Συνομιλία", icon: MessageCircle, info: "24/7" },
    { name: "Email", icon: Mail, info: "✅" },
    { name: "Τηλεφωνική Υποστήριξη", icon: Phone, info: "❌" },
  ];

  const prosCons = [
    { type: "pro", text: "Μεγάλη ποικιλία παιχνιδιών (11.000+ τίτλοι)" },
    {
      type: "con",
      text: "Άδεια από την Anjouan, λιγότερο αυστηρή από ευρωπαϊκές ρυθμιστικές αρχές",
    },
    {
      type: "pro",
      text: "Ελκυστικά μπόνους καλωσορίσματος και τακτικές προσφορές",
    },
    { type: "con", text: "Περιορισμοί σε ορισμένες χώρες" },
    { type: "pro", text: "Υποστήριξη κρυπτονομισμάτων" },
    { type: "con", text: "Δεν υπάρχει τηλεφωνική υποστήριξη" },
    { type: "pro", text: "Ζωντανή υποστήριξη 24/7" },
    {
      type: "con",
      text: "Μέγιστο ποντάρισμα €5 ανά γύρο για μπόνους προσφορές",
    },
  ];

  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;
  const [animateStars, setAnimateStars] = React.useState(false);

  React.useEffect(() => {
    setAnimateStars(true);
  }, []);

  return (
    <>
      <Head>
        {/* Основные метатеги */}
        <title>
          {name} Casino – Κορυφαίο Online Καζίνο 2025 | 100% Μπόνους έως €500 &
          200 Δωρεάν Περιστροφές
        </title>
        <meta
          name="description"
          content="Ανακαλύψτε το AbuKing Casino στο MystikoPaixnidi.gr: άδεια Anjouan, 100% μπόνους καλωσορίσματος έως €500 + 200 δωρεάν περιστροφές, 11.000+ παιχνίδια και υποστήριξη κρυπτονομισμάτων."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://mystikopaixnidi.gr/casinos/${slug}`}
        />

        {/* Open Graph (Facebook, κ.λπ.) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MystikoPaixnidi.gr" />
        <meta
          property="og:title"
          content={`${name} Casino – 100% Μπόνους έως €500 & 200 Δωρεάν Περιστροφές`}
        />
        <meta
          property="og:description"
          content="Παίξτε στο AbuKing Casino: άδεια Anjouan, ελκυστικά μπόνους, 11.000+ τίτλοι και υποστήριξη κρυπτονομισμάτων."
        />
        <meta
          property="og:url"
          content={`https://mystikopaixnidi.gr/casinos/${slug}`}
        />
        <meta
          property="og:image"
          content={`https://mystikopaixnidi.gr${logo}`}
        />
        <meta property="og:image:alt" content={`${name} Logo`} />

        {/* Responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          // prettier-ignore
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Casino",
              "name": name,
              "url": `https://mystikopaixnidi.gr/casinos/${slug}`,
              "logo": `https://mystikopaixnidi.gr${logo}`,
              "image": `https://mystikopaixnidi.gr${logo}`,
              "description":
                "AbuKing Casino – άδεια Anjouan, 100% μπόνους έως €500 + 200 δωρεάν περιστροφές, 11.000+ παιχνίδια, υποστήριξη κρυπτονομισμάτων.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": rating.toFixed(1),
                "reviewCount": 128
              },
              "offers": {
                "@type": "Offer",
                "name": "Μπόνους Καλωσορίσματος",
                "description": "100% έως €500 + 200 Δωρεάν Περιστροφές",
                "url": `https://mystikopaixnidi.gr/casinos/${slug}#bonuses`
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Νησί Anjouan"
              }
            })
          }}
        />
      </Head>
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white text-gray-900 rounded-2xl shadow p-8">
          {/* Header */}
          <header className="text-center mb-8">
            <Image
              src={logo}
              alt={name}
              width={240}
              height={80}
              className="mx-auto"
            />
            <h1 className="mt-4 text-4xl font-bold text-[#5f99b8]">{name}</h1>
            <div className="flex items-center justify-center space-x-1 mt-4">
              {Array.from({ length: 5 }).map((_, idx) => {
                const isFull = idx < fullStars;
                const isPartial = idx === fullStars && fraction > 0;
                const target = isFull ? 100 : isPartial ? fraction * 100 : 0;

                return (
                  <span key={idx} className="relative w-7 h-7">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="absolute inset-0 w-7 h-7 text-gray-300"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                    {(isFull || isPartial) && (
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          width: animateStars ? `${target}%` : "0%",
                          transition: `width 0.5s ease-out ${idx * 200}ms`,
                        }}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-7 h-7 text-yellow-500"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                        </svg>
                      </div>
                    )}
                  </span>
                );
              })}
            </div>
          </header>

          {/* Description */}
          <section className="py-0 bg-white">
            <div className="max-w-5xl mx-auto p-4">
              <p className="text-gray-800 leading-relaxed text-center text-xl tracking-wide">
                Το <span className="font-semibold">AbuKing Casino</span>{" "}
                ιδρύθηκε το 2025 και λειτουργεί με άδεια από την{" "}
                <span className="font-medium">Anjouan Gaming Authority</span>{" "}
                (Αρ. Άδειας: ALSI-152406028-FI2). Ανήκει στην εταιρεία{" "}
                <span className="font-medium">NovaForge Ltd</span> και προσφέρει
                μια ευρεία γκάμα παιχνιδιών, ελκυστικά μπόνους και ευέλικτες
                επιλογές πληρωμής, συμπεριλαμβανομένων των κρυπτονομισμάτων. Η
                πλατφόρμα είναι πλήρως βελτιστοποιημένη για κινητά, επιτρέποντας
                στους παίκτες να απολαμβάνουν τα αγαπημένα τους παιχνίδια εν
                κινήσει.
              </p>
            </div>
          </section>

          {/* Bonuses */}
          <section className="mb-12 mt-8">
            <h2 className="text-4xl font-semibold mb-6 flex items-center justify-center gap-2 text-gray-800">
              🎁 Μπόνους και Προσφορές
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#5f99b8] shadow-lg">
              <table className="min-w-full text-md text-left">
                <thead className="bg-[#5f99b8] text-white">
                  <tr>
                    <th className="px-6 py-3 font-medium">Τύπος Μπόνους</th>
                    <th className="px-6 py-3 font-medium">Περιγραφή</th>
                    <th className="px-6 py-3 font-medium">Ελάχιστη Κατάθεση</th>
                    <th className="px-6 py-3 font-medium">
                      Απαίτηση Στοιχηματισμού
                    </th>
                    <th className="px-6 py-3 font-medium">Περιορισμοί</th>
                  </tr>
                </thead>
                <tbody>
                  {bonuses.map((b, idx) => (
                    <tr
                      key={b.type}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-[#5f99b8]/10"
                          : "bg-gray-50 hover:bg-[#5f99b8]/10"
                      }
                    >
                      <td className="px-6 py-4 font-semibold flex items-center gap-2 text-gray-800">
                        <Gift className="w-5 h-5 text-[#5f99b8]" /> {b.type}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{b.desc}</td>
                      <td className="px-6 py-4 text-gray-600">{b.minDep}</td>
                      <td className="px-6 py-4 text-gray-600">{b.wager}</td>
                      <td className="px-6 py-4 text-gray-600">{b.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Games & Providers */}
          <section
            className="py-16 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #5f99b8 0%, #4a85a2 100%)",
            }}
          >
            <div className="container mx-auto px-6 lg:px-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-white mb-4">
                  🎮 Παιχνίδια και Πάροχοι
                </h2>
                <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                  Πάνω από <span className="font-semibold">11.000 τίτλοι</span>,
                  συμπεριλαμβανομένων κουλοχέρηδων, επιτραπέζιων παιχνιδιών,
                  ζωντανού καζίνο και αθλητικού στοιχήματος
                </p>
              </div>
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Δημοφιλή Παιχνίδια
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                  {popularGames.map((game) => (
                    <div
                      key={game.img}
                      className="flex flex-col h-full bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={`/games/${game.img}.png`}
                          alt={game.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-5 flex-1 flex items-center justify-center">
                        <span className="font-semibold text-gray-700 text-lg text-center">
                          {game.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Πάροχοι Λογισμικού
                </h3>
                <div className="flex flex-wrap gap-4">
                  {providers.map((provider) => (
                    <span
                      key={provider}
                      className="bg-white text-gray-700 px-5 py-2 rounded-full shadow-md whitespace-nowrap"
                    >
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800">
                  💳 Μέθοδοι Πληρωμής
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-md">
                  <thead>
                    <tr className="bg-[#5f99b8] text-white">
                      <th className="py-4 px-6 text-left">Μέθοδος</th>
                      <th className="py-4 px-6 text-center">Καταθέσεις</th>
                      <th className="py-4 px-6 text-center">Αναλήψεις</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentMethods.map((method) => (
                      <tr
                        key={method.img}
                        className="border-b last:border-none hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-6 flex items-center">
                          <Image
                            src={`/payments/${method.img}.png`}
                            alt={method.name}
                            width={32}
                            height={32}
                            className="mr-4"
                          />
                          <span className="font-medium text-gray-700">
                            {method.name}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          {method.deposit ? (
                            <span className="text-green-500 text-xl">✓</span>
                          ) : (
                            <span className="text-red-500 text-xl">✗</span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {method.withdraw ? (
                            <span className="text-green-500 text-xl">✓</span>
                          ) : (
                            <span className="text-red-500 text-xl">✗</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Transaction Limits */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800">
                  📈 Όρια και Χρόνοι Συναλλαγών
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {transactionLimits.map(({ title, value, icon: Icon }) => (
                  <div
                    key={title}
                    className="flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-6 text-center"
                  >
                    <Icon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-lg font-medium text-gray-800 mb-2 whitespace-pre-line">
                      {title}
                    </h3>
                    <p className="text-xl font-bold text-gray-900 whitespace-pre-line">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support */}
          <section
            className="py-16 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #f0f4f8 0%, #5f99b8 100%)",
            }}
          >
            <div className="container mx-auto px-6 lg:px-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                  📞 Υποστήριξη Πελατών
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Επιλέξτε τον τρόπο επικοινωνίας που σας εξυπηρετεί καλύτερα.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {supportChannels.map(({ name, icon: Icon, info }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
                  >
                    <Icon className="w-16 h-16 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {name}
                    </h3>
                    <p className="text-gray-600">{info}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="py-16 bg-gradient-to-r from-green-50 to-red-50 rounded-3xl">
            <div className="container mx-auto px-6 lg:px-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                  ⚠️ Πλεονεκτήματα και Μειονεκτήματα
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Μια συνοπτική επισκόπηση των δυνατών σημείων και των
                  περιορισμών της πλατφόρμας.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {prosCons.map(({ type, text }) => {
                  const Icon = type === "pro" ? CheckCircle : XCircle;
                  const color =
                    type === "pro" ? "text-green-500" : "text-red-500";
                  return (
                    <div
                      key={text}
                      className="flex items-start bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105"
                    >
                      <Icon className={`${color} w-8 h-8 flex-shrink-0 mr-4`} />
                      <p className="text-gray-800 font-medium">{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Play Now Button */}
          <div className="text-center mt-8">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform"
            >
              Παίξτε τώρα
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
