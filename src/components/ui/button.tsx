import { type ReactNode, type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { INTERACTIVE_STYLES } from '@/lib/base-styles';
import { LoaderIcon } from 'lucide-react';

type ButtonVariants = 'primary' | 'ghost' | 'destructive' | 'success';
type ButtonSizes = 'default' | 'large' | 'icon' | 'bigIcon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  isLoading?: boolean;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariants, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/85',
  ghost: 'bg-transparent text-foreground hover:bg-muted',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/85',
  success: 'bg-success text-success-foreground hover:bg-success/85',
};

const sizeClasses: Record<ButtonSizes, string> = {
  default: 'h-9 px-3 text-base',
  large: 'h-12 px-4 text-lg',
  icon: 'size-9 text-base',
  bigIcon: 'size-12 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { type = 'button', children, className, isLoading, variant = 'primary', size = 'default', disabled, ...props },
  ref
) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'relative flex items-center justify-center rounded transition-colors font-semibold',
        variant !== 'ghost' && 'shadow',
        INTERACTIVE_STYLES,
        sizeClasses[size],
        variantClasses[variant],
        variant === 'ghost' && isLoading && 'bg-muted',
        className
      )}
      disabled={isDisabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <span
          className={cn(
            'absolute inset-0 flex items-center justify-center text-primary-foreground',
            variant === 'ghost' && isLoading && 'text-muted-foreground'
          )}
          aria-hidden="true"
        >
          <LoaderIcon className="size-4 animate-spin" />
        </span>
      )}
      <span className={cn(isLoading && 'opacity-0')}>{children}</span>
      {isLoading && (
        <span className="sr-only" aria-live="polite">
          Loading
        </span>
      )}
    </button>
  );
});
