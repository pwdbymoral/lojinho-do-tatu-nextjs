import Image from 'next/image'
import Logo from '../../../assets/img/okay emote.webp'



export default function Navbar() {
    return (
        <div className='bg-primary'>
            <div className='container px-4 mx-auto flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center space-x-4'>
                    <Image src={Logo} alt='Rammus Logo' className='h-28 w-auto' />
                    <h1 className='invisible xl:visible text-lime-900 text-3xl font-title font-medium'>
                        Lojinho do Tatu
                    </h1>
                </div>

                <nav className='space-x-4 justify-end'>
                    <a className='text-lg text-lime-900 hover:text-gray-900' href='/' aria-current='page'>Home</a>
                    <a className='text-lg text-lime-900 hover:text-gray-900' href='/produtos'>Produtos</a>
                    <a className='text-lg text-lime-900 hover:text-gray-900' href='#'>Contato</a>
                </nav>
            </div>
            <div className='container mx-auto px-8 pb-4'>
                <input className='w-full px-4 py-2 rounded-lg' placeholder='O que você está buscando?'></input>
            </div>
        </div>
    )
}
