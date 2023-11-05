"use client";
import { FC } from "react";
import Box from "@mui/material/Box";

import MobileNav from "@/components/MobileNav";
import DesktopNav from "@/components/DesktopNav";

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
    <Box height={"72px"}>
      <RenderOnDesktop>
        <DesktopNav />
      </RenderOnDesktop>
      <RenderOnSmallScreen>
        <MobileNav />
      </RenderOnSmallScreen>
    </Box>
  );
};

export default NavBar;
