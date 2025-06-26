"use client";

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
  Phone,
  CheckCircle,
  XCircle,
} from "lucide-react";

// Получаем данные казино по slug
const casino = casinos.find((c) => c.slug === "kinbet");

export default function KinbetPage() {
  if (!casino) notFound();
  const { name, logo, rating, url } = casino;

  const bonuses = [
    {
      type: "Μπόνους Καλωσορίσματος",
      desc: "250% έως €3.000 + 350 Δωρεάν Περιστροφές + 1 Bonus Crab, κατανεμημένο σε 4 καταθέσεις",
      minDep: "€20",
      wager: "35x (μπόνους + κατάθεση), 40x (δωρεάν περιστροφές)",
      limit: "Μη διαθέσιμο για καταθέσεις μέσω Skrill ή Neteller",
    },
    {
      type: "Μπόνους Αθλητικού Στοιχήματος",
      desc: "100% έως €100 στην πρώτη κατάθεση",
      minDep: "€20",
      wager: "6x (μπόνους + κατάθεση)",
      limit: "Ελάχιστη απόδοση 2.00 για μονά, 1.50 για παρολί",
    },
    {
      type: "Εβδομαδιαίο Cashback",
      desc: "15% έως €3.000 για VIP παίκτες",
      minDep: "-",
      wager: "1x πριν την ανάληψη",
      limit: "Διαθέσιμο μόνο για τα 3 ανώτατα επίπεδα VIP",
    },
    {
      type: "Live Cashback",
      desc: "25% έως €200",
      minDep: "-",
      wager: "1x πριν την ανάληψη",
      limit: "Ισχύει για ζωντανά παιχνίδια",
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
    { title: "Ελάχιστη Κατάθεση", value: "€20", icon: CreditCard },
    { title: "Ελάχιστη Ανάληψη", value: "€20", icon: ArrowUpCircle },
    { title: "Μέγιστη Ημερήσια Ανάληψη", value: "€500", icon: ArrowDownCircle },
    {
      title: "Μέγιστη Μηνιαία Ανάληψη",
      value: "€7.000",
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
    { name: "Email", icon: Mail, info: "✅" },
    { name: "Τηλεφωνική Υποστήριξη", icon: Phone, info: "❌" },
  ];

  const prosCons = [
    { type: "pro", text: "Πάνω από 10.000 παιχνίδια από κορυφαίους παρόχους" },
    { type: "pro", text: "Ελκυστικά μπόνους καλωσορίσματος και VIP cashback" },
    { type: "pro", text: "Υποστήριξη κρυπτονομισμάτων και Revolut" },
    { type: "pro", text: "Live chat 24/7 με υποστήριξη ελληνικών" },
    { type: "pro", text: "Ειδικά φίλτρα για ελληνικά αγαπημένα παιχνίδια" },
    { type: "con", text: "Χαμηλά όρια ανάληψης για high rollers" },
    { type: "con", text: "Δεν διαθέτει άδεια από ευρωπαϊκή ρυθμιστική αρχή" },
    { type: "con", text: "Περιορισμοί σε μπόνους για Skrill/Neteller" },
    { type: "con", text: "Αναφορές για καθυστερήσεις σε αναλήψεις" },
    { type: "con", text: "Έλλειψη τηλεφωνικής υποστήριξης" },
  ];

  const fullStars = Math.floor(rating);
  const fraction = rating - fullStars;
  const [animateStars, setAnimateStars] = useState(false);

  useEffect(() => {
    setAnimateStars(true);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="bg-white text-gray-900 rounded-2xl shadow p-8">
        {/* Header */}
        <header className="text-center mb-8 mt-8">
          <Image
            src={logo}
            alt={name}
            width={240}
            height={80}
            className="mx-auto"
          />
          <h1 className="mt-4 text-4xl font-bold text-[#5f99b8]">{name}</h1>
          <div className="flex items-center justify-center space-x-1 mt-8">
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
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97
    a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46
    a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118
    l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118
    l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81
    h4.18a1 1 0 00.95-.69l1.286-3.97z"
                    />
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
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97
    a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46
    a1 1 0 00-.364 1.118l1.287 3.97c.3.922-.755 1.688-1.54 1.118
    l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.196-1.54-1.118
    l1.287-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81
    h4.18a1 1 0 00.95-.69l1.286-3.97z"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              );
            })}
          </div>
        </header>

        {/* Description */}
        <section className="container mx-auto px-6 lg:px-20">
          <p className="text-gray-800 leading-relaxed text-xl">
            Το <span className="font-semibold">{name} Casino</span> ιδρύθηκε το
            2024 και λειτουργεί με άδεια από την{" "}
            <span className="font-medium">
              Anjouan Betting and Gaming Commission
            </span>
            , προσφέροντας πάνω από{" "}
            <span className="font-semibold">10.000 παιχνίδια</span>. Ασφαλείς
            συναλλαγές με κάρτες, ηλεκτρονικά πορτοφόλια και κρυπτονομίσματα, με
            24/7 υποστήριξη σε πολλαπλές γλώσσες, συμπεριλαμβανομένων των
            Ελληνικών.
          </p>
        </section>

        {/* Bonuses Section */}
        <section className="mb-12 mt-12">
          <h2 className="text-4xl font-semibold mb-6 text-center flex items-center justify-center gap-2 text-gray-800">
            🎁 Μπόνους και Προσφορές
          </h2>
          <div className="overflow-x-auto rounded-lg border border-[#5f99b8] shadow-lg">
            <table className="min-w-full text-md text-left">
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
                    className={
                      idx % 2 === 0
                        ? "bg-white hover:bg-[#5f99b8]/10"
                        : "bg-gray-50 hover:bg-[#5f99b8]/10"
                    }
                  >
                    <td className="px-6 py-4 flex items-center gap-2 font-semibold text-gray-800">
                      <Gift className="w-5 h-5 text-[#5f99b8]" />
                      {b.type}
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

        <section
          className="py-16 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #5f99b8 0%, #4a85a2 100%)",
          }}
        >
          <div className="container mx-auto px-6 lg:px-20 text-white">
            <h2 className="text-4xl font-extrabold mb-4 text-center">
              🎮 Παιχνίδια και Πάροχοι
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-blue-100 text-center mb-12">
              Πάνω από <span className="font-semibold">10.000 τίτλοι</span>,
              συμπεριλαμβανομένων κουλοχέρηδων, επιτραπέζιων παιχνιδιών,
              ζωντανού καζίνο και αθλητικού στοιχήματος
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              {popularGames.map((game) => (
                <div
                  key={game.img}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={`/games/${game.img}.png`}
                      alt={game.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <span className="font-semibold text-gray-700">
                      {game.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {providers.map((prov) => (
                <span
                  key={prov}
                  className="bg-white text-gray-700 px-5 py-2 rounded-full shadow-md"
                >
                  {prov}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
              💳 Μέθοδοι Πληρωμής
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl shadow-md">
                <thead className="bg-[#5f99b8] text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Μέθοδος</th>
                    <th className="py-4 px-6 text-center">Καταθέσεις</th>
                    <th className="py-4 px-6 text-center">Αναλήψεις</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentMethods.map((m) => (
                    <tr
                      key={m.img}
                      className="border-b last:border-none hover:bg-gray-50"
                    >
                      <td className="py-4 px-6 flex items-center gap-2">
                        <Image
                          src={`/payments/${m.img}.png`}
                          alt={m.name}
                          width={32}
                          height={32}
                        />
                        <span className="font-medium text-gray-700">
                          {m.name}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {m.deposit ? "✓" : "✗"}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {m.withdraw ? "✓" : "✗"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Transaction Limits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
              📈 Όρια και Χρόνοι Συναλλαγών
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {transactionLimits.map((t) => (
                <div
                  key={t.title}
                  className="bg-gray-50 rounded-lg shadow-md p-6 text-center"
                >
                  <t.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-medium text-gray-800 mb-2">{t.title}</h3>
                  <p className="font-bold text-gray-900">{t.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section
          className="py-16 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #f0f4f8 0%, #5f99b8 100%)",
          }}
        >
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-4xl font-extrabold mb-4">
              📞 Υποστήριξη Πελατών
            </h2>
            <p className="mb-12 text-gray-600">
              Είμαστε πάντα δίπλα σας! Επιλέξτε τον τρόπο επικοινωνίας που σας
              εξυπηρετεί καλύτερα.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {supportChannels.map((c) => (
                <div
                  key={c.name}
                  className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform"
                >
                  <c.icon className="w-16 h-16 text-blue-500 mb-4 mx-auto" />
                  <h3 className="font-semibold text-gray-800 mb-2">{c.name}</h3>
                  <p className="text-gray-600">{c.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pros & Cons Section */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-red-50 rounded-3xl">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              ⚠️ Πλεονεκτήματα και Μειονεκτήματα
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prosCons.map((p) => {
                const Icon = p.type === "pro" ? CheckCircle : XCircle;
                const color =
                  p.type === "pro" ? "text-green-500" : "text-red-500";
                return (
                  <div
                    key={p.text}
                    className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
                  >
                    <Icon className={`${color} w-8 h-8`} />
                    <span className="text-gray-800 font-medium">{p.text}</span>
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
  );
}
