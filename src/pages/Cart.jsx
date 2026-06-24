import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Добавляем URL бэкенда (так же, как у тебя сделано в AdminPanel)
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const Cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  // ИСПРАВЛЕНО: Теперь учитывается количество товара (quantity) при подсчете суммы
  const total = cart.reduce((sum, item) => {
    const cleanPrice = Number(item.price.toString().replaceAll(' ', ''));
    return sum + (cleanPrice * item.quantity);
  }, 0);

  // ИСПРАВЛЕНО: Функция теперь отправляет данные на сервер
// Добавляем слово async вот сюда:
const order = async () => { 
  const token = localStorage.getItem('token');
  if (!token) {
    setShowAlert(true);
    return;
  }
  
  // Теперь await внутри функции будет работать абсолютно законно!
  const response = await fetch(`${API_URL}/orders/`, { 
    method: 'POST',
    // ... твой код запроса
  });

  navigate('/thank-you');
};
    try {
      const response = await fetch(`${API_URL}/orders/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
        body: JSON.stringify({ cart: cart }),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        const errorData = await response.json();
        alert(errorData.detail || 'Не удалось оформить заказ');
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      alert('Ошибка соединения с сервером');
    }
  };

    // Формируем структуру данных, которую ожидает наш бэкенд
    const orderData = {
      total_price: total,
      items: cart.map(item => ({
        product_name: item.name,
        quantity: item.quantity,
        price: Number(item.price.toString().replaceAll(' ', ''))
      }))
    };

    try {
      const response = await fetch(`${API_URL}/orders/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`, // Передаем токен для авторизации
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        // Если сервер успешно сохранил заказ, перенаправляем на страницу "Спасибо"
        navigate('/thank-you');
      } else {
        const errorData = await response.json();
        alert('Не удалось оформить заказ. Ошибка сервера.');
        print(errorData);
      }
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      alert('Ошибка сети. Проверьте соединение с сервером.');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Корзина</p>
              <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">Здесь будут ваши товары</h1>
            </div>
            <Link to="/catalog/silovye" className="text-white/70 transition hover:text-emerald-400">
              Вернуться к каталогу
            </Link>
          </div>

          <div className="mt-10 space-y-4">
            {cart.length === 0 && (
              <div className="rounded-3xl border border-dashed border-white/15 p-8 text-center text-white/60">
                Корзина пока пустая
              </div>
            )}

            {cart.map((item) => (
              <div key={item.id} className="grid gap-4 rounded-3xl border border-white/10 bg-black p-4 md:grid-cols-[120px_1fr_auto_auto] md:items-center">
                <img src={item.image} alt={item.name} className="h-28 w-full object-contain" />
                <div>
                  <h2 className="text-2xl font-bold text-white">{item.name}</h2>
                  <p className="mt-2 text-white/60">{item.price} ₽</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900 text-xl text-white transition hover:border-emerald-400"
                  >
                    −
                  </button>

                  <span className="w-8 text-center text-lg font-bold text-white">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-bold text-black transition hover:scale-105"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold text-white">x{item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} className="rounded-2xl border border-red-500/40 px-4 py-2 text-red-300 transition hover:bg-red-500/10">
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-2xl font-black text-white">Итого: {total.toLocaleString('ru-RU')} ₽</p>
            <button onClick={order} className="rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
              Оформить заказ
            </button>
          </div>

          {showAlert && (
            <div className="mt-6 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6">
              <p className="text-white">Для оформления заказа необходимо войти в аккаунт.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/login" className="rounded-2xl bg-emerald-400 px-5 py-2 font-semibold text-black">
                  Войти
                </Link>
                <button onClick={() => setShowAlert(false)} className="rounded-2xl border border-white/15 px-5 py-2 text-white">
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );

export default Cart;