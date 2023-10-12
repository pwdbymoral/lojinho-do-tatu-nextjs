import Glasses from '../../../assets/img/glasses.webp'
import Blitzcrank from '../../../assets/img/vacuum_cleaner_robot.webp'
import Gravestone from '../../../assets/img/gravestone.webp'
import Camp from '../../../assets/img/camp.png'
import ProductCard from '../../components/ProductCard/ProductCard'


export default function ProdutosEmDestaque() {
    return (
        <div className='container mx-auto mt-4 px-4'>
            <span className='font-semibold text-xl'>Produtos em destaque</span>
            <div className='grid gap-4 lg:grid-cols-3 xl:grid-cols-4'>
                <ProductCard image={Camp} name={'Barraca de acampamento'} price={'R$75,00'} />
                <ProductCard image={Gravestone} name={'Lápide'} price={'R$1.300,00'} />
                <ProductCard image={Glasses} name={'Óculos espelhado vermelho'} price={'R$800,00'} />
                <ProductCard image={Blitzcrank} name={'Robô'} price={'R$2.500,00'} />
            </div>
            <hr />
        </div>
    )
}