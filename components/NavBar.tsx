"use client";
import { FC } from "react";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import Link from "next/link";
import { Typography } from "@mui/material";
import Image from "next/image";
import Logo from "@/public/logo.png";

export const NavItem = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    style={{
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    <Typography variant="button" color={`Grey900`}>
      {text.toUpperCase()}
    </Typography>
  </Link>
);

const NavBar: FC = () => {
  const { palette } = useTheme();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ bgcolor: palette.White, height: 72 }}
      px={{ xs: 3, sm: 6, md: 15, lg: 15, xl: 15 }}
    >
      <Box mr={{ xs: 0, sm: 1, md: 2.5, lg: 2.5, xl: 2.5 }}>
        <Link href="/">
          {/*TODO add higher res logo*/}
          <Image src={Logo} width={96} height={40} alt="Ally global logo" />
        </Link>
      </Box>
      <NavItem href={"/"} text="home" />
      <NavItem href={"/about"} text="about us" />
      <NavItem href={"/resources"} text="adult resources" />
      <NavItem href={"/library"} text="library" />
      {/*TODO add search*/}
      <Box ml={{ xs: 0, sm: 1, md: 2.5, lg: 2.5, xl: 2.5 }}></Box>
    </Box>
  );
};

export default NavBar;
