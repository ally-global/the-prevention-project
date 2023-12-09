import { ReactNode } from "react";
import Box from "@mui/material/Box";
import NavBar from "@/components/NavBar/NavBar";

export default function PageBody({ children }: { children: ReactNode }) {
  return (
    <Box>
      <NavBar></NavBar>
      {children}
    </Box>
  );
}
