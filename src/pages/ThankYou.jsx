import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ThankYou = ({ clearCart }) => {
  useEffect(() => {
    if (typeof clearCart === 'function') {
      clearCart();
    }
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <main className="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Спасибо</p>
          <h1 className="mt-3 text-5xl font-black text-white">Спасибо за покупку!</h1>
          <p className="mt-6 text-white/70">Заказ оформлен. Мы скоро свяжемся с вами.</p>
          <Link to="/" className="mt-10 inline-flex rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-black">
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
