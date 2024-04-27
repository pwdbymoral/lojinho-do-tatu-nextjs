import type { Meta, StoryObj } from '@storybook/react';
import Contato from '@/pages/contato';
import { Controls, Description, Primary, Title } from '@storybook/blocks';
const meta = {
  title: 'Pages/Contato',
  component: Contato,
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
} satisfies Meta<typeof Contato>;

export default meta;
type Story = StoryObj<typeof Contato>;

export const Default: Story = {};
