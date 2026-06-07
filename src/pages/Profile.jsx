import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/login');
          return;
        }

       const response = await fetch(`${API_URL}/profile`, {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Запрос не дошёл');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Профиль</p>
          <h1 className="mt-3 text-5xl font-black text-white">Это вы</h1>

          {loading ? (
            <p className="mt-8 text-white/70">Загрузка...</p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
              <div className="rounded-3xl border border-white/10 bg-black p-6">
                <p className="text-sm text-white/50">Имя</p>
                <p className="mt-2 text-3xl font-bold text-white">{user?.username}</p>
                <p className="mt-6 text-sm text-white/50">Email</p>
                <p className="mt-2 text-xl text-white">{user?.email}</p>
                {error && <p className="mt-6 text-red-300">{error}</p>}
              </div>

              <button onClick={logout} className="rounded-2xl border border-red-500/40 px-6 py-4 text-lg font-semibold text-red-300 transition hover:bg-red-500/10">
                Выйти
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
