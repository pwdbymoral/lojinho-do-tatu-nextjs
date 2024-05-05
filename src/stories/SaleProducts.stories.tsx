import type { Meta, StoryObj } from '@storybook/react';
import SaleProducts from '../components/SaleProducts';
import type SaleProductsProps from '../components/SaleProducts';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/Products/SaleProducts',
  component: SaleProducts,
  args: {
    products: [
      {
        id: 1,
        name: 'Barraca de Acampamento',
        price: 75,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/6/60/Little_Camper_Emote.png/revision/latest?cb=20180322145141',
        altText: 'Barraca de Acampamento',
        categories: [
          {
            id: 2,
            name: 'Equipamento',
          },
        ],
      },
      {
        id: 2,
        name: 'Slime Rock On',
        price: 1300,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/f/f7/Rock_On_Emote.png/revision/latest?cb=20210316195632',
        altText:
          'Slime vermelho sorrindo e fazendo o sinal do rock com as mãos',
        categories: [
          {
            id: 1,
            name: 'Decoração',
          },
        ],
      },
      {
        id: 3,
        name: 'Óculos Espelhado Vermelho',
        price: 800,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/According_to_Plan_Emote.png/revision/latest?cb=20171120234343',
        altText: 'Vayne usando o óculos de formato pontudo e lentes vermelhas',
        categories: [
          {
            id: 3,
            name: 'Acessório',
          },
        ],
      },
      {
        id: 4,
        name: 'Robô',
        price: 2500,
        imageUrl:
          'https://static.wikia.nocookie.net/leagueoflegends/images/1/1b/Does_Not_Compute_Emote.png/revision/latest?cb=20230316211521',
        altText: "Robô na pose da estátua 'O pensador'",
        categories: [
          {
            id: 2,
            name: 'Equipamento',
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
} satisfies Meta<typeof SaleProductsProps>;

export default meta;
type Story = StoryObj<typeof SaleProductsProps>;

export const Default: Story = {};
