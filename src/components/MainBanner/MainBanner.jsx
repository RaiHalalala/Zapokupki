import React from 'react';
import IconTemplate from '../../icons/IconTemplate';

import './style.scss';

const images = [
  'avocado', 'bread', 'pasta', 'potato', 'grape', 'oli', 'orange'
]

const MainBanner = () => {

  return (
    <div className="Main-banner">
      <div className="Main-banner__content-left">
        <svg className="outline" width="343" height="124" viewBox="0 0 343 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="check" d="M209.933 16.4819C307.83 13.3911 340.099 27.9033 341.432 54.6851C343.817 102.611 269.112 119.086 175.012 122.057C80.9126 125.028 3.93788 108.948 2.33232 76.685C0.726763 44.4222 14.5975 12.849 210.97 3.05849C233.02 2.24532 256.939 1.60317 286.908 4.17306" stroke="#0000FE" stroke-width="3" stroke-miterlimit="10">
          </path>
        </svg>
        <p className="Main-banner__header">Онлайн-сервис покупок для вашего бизнеса</p>
        <p className="Main-banner__text">ЗАПОКУПКИ — полностью цифровой сервис для ИП и юридических лиц</p>
      </div>
      {images.map((name) => (
        <IconTemplate className={`Icon__${name}`}/>
      ))}
    </div>
  );
}

export default MainBanner;