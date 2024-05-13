import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '../pages';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta = {
  title: 'Pages/Home',
  component: HomePage,
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
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
