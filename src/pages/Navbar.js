import Image from 'next/image'
import Logo from '../../assets/img/okay emote.webp'

export default function() {
  return(
    <div className='bg-green-400 px-4'>
      <div className='container mx-auto flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-4'>
          <Image src={Logo} alt='Rammus Logo'className='h-28 w-auto'/>
          <h1 className='text-lime-900 text-3xl font-["MontSerrat"]'>
            Lojinho do Tatu
          </h1>
        </div>
        
        <nav className='space-x-4 justify-end'>
          <a className='text-lg text-lime-900 hover:text-green-600' href='#'>Home</a>
          <a className='text-lg text-lime-900 hover:text-green-600' href='#'>Produtos</a>
          <a className='text-lg text-lime-900 hover:text-green-600' href='#'>Contato</a>
        </nav>
      </div>
    </div>
  )
}
