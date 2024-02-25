"use client";
import { FC } from "react";
import Box from "@mui/material/Box";

import MobileNav from "@/components/NavBar/MobileNav";
import DesktopNav from "@/components/NavBar/DesktopNav";
import { Container } from "@mui/material";
import { RenderOn } from "@/utils/deviceUtils";

const NavBar: FC = () => {
  return (
    <Box
      sx={{
        zIndex: 9,
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
          background: "linear-gradient(to right, #673BDC, #00B8C5)",
          height: "72px",
        }}
      >
        <RenderOn breakPoints={["md", "lg", "xl"]}>
          <DesktopNav />
        </RenderOn>
        <RenderOn breakPoints={["xs", "sm"]}>
          <MobileNav />
        </RenderOn>
      </Container>
    </Box>
  );
};

export default NavBar;
