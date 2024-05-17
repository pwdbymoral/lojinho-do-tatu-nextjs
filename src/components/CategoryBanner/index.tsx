import { CategoryData } from '@/models/categoryData.interface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryBannerProps {
  data: CategoryData;
}

/**
 * Renders a category banner component with background image and text overlay.
 *
 * The component receives two arguments: `name` and `image`.
 * - `name`: A string representing the name of the category.
 * - `image`: A string representing the URL of the category banner image.
 */
const CategoryBanner: React.FC<CategoryBannerProps> = ({ data }) => {
  const { name, url } = data;
  return (
    <div className="relative h-96 w-full md:h-[660px]">
      <Image
        src={url}
        alt={name}
        layout="fill"
        priority={true}
        className="object-cover"
      />
      <div className="absolute left-4 top-4">
        {/* <div className=" bg-neutral-black md:bg-inherit"> */}
        <p className="text-xl font-semibold text-primary">{name}</p>
        <Link href="/produtos" className="font-light text-primary underline">
          Conferir
        </Link>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CategoryBanner;
