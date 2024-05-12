import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/img/okay emote.webp';
import Nav from '../Nav';

/**
 * Header component displays the Rammus logo with Next Image component,
 * the navigation bar, and a search bar for searching products (WIP).
 */
const Header: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between px-8">
        <Image src={Logo} alt="Rammus Logo" className="h-28 w-auto" />
        <Nav />
      </div>

      <div className="container mx-auto mt-4 px-8 pb-4">
        <input
          className="w-full rounded-lg px-4 py-2"
          placeholder="O que você está buscando?"
        />
      </div>
    </div>
  );
};

export default Header;
