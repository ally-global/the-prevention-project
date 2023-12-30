"use client";
import { FC, useMemo } from "react";
import Box from "@mui/material/Box";

import MobileNav from "@/components/NavBar/MobileNav";
import DesktopNav from "@/components/NavBar/DesktopNav";
import StandardLayout from "@/components/StandardLayout";
import { Container } from "@mui/material";
import { useWindowScroll } from "@/hooks/useWindowScroll";

export const RenderOnSmallScreen = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box
    component={`span`}
    sx={{
      display: {
        xs: "initial",
        sm: "initial",
        md: "none",
        lg: "none",
        xl: "none",
      },
    }}
  >
    {children}
  </Box>
);

export const RenderOnDesktop = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Box
    component={`span`}
    sx={{
      display: {
        xs: "none",
        sm: "none",
        md: "initial",
        lg: "initial",
        xl: "initial",
      },
    }}
  >
    {children}
  </Box>
);

const NavBar: FC = () => {
  return (
    <Box
      sx={{
        height: "72px",
        zIndex: 9,
        position: "fixed",
        top: 0,
        background: "linear-gradient(to right, #673BDC, #00B8C5)",
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
        }}
      >
        <StandardLayout sx={{ height: "72px", width: "100%" }}>
          <RenderOnDesktop>
            <DesktopNav />
          </RenderOnDesktop>
          <RenderOnSmallScreen>
            <MobileNav />
          </RenderOnSmallScreen>
        </StandardLayout>
      </Container>
    </Box>
  );
};

export default NavBar;
