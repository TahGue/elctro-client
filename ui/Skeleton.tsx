import React from 'react';
import RSkeleton, { SkeletonProps } from 'react-loading-skeleton';

export const Skeleton: React.FC<SkeletonProps> = ({ ...props }) => {
  return <RSkeleton baseColor={'var(--color-gray-100)'} highlightColor={'var(--color-gray-50)'} {...props} />;
};
