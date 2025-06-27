"use client";

import Head from "next/head";
import Image from "next/image";
import { casinos } from "@/constants/casinos";
import { notFound } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  Gift,
  CreditCard,
  ArrowUpCircle,
  ArrowDownCircle,
  CalendarClock,
  MessageCircle,
  Mail,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Получаем данные казино по slug
const casino = casinos.find((c) => c.slug === "romibet");

export default function RomibetPage() {
  if (!casino) notFound();
  const { name, logo, rating, url } = casino;

  const bonuses = [
    {
      type: "Μπόνους Καλωσορίσματος",
      desc: "100% έως €500 + 100 Δωρεάν Περιστροφές στην πρώτη κατάθεση",
      minDep: "€20",
      wager: "40x (μπόνους)",
      limit: "Μέγιστο ποντάρισμα €5 ανά γύρο",
    },
    {
      type: "Μπόνους 2ης Κατάθεσης",
      desc: "80% έως €1.500 + 75 Δωρεάν Περιστροφές",
      minDep: "€20",
      wager: "40x (μπόνους)",
      limit: "Μέγιστο ποντάρισμα €5 ανά γύρο",
    },
    {
      type: "Μπόνους 3ης Κατάθεσης",
      desc: "70% έως €2.000",
      minDep: "€20",
      wager: "40x (μπόνους)",
      limit: "Μέγιστο ποντάρισμα €5 ανά γύρο",
    },
    {
      type: "Μπόνους Υψηλού Παικτών",
      desc: "125% έως €3.000 + 125 Δωρεάν Περιστροφές για καταθέσεις άνω των €300",
      minDep: "€300",
      wager: "40x (μπόνους)",
      limit: "Διαθέσιμο μόνο για υψηλούς παίκτες",
    },
  ];

  const gameCategories = [
    {
      title: "Κουλοχέρηδες",
      desc: "Χιλιάδες τίτλοι με Megaways, Bonus Buy και κλασικά φρουτάκια",
      img: "/slots.png",
    },
    {
      title: "Live Casino",
      desc: "Ρουλέτα, Μπλακτζάκ, Baccarat, Game Shows από Evolution & Pragmatic Live",
      img: "/live-casino.png",
    },
    {
      title: "Επιτραπέζια",
      desc: "RNG εκδόσεις με πολλαπλά όρια πονταρίσματος",
      img: "/table-games.png",
    },
    {
      title: "Αθλητικό Στοίχημα",
      desc: "Πλήρης πλατφόρμα pre-match & live με cashout και combo boosts",
      img: "/sports-betting.png",
    },
  ];

  const paymentMethods = [
    { name: "Visa", key: "visa", deposit: true, withdraw: true },
    { name: "Mastercard", key: "mastercard", deposit: true, withdraw: true },
    { name: "Skrill", key: "skrill", deposit: true, withdraw: true },
    { name: "Neteller", key: "neteller", deposit: true, withdraw: true },
    { name: "Paysafecard", key: "paysafecard", deposit: true, withdraw: false },
    {
      name: "Τραπεζικό Έμβασμα",
      key: "bank-transfer",
      deposit: true,
      withdraw: true,
    },
    { name: "Bitcoin", key: "bitcoin", deposit: true, withdraw: true },
    { name: "Ethereum", key: "ethereum", deposit: true, withdraw: true },
    { name: "Litecoin", key: "litecoin", deposit: true, withdraw: true },
    { name: "Tether (USDT)", key: "tether", deposit: true, withdraw: true },
    { name: "Revolut", key: "revolut", deposit: true, withdraw: true },
    { name: "MiFinity", key: "mifinity", deposit: true, withdraw: true },
  ];

  const transactionLimits = [
    {
      title: "Ελάχιστη Κατάθεση",
      value: "€20",
      icon: CreditCard,
    },
    {
      title: "Ελάχιστη Ανάληψη",
      value: "€20",
      icon: ArrowUpCircle,
    },
    {
      title: "Μέγιστη Ανάληψη",
      value: "€10.000/ημέρα, €50.000/μήνα",
      icon: ArrowDownCircle,
    },
    {
      title: "Χρόνος Ανάληψης",
      value: "Έως 3 εργάσιμες ημέρες",
      icon: CalendarClock,
    },
  ];

  const supportChannels = [
    { name: "Ζωντανή Συνομιλία", icon: MessageCircle, info: "24/7" },
    { name: "Email", icon: Mail, info: "—" },
  ];

  const prosCons = [
    { type: "pro", text: "Πάνω από 12.500 παιχνίδια από 110+ παρόχους" },
    { type: "con", text: "Δεν διαθέτει ευρωπαϊκή άδεια" },
    {
      type: "pro",
      text: "Ελκυστικό πακέτο καλωσορίσματος και εβδομαδιαίες προσφορές",
    },
    { type: "con", text: "Περιορισμένος χρόνος για wagering (10 ημέρες)" },
    { type: "pro", text: "Υποστήριξη πολλών μεθόδων πληρωμής και crypto" },
    { type: "con", text: "Δεν υποστηρίζει αναλήψεις με Paysafecard" },
    { type: "pro", text: "Υψηλά όρια ανάληψης και γρήγορες συναλλαγές" },
    { type: "con", text: "Ορισμένα μπόνους απαιτούν αίτημα μέσω chat/email" },
  ];

  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;
  const [animateStars, setAnimateStars] = useState(false);

  useEffect(() => {
    setAnimateStars(true);
  }, []);

  return (
    <>
      <Head>
        <title>{`MystikoPaixnidi.gr | ${name} Casino – Κορυφαίο Online Καζίνο`}</title>
        <meta
          name="description"
          content={`Ανακαλύψτε το ${name} Casino στο MystikoPaixnidi.gr: 100% έως €500 + 100 Δωρεάν Περιστροφές, αθλητικό μπόνους, VIP offers και ${rating} αστέρια αξιολόγηση.`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mystikopaixnidi.gr/romibet" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MystikoPaixnidi.gr" />
        <meta
          property="og:title"
          content={`MystikoPaixnidi.gr | ${name} Casino – Κορυφαίο Online Καζίνο`}
        />
        <meta
          property="og:description"
          content={`Παίξτε στο ${name} Casino με 100% έως €500 + 100 Δωρεάν Περιστροφές, μπόνους αθλητικού στοιχήματος και VIP offers.`}
        />
        <meta property="og:url" content="https://mystikopaixnidi.gr/romibet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <section className="text-center mb-8">
            <p className="text-gray-800 leading-relaxed text-xl">
              Το <span className="font-semibold">Romibet Casino</span> είναι μια
              νέα διαδικτυακή πλατφόρμα που ξεκίνησε το 2024. Προσφέρει ευρεία
              γκάμα παιχνιδιών, ελκυστικά μπόνους, ευέλικτες επιλογές πληρωμής —
              συμπεριλαμβανομένων κρυπτονομισμάτων — και φιλική προς κινητά
              σχεδίαση με VIP πρόγραμμα.
            </p>
          </section>

          {/* Bonuses */}
          <section className="mb-12">
            <h2 className="text-4xl font-semibold mb-6 text-center">
              🎁 Μπόνους και Προσφορές
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#5f99b8] shadow-lg">
              <table className="min-w-full text-left">
                <thead className="bg-[#5f99b8] text-white">
                  <tr>
                    <th className="px-6 py-3">Τύπος Μπόνους</th>
                    <th className="px-6 py-3">Περιγραφή</th>
                    <th className="px-6 py-3">Ελάχιστη Κατάθεση</th>
                    <th className="px-6 py-3">Απαίτηση Στοιχηματισμού</th>
                    <th className="px-6 py-3">Περιορισμοί</th>
                  </tr>
                </thead>
                <tbody>
                  {bonuses.map((b, idx) => (
                    <tr
                      key={b.type}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 flex items-center gap-2">
                        <Gift className="w-5 h-5 text-[#5f99b8]" /> {b.type}
                      </td>
                      <td className="px-6 py-4">{b.desc}</td>
                      <td className="px-6 py-4">{b.minDep}</td>
                      <td className="px-6 py-4">{b.wager}</td>
                      <td className="px-6 py-4">{b.limit}</td>
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
            <div className="container mx-auto px-6 lg:px-20 text-center text-white">
              <h2 className="text-4xl font-extrabold mb-4">
                🎮 Παιχνίδια και Πάροχοι
              </h2>
              <p className="text-lg mb-12">
                Πάνω από <span className="font-semibold">12.500 τίτλους</span>,
                με φίλτρα για εύκολη πλοήγηση.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {gameCategories.map((g) => (
                  <div
                    key={g.title}
                    className="bg-white rounded-lg p-6 shadow-md text-gray-800 flex flex-col items-center"
                  >
                    <div className="w-full h-40 relative mb-4">
                      <Image
                        src={g.img}
                        alt={g.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{g.title}</h3>
                    <p>{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-20">
              <h2 className="text-4xl font-extrabold text-center mb-12">
                💳 Μέθοδοι Πληρωμής
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl shadow-md">
                  <thead>
                    <tr className="bg-[#5f99b8] text-white">
                      <th className="py-4 px-6 text-left">Μέθοδος Πληρωμής</th>
                      <th className="py-4 px-6 text-center">Καταθέσεις</th>
                      <th className="py-4 px-6 text-center">Αναλήψεις</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentMethods.map((m) => (
                      <tr key={m.key} className="border-b last:border-none">
                        <td className="py-4 px-6 flex items-center">
                          <Image
                            src={`/payments/${m.key}.png`}
                            alt={m.name}
                            width={32}
                            height={32}
                            className="mr-4"
                          />
                          <span className="font-medium">{m.name}</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          {m.deposit ? <span>✓</span> : <span>✗</span>}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {m.withdraw ? <span>✓</span> : <span>✗</span>}
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
              <h2 className="text-4xl font-extrabold text-center mb-12">
                📈 Όρια και Χρόνοι Συναλλαγών
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {transactionLimits.map(({ title, value, icon: Icon }) => (
                  <div
                    key={title}
                    className="bg-gray-50 rounded-lg shadow-md p-6 text-center"
                  >
                    <Icon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-lg font-medium mb-2">{title}</h3>
                    <p className="text-xl font-bold">{value}</p>
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
            <div className="container mx-auto px-6 lg:px-20 text-center">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                📞 Υποστήριξη Πελατών
              </h2>
              <p className="text-gray-600 mb-12">
                24/7 live chat & email, με γρήγορη και επαγγελματική
                ανταπόκριση. VIP υποστήριξη διαθέσιμη.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {supportChannels.map(({ name, icon: Icon, info }) => (
                  <div
                    key={name}
                    className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4"
                  >
                    <Icon className="w-16 h-16 text-blue-500" />
                    <div>
                      <h3 className="text-xl font-semibold">{name}</h3>
                      <p className="text-gray-600">{info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="py-16 bg-gradient-to-r from-green-50 to-red-50 rounded-3xl">
            <div className="container mx-auto px-6 lg:px-20 text-center">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                ⚠️ Πλεονεκτήματα και Μειονεκτήματα
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {prosCons.map(({ type, text }) => {
                  const Icon = type === "pro" ? CheckCircle : XCircle;
                  const color =
                    type === "pro" ? "text-green-500" : "text-red-500";
                  return (
                    <div
                      key={text}
                      className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
                    >
                      <Icon className={`${color} w-8 h-8`} />
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
