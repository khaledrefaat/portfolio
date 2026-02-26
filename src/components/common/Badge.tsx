import { cn } from '@/utils/utils';

export default function Badge({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-background/20',
        variant === 'primary' && 'bg-background',
        className,
      )}
    >
      {children}
    </span>
  );
}
