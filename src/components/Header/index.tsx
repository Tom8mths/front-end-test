import {useState} from 'react';
import {MenuIcon} from '@heroicons/react/outline';
import {ShoppingCartIcon} from '@heroicons/react/solid';

import * as S from './styles';

import Logo from './Logo';
import Navigation from './Navigation';
import {User} from '../../interfaces/user.interface';

import Navbar from './Navbar';
import Link from 'next/link';
import MiniCart from '../MiniCart';

export type HeaderProps = {
  user?: User;
};

export default function Header({user}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function toggleCart() {
    setIsMiniCartOpen(!isMiniCartOpen);
  }
  return (
    <div className={S.wrapper}>
      <Logo />

      <Navbar>
        <ul className="inline-flex">
          <li className="mx-8 font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-8 text-white/40">Products</li>
          <li className="mx-8 text-white/40">Features</li>
          <li className="mx-8 text-white/40">Discover</li>
        </ul>
      </Navbar>

      <div className="flex items-center">
        <ShoppingCartIcon
          className={S.cartIcon}
          aria-label="Open cart"
          onClick={() => toggleCart()}
        />

        <MenuIcon
          className={S.menuIcon}
          aria-label="Open menu"
          tabIndex={0}
          onClick={() => toggleMenu()}
        />
      </div>

      <Navigation isOpen={isOpen} onClose={toggleMenu} user={user}></Navigation>
    </div>
  );
}
