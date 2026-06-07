import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const productCatalog = [
  { id: 'tyaga-sverhu', name: 'Тяга сверху', price: '9 350 000', image: '/images/Тяга сверху.png', backLink: '/catalog/silovye' },
  { id: 'zhim-ot-plech', name: 'Жим от плеч', price: '9 650 000', image: '/images/Жим от плеч.png', backLink: '/catalog/silovye' },
  { id: 'razgibanie-nog', name: 'Разгибание ног', price: '8 950 000', image: '/images/разгибание ног.png', backLink: '/catalog/silovye' },
  { id: 'zhim-nogami', name: 'Жим ногами', price: '9 730 500', image: '/images/Жим ногами.png', backLink: '/catalog/silovye' },
  { id: 'begovaya-dorozhka', name: 'Беговая дорожка', price: '3 100 000', image: '/images/беговая.png', backLink: '/catalog/cardio' },
  { id: 'velotrenazher', name: 'Велотренажер', price: '3 430 000', image: '/images/велосипед.png', backLink: '/catalog/cardio' },
  { id: 'grebnoy-trenazher', name: 'Гребной тренажер', price: '2 890 000', image: '/images/гребной.png', backLink: '/catalog/cardio' },
  { id: 'skalolaz', name: 'Скалолаз', price: '3 000 000', image: '/images/скалолаз.png', backLink: '/catalog/cardio' },
  { id: 'kachayushchiysya', name: 'Качающийся тренажер', price: '10 220 000', image: '/images/Качающийся тренер.png', backLink: '/catalog/ramy' },
  { id: 'troynoy', name: 'Тройной тренажер', price: '27 550 000', image: '/images/тройной тренажер.png', backLink: '/catalog/ramy' },
  { id: 'multi-trainer', name: 'Мульти-трейнер', price: '9 580 000', image: '/images/мульти-трейнер.png', backLink: '/catalog/ramy' },
];

const productDescriptions = {
  'tyaga-sverhu': {
    price: '9 350 000',
    sections: [
      { title: 'Универсальность', text: 'Сиденье имеет электрическую регулировку и может автоматически возвращаться в исходное положение, сохраняя персональные настройки пользователя.' },
      { title: 'Точность', text: 'Точность сопротивления 0.1 фунта (45 грамм).' },
      { title: 'Эффективность', text: 'Поддержка изотонического, эксцентрического и изокинетического режимов.' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '200' },
      { label: 'Длина товара, см', value: '160' },
      { label: 'Ширина товара, см', value: '110' },
      { label: 'Высота товара, см', value: '190' },
    ],
  },
  'zhim-ot-plech': {
    price: '9 650 000',
    sections: [
      { title: 'Универсальность', text: 'Настраиваемое сиденье и органы управления в рукоятках.' },
      { title: 'Точность', text: 'Точность сопротивления 0.1 фунта (45 грамм).' },
      { title: 'Эффективность', text: 'Поддержка нескольких режимов нагрузки для силовой тренировки.' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '200' },
      { label: 'Длина товара, см', value: '160' },
      { label: 'Ширина товара, см', value: '110' },
      { label: 'Высота товара, см', value: '190' },
    ],
  },
  'razgibanie-nog': {
    price: '8 950 000',
    sections: [
      { title: 'Удобство', text: 'Компактная конструкция и понятная механика регулировки.' },
      { title: 'Точность', text: 'Плавная смена нагрузки и стабильная траектория движения.' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '200' },
      { label: 'Вес товара, кг', value: '280' },
    ],
  },
  'zhim-nogami': {
    price: '9 730 500',
    sections: [
      { title: 'Комфорт', text: 'Подходит для интенсивной силовой подготовки и клубного использования.' },
      { title: 'Надёжность', text: 'Прочная рама и усиленный механизм движения.' },
    ],
    specs: [
      { label: 'Максимальная нагрузка, кг', value: '300' },
      { label: 'Вес товара, кг', value: '400' },
    ],
  },
  'begovaya-dorozhka': {
    price: '3 100 000',
    sections: [
      { title: 'Высококлассная конфигурация', text: 'Сенсорный дисплей 22 дюйма и широкое беговое полотно.' },
      { title: 'Высокая производительность', text: 'Плавная регулировка скорости и угла наклона.' },
      { title: 'Биологическая обратная связь', text: 'Показатели тренировки в реальном времени.' },
    ],
    specs: [
      { label: 'Макс. скорость, км/ч', value: '22' },
      { label: 'Угол наклона', value: '18' },
      { label: 'Количество программ, шт', value: '24' },
    ],
  },
  'velotrenazher': {
    price: '3 430 000',
    sections: [
      { title: 'Комфорт', text: 'Эргономичное сиденье и плавный ход.' },
      { title: 'Производительность', text: '20 уровней нагрузки для разных сценариев тренировок.' },
    ],
    specs: [
      { label: 'Уровней нагрузки', value: '20' },
      { label: 'Макс. вес пользователя, кг', value: '150' },
    ],
  },
  'grebnoy-trenazher': {
    price: '2 890 000',
    sections: [
      { title: 'Сопротивление', text: 'Плавная нагрузка для кардио и интервальных занятий.' },
    ],
    specs: [
      { label: 'Макс. вес пользователя, кг', value: '150' },
      { label: 'Длина товара, см', value: '220' },
    ],
  },
  'skalolaz': {
    price: '3 000 000',
    sections: [
      { title: 'Легко разбирается', text: 'Компактная конструкция и удобная сборка.' },
    ],
    specs: [
      { label: 'Макс. вес пользователя, кг', value: '130' },
      { label: 'Высота товара, см', value: '200' },
    ],
  },
  'kachayushchiysya': {
    price: '10 220 000',
    sections: [
      { title: 'Универсальность', text: 'Многофункциональный тренажёр для разных мышечных групп.' },
    ],
    specs: [
      { label: 'Макс. нагрузка, кг', value: '250' },
      { label: 'Количество станций', value: '3' },
    ],
  },
  'troynoy': {
    price: '27 550 000',
    sections: [
      { title: 'Многофункциональность', text: 'Три функциональных тренажёра в одном комплексе.' },
    ],
    specs: [
      { label: 'Макс. нагрузка, кг', value: '600' },
      { label: 'Количество станций', value: '3' },
    ],
  },
  'multi-trainer': {
    price: '9 580 000',
    sections: [
      { title: 'Универсальность', text: 'Большой набор упражнений и простая регулировка.' },
    ],
    specs: [
      { label: 'Макс. нагрузка, кг', value: '200' },
      { label: 'Количество упражнений', value: '50+' },
    ],
  },
};

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = productCatalog.find((item) => item.id === id);
  const description = productDescriptions[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-950">
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white">Товар не найден</h1>
          <Link to="/" className="mt-8 inline-flex rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-black">
            Вернуться на главную
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <Link to={product.backLink} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-emerald-400 hover:text-emerald-400">
                Назад
              </Link>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-400">
                {product.price} ₽
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black text-white sm:text-5xl">{product.name}</h1>
            <p className="mt-4 max-w-2xl text-white/70">
              {description?.sections?.[0]?.text || 'Сбалансированная модель для современного фитнес-зала.'}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {(description?.sections || []).map((section) => (
                <div key={section.title} className="rounded-3xl border border-white/10 bg-black p-5">
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  <p className="mt-3 text-white/70">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black p-5">
              <h2 className="text-2xl font-bold text-white">Основные характеристики</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(description?.specs || []).map((spec) => (
                  <div key={spec.label} className="rounded-2xl bg-white/5 p-4">
                    <p className="text-sm text-white/60">{spec.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-white/5 p-4">
              <img src={product.image} alt={product.name} className="h-[420px] w-full object-contain" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Цена</p>
                <p className="mt-2 text-3xl font-black text-white">{description?.price || product.price} ₽</p>
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="mt-8 w-full rounded-2xl bg-emerald-400 px-6 py-4 text-lg font-bold text-black transition hover:scale-[1.02]"
            >
              В корзину
            </button>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
