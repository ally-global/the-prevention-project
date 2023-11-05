import { ReactNode } from "react";
import Box from "@mui/material/Box";

import NavBar from "@/components/NavBar";
import ThemeRegistry from "@/utils/ThemeRegistry";

export default function PageBody({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeRegistry options={{ key: "mui-theme" }}>
        <Box>
          <NavBar></NavBar>
          {children}
        </Box>
      </ThemeRegistry>
    </>
  );
}
