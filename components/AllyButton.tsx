"use client";
import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import { MouseEvent, ReactNode } from "react";

const AllyButton = ({
  text,
  color,
  wide,
  children,
  sx,
  onClick,
  endIcon,
}: {
  text?: string;
  color?: string;
  wide?: boolean;
  sx?: SxProps;
  children?: ReactNode;
  onClick?: () => void;
  endIcon?: ReactNode;
}) => {
  return (
    <Button
      sx={{
        textAlign: "center",
        height: "36px",
        width: wide ? "100%" : "max-content",
        backgroundColor: color ?? `PrimaryPurple`,
        color: `White`,
        paddingX: 2,
        borderRadius: "24px",
        whiteSpace: "nowrap",
        "&:hover": {
          backgroundColor: color ?? `PrimaryPurple`,
          boxShadow: 4,
        },
        "&:active": {
          backgroundColor: color ?? `PrimaryPurple`,
          boxShadow: 6,
        },
        ...sx,
      }}
      onClick={(e) => (onClick ? onClick() : () => {})}
      endIcon={endIcon ?? <></>}
    >
      {text ?? children}
    </Button>
  );
};

export default AllyButton;
