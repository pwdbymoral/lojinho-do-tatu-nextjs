import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '../components/ProductCard';
import type ProductCardProps from '../components/ProductCard';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/Products/ProductCard',
  component: ProductCard,
  args: {
    product: {
      id: 1,
      name: 'Barraca de Acampamento',
      price: 75.0,
      tags: ['Equipamento'],
      image:
        'https://static.wikia.nocookie.net/leagueoflegends/images/6/60/Little_Camper_Emote.png/revision/latest?cb=20180322145141',
      alt: 'Barraca de Acampamento',
    },
  },
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
} satisfies Meta<typeof ProductCardProps>;

export default meta;
type Story = StoryObj<typeof ProductCardProps>;

export const Default: Story = {};
