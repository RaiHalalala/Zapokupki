import React from 'react';
import cn from 'classnames';
import style from './style.scss';

const cx = cn.bind(style);

const IconBread = ({className}) =>{ 
  const iconClass = cx(
    "icon", 'icon-orange'
  )
  return(
    <img className={iconClass} src={require('/home/raihan/Desktop/react-swiper/src/sta/orange1.png')} alt="bread"/>
  )}

export default IconBread;