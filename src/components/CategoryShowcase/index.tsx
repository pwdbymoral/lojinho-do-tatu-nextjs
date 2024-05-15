import Link from 'next/link';
import React from 'react';

/**
 * Renders a category banner component with background image and text overlay.
 *
 * The component receives two arguments: `name` and `image`.
 * - `name`: A string representing the name of the category.
 * - `image`: A string representing the URL of the category banner image.
 */
const CategoryBanner: React.FC<{ name: string; image: string }> = ({
  name,
  image,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative h-[660px] bg-cover bg-center"
    >
      <div className="absolute left-4 top-4">
        <p className="text-xl font-semibold text-primary">{name}</p>
        <Link href="/produtos" className="font-light text-primary underline">
          Conferir
        </Link>
      </div>
    </div>
  );
};

/**
 * Renders a category showcase component which displays four category banners.
 *
 * The component is composed of four category banners which are displayed in a grid.
 * Each category banner has its name and a link to the respective category page.
 */
const CategoryShowcase: React.FC = () => {
  const bannerAcessorios = '/CategoryBanners/banner_acessorios.png';
  const bannerDecoracao = '/CategoryBanners/banner_decoracao.png';
  const bannerPresentes = '/CategoryBanners/banner_presentes.png';
  const bannerEquipamentos = '/CategoryBanners/banner_equipamentos.png';

  return (
    <div className="container mx-auto my-4 grid grid-cols-3 gap-4 px-4">
      <div className="col-span-2">
        <CategoryBanner image={bannerPresentes} name="Presentes" />
      </div>
      <div>
        <CategoryBanner image={bannerAcessorios} name="Acessórios" />
      </div>
      <div>
        <CategoryBanner image={bannerEquipamentos} name="Equipamentos" />
      </div>
      <div className="col-span-2">
        <CategoryBanner image={bannerDecoracao} name="Decoração" />
      </div>
    </div>
  );
};

export default CategoryShowcase;
