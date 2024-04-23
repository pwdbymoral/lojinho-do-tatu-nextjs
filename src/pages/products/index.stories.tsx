import { type Meta, StoryObj } from '@storybook/react';
import Products from '.';

const meta = {
  title: 'Pages/Products',
  component: Products,
} satisfies Meta<typeof Products>;

export default meta;
type Story = StoryObj<typeof Products>;
export const Default: Story = {};
