import React from 'react';
import cn from 'classnames';
import style from './style.scss';

const cx = cn.bind(style);

const IconPasta = ({className}) =>{ 
  const iconClass = cx(
    "icon", 'icon-pasta'
  )
  return(
    <img className={iconClass} src={require('/home/raihan/Desktop/react-swiper/src/sta/pasta1.png')} alt="bread"/>
  )
}

export default IconPasta;