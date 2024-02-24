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
      sx={{ px: 4, height: "72px" }}
    >
      <Box sx={{ mr: 10 }}>
        <Link href="/">
          <Image
            src={"/images/ally-exed-logo.png"}
            width={115}
            height={51}
            alt="Ally global logo"
          />
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: 10 }}>
        <NavItem href={"/about"} text="ABOUT US" />
        <NavItem href={"/library"} text="LIBRARY" />
        <NavItem href={"/"} text="GET HELP NOW" />
      </Box>
      <Box>
        <Link href={"/"}>
          <AllyButton text={"CHOOSE YOUR GRADE"} />
        </Link>
      </Box>
    </Box>
  );
};

export default DesktopNav;
