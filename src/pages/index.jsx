import Navbar from '@/components/Navbar/Navbar'
import Banner from '@/components/Banner/Banner'
import ProdutosEmDestaque from '@/components/ProdutosEmDestaque/ProdutosEmDestaque'
import ProdutosComDesconto from '@/components/ProdutosComDesconto/ProdutosComDesconto'
import Footer from '@/components/Footer/Footer'


export default function Home() {
    return (
        <main>
            <Navbar />
            <Banner />
            <ProdutosEmDestaque />
            <ProdutosComDesconto />
            
            <div className="flex container justify-center mx-auto">
                <a href="/produtos" className='button text-md bg-primary lg:hover:bg-primary-300 rounded-full px-4 py-2 mb-4'>Veja todos os produtos</a>
            </div>

            <Footer />
        </main>
    )
}
