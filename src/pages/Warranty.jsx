import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Warranty = () => (
  <div className="min-h-screen bg-zinc-950">
    <Header />
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Гарантия</p>
        <h1 className="mt-3 text-5xl font-black text-white">Гарантийные обязательства</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-black p-6 text-white/75">Силовые тренажёры — 3 года</div>
          <div className="rounded-3xl border border-white/10 bg-black p-6 text-white/75">Кардио — 2 года</div>
          <div className="rounded-3xl border border-white/10 bg-black p-6 text-white/75">Электроника — 1 год</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Warranty;
