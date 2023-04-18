import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import logoVass from '../../public/images/logoVass.png';

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Image src={logoVass} alt="Logo" width={100} height={50} />
      </div>
      <div className='menu-box'>
        <div className="header__search">
          <AiOutlineSearch size={32} />
        </div>
        <div className="header__menu-toggle">
          <AiOutlineMenu size={32} />
        </div>
      </div>
    </div>
  );
}