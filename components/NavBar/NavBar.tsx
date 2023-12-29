"use client";
import { FC } from "react";
import Box from "@mui/material/Box";

import MobileNav from "@/components/NavBar/MobileNav";
import DesktopNav from "@/components/NavBar/DesktopNav";
import StandardLayout from "@/components/StandardLayout";
import { Container } from "@mui/material";

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
    <Container
      maxWidth="xl"
      sx={{
        paddingLeft: "0px",
        paddingRight: "0px",
        backgroundColor: "Grey300",
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
  );
};

export default NavBar;
