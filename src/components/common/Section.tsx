import type { ComponentProps } from 'react';
import { cn } from '@/utils/utils';

interface SectionProps extends ComponentProps<'section'> {
  children: React.ReactNode;
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-30', className)} {...props}>
      <div className={cn('mx-auto max-w-5xl', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
