import { type Meta, StoryObj } from '@storybook/react';
import CategoryFilter from '.';
import CategoryFilterProps from '.';

const meta = {
  title: 'Components/CategoryFilter',
  component: CategoryFilter,
  args: {
    categories: ['Brinquedos', 'Decoração'],
    selectedCategory: 'Todos os Produtos',
    onCategoryClick(category) {
      console.log(category);
    },
  },
} satisfies Meta<typeof CategoryFilterProps>;

export default meta;
type Story = StoryObj<typeof CategoryFilterProps>;

export const Default: Story = {};
