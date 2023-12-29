import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Logo from "@/public/logo.png";
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
      {text.toUpperCase()}
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
          {/*TODO higher res logo*/}
          <Image src={Logo} width={96} height={40} alt="Ally global logo" />
        </Link>
      </Box>
      <NavItem href={"/about"} text="about us" />
      <NavItem href={"/library"} text="library" />
      <NavItem href={"/"} text="get help now" />
      <Box ml={{ xs: 0, sm: 1, md: 2.5, lg: 2.5, xl: 2.5 }}>
        <AllyButton text={"CHOOSE YOUR GRADE"} />
      </Box>
    </Box>
  );
};

export default DesktopNav;
