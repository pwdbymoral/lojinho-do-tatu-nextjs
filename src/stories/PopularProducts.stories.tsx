import { type Meta, StoryObj } from '@storybook/react';
import PopularProducts from '.';
import PopularProductsProps from '.';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/Products/PopularProducts',
  component: PopularProducts,
  args: {
    products: [
      {
        id: 1,
        name: 'Barraca de Acampamento',
        price: 75.0,
        tags: ['Equipamento'],
        image:
          'https://static.wikia.nocookie.net/leagueoflegends/images/6/60/Little_Camper_Emote.png/revision/latest?cb=20180322145141',
        alt: 'Barraca de Acampamento',
      },
      {
        id: 2,
        name: 'Slime Rock On',
        price: 1300.0,
        tags: ['Brinquedo', 'Decoração'],
        image:
          'https://static.wikia.nocookie.net/leagueoflegends/images/f/f7/Rock_On_Emote.png/revision/latest?cb=20210316195632',
        alt: 'Slime vermelho sorrindo e fazendo o sinal do rock com as mãos',
      },
      {
        id: 3,
        name: 'Óculos Espelhado Vermelho',
        price: 800.0,
        tags: ['Acessório'],
        image:
          'https://static.wikia.nocookie.net/leagueoflegends/images/4/4b/According_to_Plan_Emote.png/revision/latest?cb=20171120234343',
        alt: 'Vayne usando o óculos de formato pontudo e lentes vermelhas',
      },
      {
        id: 4,
        name: 'Robô',
        price: 2500.0,
        tags: ['Equipamento'],
        image:
          'https://static.wikia.nocookie.net/leagueoflegends/images/1/1b/Does_Not_Compute_Emote.png/revision/latest?cb=20230316211521',
        alt: "Robô na pose da estátua 'O pensador'",
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
