import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/img/okay emote.webp';
import Nav from '../Nav';

/**
 * Header component display website logo, a  link list to all website pages
 * and a SearchBar for products.
 *
 * This uses Next.js Link component for navigation.
 * The SearchBar is a work-in-progress.
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
