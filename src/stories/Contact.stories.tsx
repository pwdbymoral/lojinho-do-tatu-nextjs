import type { Meta, StoryObj } from '@storybook/react';
import ContatoPage from '@/pages/contato';
import { Controls, Description, Primary, Title } from '@storybook/blocks';
const meta = {
  title: 'Pages/Contato',
  component: ContatoPage,
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
} satisfies Meta<typeof ContatoPage>;

export default meta;
type Story = StoryObj<typeof ContatoPage>;

export const Default: Story = {};
