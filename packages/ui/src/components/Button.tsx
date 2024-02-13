import React from "react";
import { Button as MuiButton } from "@mui/material";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  size: 'small' |'medium' | 'large';
  variant: 'text' | 'outlined' | 'contained';
  margin: string
}

export const Button = ({
  label,
  backgroundColor,
  size,
  variant,
  margin
}: ButtonProps) => (
  <MuiButton sx={{ backgroundColor: backgroundColor, margin: margin }} variant={variant} size={size}>
    {label}
  </MuiButton>
);
