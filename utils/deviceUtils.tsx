import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import React from "react";

export type brekapoints = "xs" | "sm" | "md" | "lg" | "xl";

export const RenderOn = ({
  children,
  breakPoints,
  sx,
}: {
  breakPoints: brekapoints[];
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Box
      component={`span`}
      sx={{
        display: {
          xs: breakPoints.includes("xs") ? "initial" : "none",
          sm: breakPoints.includes("sm") ? "initial" : "none",
          md: breakPoints.includes("md") ? "initial" : "none",
          lg: breakPoints.includes("lg") ? "initial" : "none",
          xl: breakPoints.includes("xl") ? "initial" : "none",
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
