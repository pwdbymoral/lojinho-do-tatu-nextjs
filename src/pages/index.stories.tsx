import { type Meta, StoryObj } from '@storybook/react';
import Home from '.';

const meta = {
  title: 'Pages/Home',
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {};
