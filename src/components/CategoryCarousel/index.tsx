import { CategoryData } from '@/models/categoryData.interface';
import React from 'react';
import { Carousel } from '@material-tailwind/react';
import CategoryBanner from '../CategoryBanner';

interface CategoryCarouselProps {
  categories: CategoryData[];
}
const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categories }) => {
  return (
    <div className="container mx-auto px-8">
      <Carousel className="rounded-xl md:hidden" transition={{ duration: 1 }}>
        {categories.map((category) => (
          <div key={category.url} className="relative h-full w-full">
            <CategoryBanner data={category} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
