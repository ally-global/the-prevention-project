import * as React from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material";

const StandardLayout = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps;
}) => {
  return (
    <Box
      px={{
        xs: 3,
        sm: 6,
        md: 15,
        lg: 15,
        xl: 15,
      }}
      sx={{
        position: "relative",
        height: `100%`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default StandardLayout;
