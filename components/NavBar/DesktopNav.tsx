import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AllyButton from "@/components/AllyButton";

export const NavItem = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    style={{
      textDecoration: "none",
      whiteSpace: "nowrap",
    }}
  >
    <Typography variant="button" color={`White`}>
      {text}
    </Typography>
  </Link>
);

const DesktopNav: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: 72 }}
    >
      <Box mr={{ xs: 0, sm: 1, md: 2.5, lg: 2.5, xl: 2.5 }}>
        <Link href="/">
          <Image
            src={"/images/ally-exed-logo.png"}
            width={96}
            height={40}
            alt="Ally global logo"
          />
        </Link>
      </Box>
      <NavItem href={"/about"} text="ABOUT US" />
      <NavItem href={"/library"} text="LIBRARY" />
      <NavItem href={"/"} text="GET HELP NOW" />
      <Box ml={{ xs: 0, sm: 1, md: 2.5, lg: 2.5, xl: 2.5 }}>
        <Link href={"/"}>
          <AllyButton text={"CHOOSE YOUR GRADE"} />
        </Link>
      </Box>
    </Box>
  );
};

export default DesktopNav;
