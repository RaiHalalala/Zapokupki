import React from 'react';
import cn from 'classnames';
import style from './style.scss';

const cx = cn.bind(style);

const IconPotato = ({className}) =>{ 
  const iconClass = cx(
    "icon", 'icon-potato'
  )
  return(
    <img className={iconClass} src={require('/home/raihan/Desktop/react-swiper/src/sta/potato1.png')} alt="bread"/>
  )
  }

export default IconPotato;