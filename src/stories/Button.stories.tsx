import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button';
import type ButtonProps from '@/components/Button';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
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
} satisfies Meta<typeof ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {
      alert('Button clicked!');
    },
    children: 'Button',
  },
};
