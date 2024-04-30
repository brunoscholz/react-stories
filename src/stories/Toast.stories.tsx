import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../Components/Toast/Toast';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Element/Toast',
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    id: { id: 0 }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { content: { status: '', timeAgo: 0, body: '' } },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SuccessToast: Story = {
  args: {
    id: 1,
    content: {
      body: 'Hello, world! This is a success toast message.',
      timeAgo: Date.now() - 1000,
      status: 'success'
    },
    timer: 0,
  },
};

export const ErrorToast: Story = {
  args: {
    id: 2,
    content: {
      body: 'Hello, world! This is an error toast message.',
      timeAgo: Date.now() - 1000000,
      status: 'error'
    },
    timer: 0,
  },
};

export const WarningToast: Story = {
  args: {
    id: 3,
    content: {
      body: 'Hello, world! This is a warning toast message.',
      timeAgo: Date.now() - (11 * 60 * 1000),
      status: 'warning'
    },
    timer: 0,
  },
};

export const InfoToast: Story = {
  args: {
    id: 4,
    content: {
      body: 'Hello, world! This is an info toast message.',
      timeAgo: Date.now() - (11 * 60 * 1000),
      status: 'info'
    },
    timer: 0,
  },
};
