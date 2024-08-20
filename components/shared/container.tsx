import {cn} from '@/lib/utils';
import React, { FC, ReactNode } from 'react'

type ContainerProps = {
  className?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({
                                                                      className,
                                                                      children
                                                                    }) => {
  return <div
    className={cn('mx-auto max-w-[1280px]', className)}>
    {children}
  </div>;
};
