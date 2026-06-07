import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PaymentTerms = () => (
  <div className="min-h-screen bg-zinc-950">
    <Header />
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Оплата</p>
        <h1 className="mt-3 text-5xl font-black text-white">Условия оплаты</h1>
        <ul className="mt-8 space-y-3 text-white/75">
          <li>Банковская карта: Visa, Mastercard, МИР.</li>
          <li>Безналичный расчёт для юридических лиц.</li>
          <li>Оплата проходит через защищённый платёжный шлюз.</li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default PaymentTerms;
