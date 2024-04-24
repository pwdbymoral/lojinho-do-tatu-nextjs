import { type Meta, StoryObj } from '@storybook/react';
import Banner from '.';
import { Controls, Description, Primary, Title } from '@storybook/blocks';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
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
