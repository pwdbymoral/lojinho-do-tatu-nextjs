import type { Meta, StoryObj } from '@storybook/react';
import PopularProducts from '../components/PopularProducts';
import type PopularProductsProps from '../components/PopularProducts';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/Products/PopularProducts',
  component: PopularProducts,
  args: {
    products: [
      {
        id: 5,
        name: "Kit Valentine's Day",
        price: 119,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/4/4a/GG_Emote.png/revision/latest?cb=20180224185252',
        altText: "Caixa rosa com a escrita 'GG' em vermelho",
        categories: [
          {
            id: 4,
            name: 'Presente',
          },
        ],
      },
      {
        id: 6,
        name: 'Máscara Gatinho Sentinela',
        price: 4000,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/d/d4/Sentinel_Rengar_Emote.png/revision/latest?cb=20210708192240',
        altText: 'Máscara do Rengar sentinela',
        categories: [
          {
            id: 3,
            name: 'Acessório',
          },
        ],
      },
      {
        id: 7,
        name: 'Action Figure Cupcake',
        price: 657.99,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/d/d5/Cup-Yay%21_Emote.png/revision/latest?cb=20171120234426',
        altText:
          'Cupcake rosa numa fomr marrom sorrindo com uma cereja em sua testa',
        categories: [
          {
            id: 1,
            name: 'Decoração',
          },
        ],
      },
      {
        id: 8,
        name: 'Chapéu Velho Oeste',
        price: 30,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/2/2e/Nothing_Personal%21_Emote.png/revision/latest?cb=20200528005023',
        altText:
          'Homem segurando um chapéu preto de fivela laranja em sua cabeça',
        categories: [
          {
            id: 3,
            name: 'Acessório',
          },
        ],
      },
    ],
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
} satisfies Meta<typeof PopularProductsProps>;

export default meta;
type Story = StoryObj<typeof PopularProductsProps>;

export const Default: Story = {};
