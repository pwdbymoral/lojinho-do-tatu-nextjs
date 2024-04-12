import Cupcake from '../../../assets/img/cupcake.webp';
import Boia from '../../../assets/img/boia.webp';
import Flag from '../../../assets/img/balenciaga_flag.webp';
import Gloves from '../../../assets/img/gloves.webp';
import ProductCard from '../../components/ProductCard/ProductCard';

function ProdutosComDesconto() {
  return (
    <div className="container mx-auto my-4 px-4">
      <span className="text-xl font-semibold">Produtos com desconto</span>
      <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard image={Gloves} name={'Par de luvas premium'} price={'R$52,00'} />
        <ProductCard image={Flag} name={'Bandeira Balenciaga'} price={'R$4.000,00'} />
        <ProductCard image={Cupcake} name={'Cupcake - Action Figure'} price={'R$657,99'} />
        <ProductCard image={Boia} name={'Boia'} price={'R$30,00'} />
      </div>
      <div className="flex justify-end">
        <a href="" className="pr-2 text-gray-500 lg:hover:text-gray-900 lg:hover:underline">
          Veja mais &gt;
        </a>
      </div>
    </div>
  );
}

export default ProdutosComDesconto;
