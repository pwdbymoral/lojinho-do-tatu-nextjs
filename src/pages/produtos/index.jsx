import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import Cupcake from '../../../assets/img/cupcake.webp';
import Boia from '../../../assets/img/boia.webp';
import Flag from '../../../assets/img/balenciaga_flag.webp';
import Gloves from '../../../assets/img/gloves.webp';
import BarraCategorias from '@/components/BarraCategorias';

function Produtos() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto grid min-h-[77vh] grid-cols-5 divide-x divide-gray-400 py-4">
        <BarraCategorias />

        <div className="col-span-4 grid grid-cols-3 gap-4 pl-4">
          <ProductCard image={Gloves} name={'Par de luvas premium'} price={'R$52,00'} />
          <ProductCard image={Flag} name={'Bandeira Balenciaga'} price={'R$4.000,00'} />
          <ProductCard image={Cupcake} name={'Cupcake - Action Figure'} price={'R$657,99'} />
          <ProductCard image={Boia} name={'Boia'} price={'R$30,00'} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Produtos;
