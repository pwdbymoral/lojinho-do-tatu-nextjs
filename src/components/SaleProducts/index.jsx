import ProductCard from '../../components/ProductCard';

function SaleProducts({ products }) {
  return (
    <div className="container mx-auto my-4 px-4">
      <span className="text-xl font-semibold">Produtos com desconto</span>
      <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard image={product.image} name={product.name} price={product.price.toFixed(2)} />
        ))}
      </div>
      <div className="flex justify-end">
        <a href="" className="pr-2 text-gray-500 lg:hover:text-gray-900 lg:hover:underline">
          Veja mais &gt;
        </a>
      </div>
    </div>
  );
}

export default SaleProducts;
