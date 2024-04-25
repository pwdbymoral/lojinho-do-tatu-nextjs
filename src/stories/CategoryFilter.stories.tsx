import type { Meta, StoryObj } from '@storybook/react';
import CategoryFilter from '../components/CategoryFilter';
import type CategoryFilterProps from '../components/CategoryFilter';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/CategoryFilter',
  component: CategoryFilter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Controls />
          <Primary />
        </>
      ),
    },
  },
} satisfies Meta<typeof CategoryFilterProps>;

export default meta;
type Story = StoryObj<typeof CategoryFilterProps>;

export const Default: Story = {
  args: {
    categories: ['Brinquedos', 'Decoração'],
    selectedCategory: 'Todos os Produtos',
    onCategoryClick(category) {
      console.log(category);
    },
  },
  argTypes: {
    selectedCategory: {
      options: ['Todos os Produtos', 'Brinquedos', 'Decoração'],
      control: {
        type: 'select',
      },
    },
  },
};
