import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Delivery = () => (
  <div className="min-h-screen bg-zinc-950">
    <Header />
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Доставка</p>
        <h1 className="mt-3 text-5xl font-black text-white">Условия доставки</h1>
        <div className="mt-8 space-y-4 text-white/75">
          <p>Доставка по Москве и области осуществляется по согласованию с менеджером.</p>
          <p>По России отправляем транспортными компаниями после подтверждения заказа.</p>
          <p>Сроки зависят от наличия модели и адреса доставки.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Delivery;
