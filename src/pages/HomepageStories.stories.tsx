import { type Meta, StoryObj } from '@storybook/react';
import Home from '.';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Pages/Home',
  component: Home,
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
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
