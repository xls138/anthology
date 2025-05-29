import { cva, type VariantProps } from 'class-variance-authority';

export type CalloutVariants = VariantProps<typeof variants>;

export const variants = cva(['p-4', 'rounded', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    variant: {
      primary: [
        'bg-primary-200 dark:bg-primary-800',
        'border-primary-500 dark:border-primary-900',
        'text-primary-900 dark:text-primary-50',
      ],
      information: [
        'bg-information-200 dark:bg-information-800',
        'border-information-500 dark:border-information-500',
        'text-information-900 dark:text-information-50',
      ],
      success: [
        'bg-success-200 dark:bg-success-800',
        'border-success-500 dark:border-success-900',
        'text-success-900 dark:text-success-50',
      ],
      warning: [
        'bg-warning-200 dark:bg-warning-800',
        'border-warning-500 dark:border-warning-900',
        'text-warning-900 dark:text-warning-50',
      ],
      danger: [
        'bg-danger-200 dark:bg-danger-800',
        'border-danger-500 dark:border-danger-900',
        'text-danger-900 dark:text-danger-50',
      ],
      default: [
        'bg-slate-200 dark:bg-slate-800',
        'border-slate-500 dark:border-slate-900',
        'text-slate-900 dark:text-slate-50',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
