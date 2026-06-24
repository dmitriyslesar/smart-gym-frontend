import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');

 useEffect(() => {
    loadOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadOrders = async () => {
    try {
      const response = await fetch(`${API_URL}/orders/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Не удалось получить заказы');
      }

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/orders/delete/${id}/`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.ok) {
        setOrders((prev) =>
          prev.filter((order) => order.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-14">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">

          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
            Smart Gym
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            Панель администратора
          </h1>

          <div className="mt-10 space-y-6">

            {orders.length === 0 && (
              <div className="rounded-3xl border border-dashed border-white/10 p-10 text-center text-white/60">
                Заказы отсутствуют
              </div>
            )}

            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-3xl border border-white/10 bg-black p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:justify-between">

                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      Заказ №{order.id}
                    </h2>

                    <p className="mt-3 text-white/60">
                      {order.user_email}
                    </p>

                    <p className="mt-2 text-white/60">
                      {order.created_at}
                    </p>

                    <p className="mt-3 font-bold text-emerald-400">
                      {order.status}
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-black text-white">
                      {order.total_price.toLocaleString('ru-RU')} ₽
                    </p>
                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-zinc-900 p-5"
                    >
                      <h3 className="text-xl font-bold text-white">
                        {item.product_name}
                      </h3>

                      <p className="mt-2 text-white/60">
                        Количество: {item.quantity}
                      </p>

                      <p className="mt-2 text-emerald-400">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>
                  ))}

                </div>

                <div className="mt-8 flex flex-wrap gap-4">

                  <button
                    className="rounded-2xl bg-emerald-400 px-5 py-3 font-bold text-black transition hover:scale-105"
                  >
                    Подтвердить
                  </button>

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="rounded-2xl border border-red-500 px-5 py-3 text-red-300 transition hover:bg-red-500/10"
                  >
                    Удалить
                  </button>

                </div>

              </div>
            ))}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPanel;