// components/CustomButton.tsx

"use client";

import React from 'react';

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  customColor?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?:string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  customColor,
  width,
  height,
  backgroundColor,
  borderRadius,
  borderColor,
}) => {
  const customStyles = {
    color: customColor || 'black',
    width: width || 'auto',
    height: height || 'auto',
    backgroundColor: backgroundColor || 'gray',
    borderRadius: borderRadius || '8px',
    borderColor: borderColor || '',
  };

  return (
    <button
      onClick={onClick}
      style={customStyles}
    >
      {children}
    </button>
  );
};

export default CustomButton;
