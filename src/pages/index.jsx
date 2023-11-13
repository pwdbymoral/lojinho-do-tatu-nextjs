import Navbar from '@/components/Navbar/Navbar'
import Banner from '@/components/Banner/Banner'
import ProdutosEmDestaque from '@/components/ProdutosEmDestaque/ProdutosEmDestaque'
import ProdutosComDesconto from '@/components/ProdutosComDesconto/ProdutosComDesconto'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import { useState } from 'react'
export default function Home() {

    const [produtos, setProdutos] = useState([]);

    return (
        <main>
            <Navbar />
            <Banner />
            <ProdutosEmDestaque produtos={produtos} />
            <ProdutosComDesconto produtos={produtos}/>

            <div className="flex container justify-center mx-auto">
                <button className='button text-md bg-primary lg:hover:bg-primary-300 rounded-full px-4 py-2 mb-4'>
                    <Link href="/produtos">
                        Veja todos os produtos
                    </Link>
                </button>
            </div>

            <Footer />
        </main>
    )
}
