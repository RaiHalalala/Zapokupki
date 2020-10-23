import React from 'react';
import Block from './Block';

import './style.scss'

const OurAdvantages = () => {

  return (
    <div className="Our-advantages container">
      <div className="Our-advantages__text">
        <p className="Our-advantages__subtitle">Наши преимущества</p>
        <p className="Our-advantages__title">Сегодня сервис ЗАПОКУПКИ – это товары от ведущих брендов, по выгодным ценам и на привлекательных условиях. Нам важно, чтобы сервис был не просто удобным для каждого клиента, но и приносил реальную выгоду.</p>
      </div>
      <div className="Our-advantages__cards">
        <Block className="Block__favorable-prices">Выгодные цены</Block>
        <Block className="Block__online-no-commission">Онлайн и без комиссии</Block>
        <Block className="Block__logistics">Удобная логистика</Block>
      </div>
    </div>
  );
}

export default OurAdvantages;