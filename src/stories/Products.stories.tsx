import { type Meta, StoryObj } from '@storybook/react';
import Products from '../pages/products';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Pages/Products',
  component: Products,
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
} satisfies Meta<typeof Products>;

export default meta;
type Story = StoryObj<typeof Products>;
export const Default: Story = {};
