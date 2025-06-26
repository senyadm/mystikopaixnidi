// src/components/Hero.tsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-brand-light/30 py-10 text-center"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-600 mb-6">
          Τα Καλύτερα Online Καζίνο για το 2025 στην Ελλάδα
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-4 leading-snug">
          Ανακαλύψτε τα πιο αξιόπιστα και συναρπαστικά online καζίνο που δέχονται
          Έλληνες παίκτες το 2025. Συγκρίνετε άδειες, μπόνους καλωσορίσματος,
          επιλογές πληρωμής και live τραπέζια με Έλληνες ντίλερ.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-snug">
          Είτε είστε νέος παίκτης είτε έμπειρος, εδώ θα βρείτε το ιδανικό καζίνο
          για ασφαλές, νόμιμο και διασκεδαστικό παιχνίδι από τον υπολογιστή ή το
          κινητό σας.
        </p>
      </div>
    </section>
  );
}
