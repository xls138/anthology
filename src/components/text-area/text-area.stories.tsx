import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './text-area';

import { userEvent, within, expect } from '@storybook/test';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    label: 'Text Area Label',
    placeholder: 'Enter some text here…',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the text area',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the text area',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the text area',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the text area as required',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} as Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithCount: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const length = canvas.getByTestId('length');
    const inputValue = 'Hello, world!';
    await userEvent.type(textArea, inputValue);
    await expect(textArea).toHaveValue(inputValue);
    await expect(length).toHaveTextContent(inputValue.length.toString());
  },
};

export const LengthTooLong: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');
    const count = canvas.getByTestId('length');

    const inputValue = 'H' + 'e'.repeat(args.maxLength || 140) + 'y!';

    await userEvent.type(textArea, inputValue);
    await expect(count).toHaveTextContent(inputValue.length.toString());
    await expect(textArea).toHaveAttribute('aria-invalid', 'true');
    await expect(textArea).toHaveClass('ring-danger-500');
    await expect(count).toHaveStyle({ color: 'rgb(237, 70, 86)' });
  },
};

export const DisabledInteraction: Story = {
  args: {
    disabled: true,
    value: 'Initial value',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole('textbox');

    // 检查文本区域确实被禁用
    await expect(textArea).toBeDisabled();

    // 检查初始值
    await expect(textArea).toHaveValue('Initial value');

    // 尝试输入内容到禁用的文本区域
    // 这应该不会改变值，因为文本区域被禁用了
    await userEvent.type(textArea, 'This should not be typed');

    // 验证值没有改变
    await expect(textArea).toHaveValue('Initial value');

    // 验证文本区域仍然被禁用
    await expect(textArea).toBeDisabled();
  },
};
