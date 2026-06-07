import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
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

  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">Contacts</h3>
          <p className="text-white/70">Телефон: +7 (999) 000-00-00</p>
          <p className="text-white/70">Email: info@smart-gym.ru</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">Navigation</h3>
          <div className="flex flex-col gap-2">
            <button onClick={() => go('/')} className="text-left text-white/70 transition hover:text-emerald-400">Home</button>
            <button onClick={() => go('/catalog/silovye')} className="text-left text-white/70 transition hover:text-emerald-400">Catalog</button>
            <button onClick={() => go('/profile')} className="text-left text-white/70 transition hover:text-emerald-400">Profile</button>
            <button onClick={() => go('/payment-terms')} className="text-left text-white/70 transition hover:text-emerald-400">Payment terms</button>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">Social Media</h3>
          <p className="text-white/70">Telegram</p>
          <p className="text-white/70">VK</p>
          <p className="text-white/70">YouTube</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
