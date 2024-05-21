import type { Meta, StoryObj } from '@storybook/react';
import CategoryShowcase from '../components/CategoryShowcase';
import type CategoryShowcaseProps from '../components/CategoryShowcase';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/CategoryShowcase',
  component: CategoryShowcase,
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
} satisfies Meta<typeof CategoryShowcase>;

export default meta;
type Story = StoryObj<typeof CategoryShowcaseProps>;

export const Default: Story = {
  args: {
    categories: [
      { name: 'Presentes', url: '/CategoryBanners/banner_presentes.png' },
      { name: 'Acessórios', url: '/CategoryBanners/banner_acessorios.png' },
      { name: 'Equipamentos', url: '/CategoryBanners/banner_equipamentos.png' },
      { name: 'Decoração', url: '/CategoryBanners/banner_decoracao.png' },
    ],
  },
};
