import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/Header',
  component: Header,
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
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
