import RammusFooter from '@/../assets/img/rammus footer.png';
import Image from 'next/image';

export default function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <section className="mr-4 flex flex-col items-center p-4">
      <Image src={RammusFooter} width={200} className="hidden pb-2 pr-2 md:block" />
      <h2 className="mb-2 w-full rounded-md bg-primary px-2 py-4 text-lg font-bold text-gray-50">
        Categories
      </h2>
      <div className="w-full space-y-2 overflow-auto">
        <div onClick={() => onCategoryClick('Todos os Produtos')}>
          <span
            className={
              selectedCategory === 'Todos os Produtos'
                ? 'cursor-pointer font-semibold'
                : 'cursor-pointer'
            }
          >
            Todos os Produtos
          </span>
        </div>
        {categories.map((category) => (
          <div onClick={() => onCategoryClick(category)}>
            <span
              className={
                selectedCategory === category ? 'cursor-pointer font-semibold' : 'cursor-pointer'
              }
            >
              {category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
