import Link from 'next/link';
import React, { useState } from 'react';
import { Menu as MenuIcon, X as MenuClose } from 'lucide-react';

const NavLinks: React.FC = () => {
  return (
    <>
      <Link
        href="/"
        className=" w-full py-2 text-center text-lg text-gray-100 hover:text-gray-900 md:inline"
      >
        Home
      </Link>
      <Link
        href="/produtos"
        className="w-full py-2 text-center text-lg text-gray-100 hover:text-gray-900"
      >
        Produtos
      </Link>
      <Link
        href="/contato"
        className="w-full py-2 text-center text-lg text-gray-100 hover:text-gray-900"
      >
        Contato
      </Link>
    </>
  );
};

/**
 * Nav component is a responsive navigation bar that displays navigation links
 * horizontally on larger screens and in a vertical mobile menu on smaller
 * screens.
 *
 * This uses Next.js Link component for navigation.
 */
const Nav: React.FC = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const toggleNavbar = (): void => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };
  return (
    <>
      <nav className="flex w-1/3 justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleNavbar} className="text-gray-100">
            {mobileMenuIsOpen ? (
              <MenuClose size={28} />
            ) : (
              <MenuIcon size={28} />
            )}
          </button>
        </div>
      </nav>
      {mobileMenuIsOpen && (
        <div className="flex basis-full flex-col">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
