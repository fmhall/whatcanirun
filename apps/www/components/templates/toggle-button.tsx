'use client';

import React from 'react';

import * as Toggle from '@radix-ui/react-toggle';
import clsx from 'clsx';
import { ToggleLeft, ToggleRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------

type ToggleButtonProps = React.ComponentProps<typeof Toggle.Root>;

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const ToggleButton: React.FC<ToggleButtonProps> = ({ className, pressed, children, ...rest }) => {
  return (
    <Toggle.Root
      className={twMerge(
        clsx(
          'flex h-6 items-center rounded-md border border-gray-7 bg-transparent pl-2 text-xs font-medium text-gray-11 transition-colors hover:border-gray-8 hover:bg-gray-4 active:bg-gray-5',
          'data-[state=on]:border-blue-7 data-[state=on]:bg-blue-5 data-[state=on]:text-blue-12 data-[state=on]:hover:border-blue-8',
          className,
        ),
      )}
      {...rest}
    >
      <span>{children}</span>
      <span className="relative flex h-3 w-6 items-center justify-end pr-2">
        <ToggleRight
          className="absolute size-3 transition-all duration-150 ease-in-out"
          style={{
            transform: pressed ? 'translateX(0)' : 'translateX(-100%)',
            opacity: pressed ? 1 : 0,
          }}
        />
        <ToggleLeft
          className="absolute size-3 transition-all duration-150 ease-in-out"
          style={{
            transform: pressed ? 'translateX(100%)' : 'translateX(0)',
            opacity: pressed ? 0 : 1,
          }}
        />
      </span>
    </Toggle.Root>
  );
};

export default ToggleButton;
