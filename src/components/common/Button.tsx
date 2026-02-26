import type { ComponentProps } from 'react';
import { cn } from '@/utils/utils';

type ButtonSize = 'large' | 'medium';
type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const sizeClasses: Record<ButtonSize, string> = {
  large: 'px-6 py-3 text-lg',
  medium: 'px-4 py-2 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-foreground hover:bg-gray-900',
  secondary: 'bg-secondary hover:bg-gray-700',
};

export default function Button({
  size = 'medium',
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `
        text-secondary-background rounded-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.3)]
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]
        active:shadow-[0_5px_15px_rgba(0,0,0,0.3)]
        active:scale-[0.98]
        transition-all duration-200
        font-semibold
        dark:hover:text-white
        ${sizeClasses[size]}
        ${variantClasses[variant]}
      `,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
