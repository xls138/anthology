import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'information', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    title: 'Default',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
};

export const DarkModeDefault: Story = {
  args: {
    title: 'Default',
    variant: 'default',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const DarkModePrimary: Story = {
  args: {
    title: 'Primary',
    variant: 'primary',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const DarkModeInformation: Story = {
  args: {
    title: 'Information',
    variant: 'information',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const DarkModeSuccess: Story = {
  args: {
    title: 'Success',
    variant: 'success',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const DarkModeWarning: Story = {
  args: {
    title: 'Warning',
    variant: 'warning',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const DarkModeDanger: Story = {
  args: {
    title: 'Danger',
    variant: 'danger',
  },
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
