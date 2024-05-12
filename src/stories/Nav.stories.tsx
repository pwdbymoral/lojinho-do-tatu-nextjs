import type { Meta, StoryObj } from '@storybook/react';
import Nav from '../components/Nav';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Components/Nav',
  component: Nav,
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
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {};
