import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/img/okay emote.webp';
import Link from 'next/link';

/**
 * Navbar component display website logo, a  link list to all website pages
 * and a SearchBar for products.
 *
 * This uses Next.js Link component for navigation.
 * The SearchBar is a work-in-progress.
 */
const Navbar: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between md:px-4">
        <div className="mb-2 flex w-full flex-col items-center space-x-4 md:flex-row">
          <Image src={Logo} alt="Rammus Logo" className="h-28 w-auto" />
          <h1 className="font-title text-3xl font-medium text-gray-100">
            Lojinho do Tatu
          </h1>
        </div>

        <nav className="flex w-full justify-around divide-x-[1px] divide-gray-200 bg-green-700 md:block md:w-auto md:justify-between md:space-x-4 md:space-y-0 md:divide-x-0 md:bg-inherit">
          <Link
            href="/"
            className=" w-full py-2 text-center text-lg text-gray-100 hover:text-gray-900 md:inline"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="w-full py-2 text-center text-lg text-gray-100 hover:text-gray-900"
          >
            Produtos
          </Link>
          <Link
            href="/"
            className="w-full py-2 text-center text-lg text-gray-100 hover:text-gray-900"
          >
            Contato
          </Link>
        </nav>
      </div>
      <div className="container mx-auto mt-4 px-8 pb-4">
        <input
          className="w-full rounded-lg px-4 py-2"
          placeholder="O que você está buscando?"
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
