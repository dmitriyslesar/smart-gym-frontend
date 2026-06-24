import { useEffect, useState } from 'react';

const Cookies = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2 rounded-3xl border border-white/10 bg-zinc-900/95 p-6 shadow-2xl backdrop-blur">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">
            Использование файлов cookie
          </h3>

          <p className="mt-2 text-sm leading-6 text-white/70">
            Сайт Smart Gym использует файлы cookie для улучшения работы,
            повышения удобства пользователей и анализа посещаемости.
            Продолжая использовать сайт, вы соглашаетесь с обработкой данных.
          </p>
        </div>

        <button
          onClick={acceptCookies}
          className="rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          Принять
        </button>
      </div>
    </div>
  );
};

export default Cookies;