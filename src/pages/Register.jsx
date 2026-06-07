import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
const Register = () => {
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatError = (data) => {
    if (!data || typeof data !== 'object') {
      return 'Ошибка регистрации';
    }

    if (data.message || data.error) {
      return data.message || data.error;
    }

    return Object.values(data)
      .flat()
      .filter(Boolean)
      .join(' ');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors('');

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(formatError(data));
      }

      localStorage.setItem('token', data.token);
      navigate('/profile', { replace: true });
    } catch (error) {
      setErrors(error.message || 'Ошибка регистрации');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Создание аккаунта</p>
          <h1 className="mt-3 text-5xl font-black text-white">Регистрация</h1>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <input
              type="text"
              name="username"
              placeholder="ФИО"
              onChange={handleChange}
              value={formData.username}
              required
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-emerald-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-emerald-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={handleChange}
              value={formData.password}
              required
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-emerald-400"
            />

            {errors && <p className="text-red-300">{errors}</p>}

            <button className="w-full rounded-2xl bg-emerald-400 px-6 py-4 font-bold text-black transition hover:scale-[1.01]">
              Зарегистрироваться
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-4 text-white/70">
            <Link to="/login" className="transition hover:text-emerald-400">Уже есть аккаунт</Link>
            <Link to="/" className="transition hover:text-emerald-400">На главную</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
