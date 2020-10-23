import React from 'react';
import cn from 'classnames';
import style from './style.scss';

const cx = cn.bind(style);

const IconBread = ({className}) =>{ 
  const iconClass = cx(
    "Icon", className
  )
  const pathImg = className.split('__')[1];
  return(
    <img className={iconClass} src={require(`/home/raihan/Desktop/react-swiper/src/sta/${pathImg}.png`)} alt={pathImg}/>
  )}

export default IconBread;