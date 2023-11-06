import * as React from "react";
import Box from "@mui/material/Box";

const StandardLayout = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) => {
  return (
    <Box
      {...rest}
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
      }}
    >
      {children}
    </Box>
  );
};

export default StandardLayout;
