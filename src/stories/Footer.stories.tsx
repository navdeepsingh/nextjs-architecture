import { StoryObj } from '@storybook/react';

import Footer from '../components/Footer/Footer';

type Story = StoryObj<typeof Footer>;

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as Story;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};
