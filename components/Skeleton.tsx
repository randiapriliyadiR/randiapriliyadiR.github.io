import React from 'react';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({ width, height, borderRadius = '4px', className, style }: Readonly<SkeletonProps>) {
  return (
    <div 
      className={`animate-pulse ${className || ''}`}
      style={{
        width: width || '100%',
        height: height || '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius,
        ...style
      }}
    />
  );
}
