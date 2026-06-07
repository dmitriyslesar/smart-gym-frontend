import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const featuredProducts = [
  { id: 'tyaga-sverhu', name: 'Тяга сверху', price: '9 350 000', image: '/images/Тяга сверху.png' },
  { id: 'begovaya-dorozhka', name: 'Беговая дорожка', price: '3 100 000', image: '/images/беговая.png' },
  { id: 'troynoy', name: 'Тройной тренажер', price: '27 550 000', image: '/images/тройной тренажер.png' },
];

const stats = [
  { label: 'Моделей', value: '11' },
  { label: 'Категорий', value: '3' },
  { label: 'Класс', value: 'Premium' },
  { label: 'Поддержка', value: '24/7' },
];

const Home = () => {
  const highlights = [
    {
      title: 'Силовые тренажёры',
      text: 'Точная механика, удобная регулировка и прочная рама для клуба и дома.',
      to: '/catalog/silovye',
    },
    {
      title: 'Кардио-линейка',
      text: 'Беговые дорожки, гребные и велотренажёры с понятным управлением.',
      to: '/catalog/cardio',
    },
    {
      title: 'Многостанционные рамы',
      text: 'Решения для комплексных тренировочных зон и профессиональных залов.',
      to: '/catalog/ramy',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-emerald-400">Smart fitness equipment</p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-8xl">
              УМНЫЕ ТРЕНАЖЁРЫ
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
              Лучшее оборудование, опережающее время
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/catalog/silovye" className="rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
                Открыть каталог
              </Link>
              <Link to="/register" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400">
                Создать аккаунт
              </Link>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Факты</p>
              <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Почему Smart Gym</h2>
            </div>
          </div>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-2xl">•🧠	Искусственный интеллект вместо тренера: Забудь про ручные крутилки и тумблеры. Умный алгоритм анализирует твой пульс, каденс и усталость в реальном времени, автоматически подстраивая нагрузку. Система понимает твой уровень физической подготовки и сама меняет угол наклона или сопротивление — она не даст тебе перегореть, но и схалтурить тоже не получится.</h2>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-2xl">•📊 Full-stack аналитика твоего тела: Твои тренировки превращаются в чистые, полезные данные. Тренажер по Bluetooth гонит всю телеметрию (мощность в ваттах, пульсовые зоны, скорость) в мобильное приложение или облако. Ты получаешь красивые, понятные дашборды и можешь отслеживать свой прогресс с абсолютной математической точностью.</h2>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-2xl">•⚙️ Топовое железо под капотом: Современные электромагнитные системы маховиков работают абсолютно бесшумно. Никакого писка, износа цепей или проскальзывания ремней. Электроника и контроллеры мотора здесь такие же надежные и тяговитые, как в мощном персональном электротранспорте — они без проблем вытягивают любые ударные нагрузки. Тренируйся без ограничений!</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {highlights.map((card, index) => (
              <Link
                key={card.title}
                to={card.to}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-lg font-black text-black">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-white/70">{card.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Каталог</p>
                <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl">Популярные позиции</h2>
              </div>
              <Link to="/catalog/cardio" className="text-white/70 transition hover:text-emerald-400">Смотреть все</Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group rounded-[2rem] border border-white/10 bg-black p-5 transition hover:-translate-y-1 hover:border-emerald-400/50"
                >
                  <div className="flex items-center justify-center rounded-[1.5rem] bg-white/5 p-4">
                    <img src={product.image} alt={product.name} className="h-64 w-full object-contain transition duration-300 group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-400">
                      {product.price} ₽
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
