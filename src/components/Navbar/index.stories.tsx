import { type Meta, StoryObj } from '@storybook/react';
import Navbar from '.';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
