import Image from 'next/image'
import Navbar from './Navbar'
import ProductCard from './ProductCard'

export default function Home() {
    return (
        <main>
            <Navbar />
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </main>
    )
}
