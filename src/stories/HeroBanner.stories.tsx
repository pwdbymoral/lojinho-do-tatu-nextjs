import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from '../components/HeroBanner';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta: Meta<typeof HeroBanner> = {
  title: 'Components/HeroBanner',
  component: HeroBanner,
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
};

export default meta;
export const Default: StoryObj = {};
