import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const go = (path) => {
    const token = localStorage.getItem('token');
    const protectedRoutes = ['/profile'];
    if (protectedRoutes.includes(path) && !token) {
      if (window.confirm('Войдите')) {
        navigate('/login');
      }
      return;
    }
    navigate(path);
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
    navigate('/');
  };

  const loggedIn = Boolean(localStorage.getItem('token'));

  return (
    <header className="border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => go('/')} className="text-2xl font-black tracking-[0.25em] text-white">
          SMART GYM
        </button>

        <nav className="flex flex-wrap items-center gap-3 text-sm sm:gap-6 sm:text-base">
          <button onClick={() => go('/catalog/silovye')} className="text-white/80 transition hover:text-emerald-400">Силовые</button>
          <button onClick={() => go('/catalog/cardio')} className="text-white/80 transition hover:text-emerald-400">Кардио</button>
          <button onClick={() => go('/catalog/ramy')} className="text-white/80 transition hover:text-emerald-400">Рамы</button>
          <button onClick={() => go('/cart')} className="text-white/80 transition hover:text-emerald-400">Корзина</button>
          {loggedIn ? (
            <>
              <button onClick={() => go('/profile')} className="text-white/80 transition hover:text-emerald-400">Профиль</button>
              <button onClick={logout} className="text-white transition hover:text-red-400">Выйти</button>
            </>
          ) : (
            <>
              <button onClick={() => go('/register')} className="text-white/80 transition hover:text-emerald-400">Рег</button>
              <button onClick={() => go('/login')} className="text-white/80 transition hover:text-emerald-400">Вход</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
