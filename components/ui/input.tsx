import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.Component;
  endIcon?: React.Component;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative w-full [&_svg]:size-4">
        {startIcon && (
          <div className="absolute top-1/2 left-3 -translate-y-1/2 transform">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-4 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            startIcon ? 'pl-10' : '',
            endIcon ? 'pr-8' : '',
            className,
          )}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 transform">
            {endIcon}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
