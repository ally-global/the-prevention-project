"use client";
import { FC } from "react";
import Box from "@mui/material/Box";

import MobileNav from "@/components/NavBar/MobileNav";
import DesktopNav from "@/components/NavBar/DesktopNav";
import StandardLayout from "@/components/StandardLayout";
import { Container } from "@mui/material";
import { RenderOn } from "@/utils/deviceUtils";

const NavBar: FC = () => {
  return (
    <Box
      sx={{
        height: "72px",
        zIndex: 9,
        position: "fixed",
        top: 0,
        display: "flex",
        alignItems: "space-between",
        width: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: "0px",
          paddingRight: "0px",
          background: "linear-gradient(to right, #673BDC, #00B8C5)",
        }}
      >
        <StandardLayout sx={{ width: "100%" }}>
          <RenderOn breakPoints={["md", "lg", "xl"]}>
            <DesktopNav />
          </RenderOn>
          <RenderOn breakPoints={["xs", "sm"]}>
            <MobileNav />
          </RenderOn>
        </StandardLayout>
      </Container>
    </Box>
  );
};

export default NavBar;
