import * as Slider from '@radix-ui/react-slider';

export function Slider({ className, ...props }) {
  return <Slider.Root className={cn('w-full', className)} {...props} />;
}