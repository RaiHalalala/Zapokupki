import React, { Children } from 'react';
import IconTemplate from '../../../icons/IconTemplate';
import cn from 'classnames';

import style from './style.scss';
const cx = cn.bind(style);

const Block = ({className, children}) => {
  const style = cx(
    "Block", className
  )
  const pathImg = className.replace('Block__', '');
  return (
    <div className={style}>
      <IconTemplate className={`Icon__${pathImg}`}/>
      <div className="Block__name">
        {children}
      </div>
    </div>
  );
}

export default Block;