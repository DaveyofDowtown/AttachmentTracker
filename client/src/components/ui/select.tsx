import * as Select from '@radix-ui/react-select';

export function Select({ children, ...props }) {
  return <Select.Root {...props}>{children}</Select.Root>;
}