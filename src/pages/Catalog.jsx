import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const catalogData = {
  power: {
    meta: {
      title: 'Силовые тренажёры',
      subtitle: 'Профессиональные машины для точной и безопасной работы с нагрузкой.',
    },
    products: [
      { id: 'tyaga-sverhu', name: 'Тяга сверху', price: '9 350 000', image: '/images/Тяга сверху.png' },
      { id: 'zhim-ot-plech', name: 'Жим от плеч', price: '9 650 000', image: '/images/Жим от плеч.png' },
      { id: 'razgibanie-nog', name: 'Разгибание ног', price: '8 950 000', image: '/images/разгибание ног.png' },
      { id: 'zhim-nogami', name: 'Жим ногами', price: '9 730 500', image: '/images/Жим ногами.png' },
    ],
  },
  cardio: {
    meta: {
      title: 'Кардио',
      subtitle: 'Беговые, гребные и велотренажёры для ежедневного режима работы.',
    },
    products: [
      { id: 'begovaya-dorozhka', name: 'Беговая дорожка', price: '3 100 000', image: '/images/беговая.png' },
      { id: 'velotrenazher', name: 'Велотренажер', price: '3 430 000', image: '/images/велосипед.png' },
      { id: 'grebnoy-trenazher', name: 'Гребной тренажер', price: '2 890 000', image: '/images/гребной.png' },
      { id: 'skalolaz', name: 'Скалолаз', price: '3 000 000', image: '/images/скалолаз.png' },
    ],
  },
  frames: {
    meta: {
      title: 'Силовые рамы',
      subtitle: 'Многостанционные комплексы для залов, студий и клубов.',
    },
    products: [
      { id: 'kachayushchiysya', name: 'Качающийся тренажер', price: '10 220 000', image: '/images/Качающийся тренер.png' },
      { id: 'troynoy', name: 'Тройной тренажер', price: '27 550 000', image: '/images/тройной тренажер.png' },
      { id: 'multi-trainer', name: 'Мульти-трейнер', price: '9 580 000', image: '/images/мульти-трейнер.png' },
    ],
  },
};

const Catalog = ({ category }) => {
  const navigate = useNavigate();
  const current = catalogData[category] || catalogData.power;

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Каталог</p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">{current.meta.title}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{current.meta.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => navigate('/catalog/silovye')} className="rounded-2xl border border-white/10 px-4 py-2 text-white transition hover:border-emerald-400 hover:text-emerald-400">
              Силовые
            </button>
            <button onClick={() => navigate('/catalog/cardio')} className="rounded-2xl border border-white/10 px-4 py-2 text-white transition hover:border-emerald-400 hover:text-emerald-400">
              Кардио
            </button>
            <button onClick={() => navigate('/catalog/ramy')} className="rounded-2xl border border-white/10 px-4 py-2 text-white transition hover:border-emerald-400 hover:text-emerald-400">
              Рамы
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {current.products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group rounded-[2rem] border border-white/10 bg-black p-5 transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <div className="flex items-center justify-center rounded-[1.5rem] bg-white/5 p-4">
                <img src={product.image} alt={product.name} className="h-60 w-full object-contain transition duration-300 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                  <p className="mt-2 text-white/60">Smart gym equipment</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-400">
                  {product.price} ₽
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
