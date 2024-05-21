import { CategoryData } from '@/models/categoryData.interface';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryBannerProps {
  data: CategoryData;
}

/**
 * Renders a category banner component with background image and text overlay.
 */
const CategoryBanner: React.FC<CategoryBannerProps> = ({
  data: { name, url },
}) => {
  return (
    <div className="relative h-[550px] w-full">
      <Image
        src={url}
        alt={name}
        fill={true}
        priority={true}
        className="object-cover"
      />
      <div className="absolute left-4 top-4">
        <p className="text-xl font-semibold text-primary">{name}</p>
        <Link href="/produtos" className="font-light text-primary underline">
          Conferir
        </Link>
      </div>
    </div>
  );
};

export default CategoryBanner;
