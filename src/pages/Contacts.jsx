import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Contacts = () => (
  <div className="min-h-screen bg-zinc-950">
    <Header />
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Контакты</p>
        <h1 className="mt-3 text-5xl font-black text-white">Связаться с нами</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-black p-6">
            <h2 className="text-2xl font-bold text-white">Телефон</h2>
            <p className="mt-3 text-white/70">+7 (999) 000-00-00</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black p-6">
            <h2 className="text-2xl font-bold text-white">Email</h2>
            <p className="mt-3 text-white/70">info@smart-gym.ru</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black p-6">
            <h2 className="text-2xl font-bold text-white">Адрес</h2>
            <p className="mt-3 text-white/70">Москва, Ленинградский проспект, 1</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contacts;
