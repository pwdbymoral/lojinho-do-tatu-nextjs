import Image from 'next/image';
import Logo from '../../../assets/img/okay emote.webp';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center space-x-4">
          <Image src={Logo} alt="Rammus Logo" className="h-28 w-auto" />
          <h1 className="invisible font-title text-3xl font-medium text-gray-100 xl:visible">
            Lojinho do Tatu
          </h1>
        </div>

        <nav className="justify-end space-x-4">
          <Link href="/" className="text-lg text-gray-100 hover:text-gray-900">
            Home
          </Link>
          <Link href="/produtos" className="text-lg text-gray-100 hover:text-gray-900">
            Produtos
          </Link>
          <Link href="/" className="text-lg text-gray-100 hover:text-gray-900">
            Contato
          </Link>
        </nav>
      </div>
      <div className="container mx-auto px-8 pb-4">
        <input
          className="w-full rounded-lg px-4 py-2"
          placeholder="O que você está buscando?"
        ></input>
      </div>
    </div>
  );
}
