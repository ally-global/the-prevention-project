import { Box } from "@mui/material";
import { ReactNode } from "react";

const IconCircle = ({
  icon,
  backgroundColor,
}: {
  icon: ReactNode;
  backgroundColor: string;
}) => {
  return (
    <Box
      sx={{
        width: { xs: "48px", sm: "48px", md: "56px" },
        height: { xs: "48px", sm: "48px", md: "56px" },
        borderRadius: "28px",
        backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {icon}
    </Box>
  );
};

export default IconCircle;
