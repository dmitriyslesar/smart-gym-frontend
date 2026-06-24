import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-zinc-950">
    <Header />
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl ">
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Персональные данные</p>
        <h1 className="mt-3 text-5xl font-black text-white">Пользовательское соглашение</h1>
        <ul className="mt-8 space-y-3 text-white/75">
           <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                1. Общие положения
              </h2>

              <p>
                Настоящее согласие определяет порядок обработки персональных
                данных пользователей web-сайта Smart Gym.
              </p>

              <p>
                Использование сайта означает согласие пользователя на обработку
                предоставленных персональных данных.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                2. Перечень обрабатываемых данных
              </h2>

              <ul className="space-y-3 list-disc pl-8">
                <li>ФИО пользователя;</li>
                <li>адрес электронной почты;</li>
                <li>история заказов;</li>
                <li>данные, указываемые при оформлении заказа.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                3. Цель обработки данных
              </h2>

              <ul className="space-y-3 list-disc pl-8">
                <li>регистрация пользователей;</li>
                <li>оформление заказов;</li>
                <li>обратная связь;</li>
                <li>предоставление информации о состоянии заказа.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">
                4. Права пользователя
              </h2>

              <p>
                Пользователь имеет право на получение информации о своих
                персональных данных, а также на их изменение или удаление.
              </p>
            </section>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
