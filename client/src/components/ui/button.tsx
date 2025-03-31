import { cn } from '../../lib/utils';

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn('px-4 py-2 bg-blue-500 text-white rounded', className)} {...props} />;
}