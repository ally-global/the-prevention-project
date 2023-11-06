import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Logo from "@/public/logo.png";
import Drawer from "@mui/material/Drawer";
import { NavItem } from "./DesktopNav";

const MobileMenuItem = ({
  children,
  removeBorder,
}: {
  children: ReactNode;
  removeBorder?: boolean;
}) => {
  return (
    <Box
      sx={{
        height: "64px",
        width: "100%",
        display: "flex",
        alignItems: "stretch",
        borderBottom: removeBorder ? "none" : "1px solid",
        borderColor: `Grey300`,
        px: { xs: 3, sm: 6 },
        a: {
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
        },
      }}
    >
      {children}
    </Box>
  );
};

const MobileNav: FC = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        component="div"
        // @ts-ignore
        color="White"
        sx={{
          boxShadow: "none",
        }}
      >
        <Box
          display={`flex`}
          justifyContent={`space-between`}
          alignItems={`center`}
          height={`72px`}
          px={{
            xs: 3,
            sm: 6,
            md: 15,
            lg: 15,
            xl: 15,
          }}
        >
          <Link href="/">
            {/*TODO add higher res logo*/}
            <Image src={Logo} width={96} height={40} alt="Ally global logo" />
          </Link>

          {open ? (
            <IconButton onClick={handleDrawerClose} sx={{ mr: -1 }}>
              <CloseIcon sx={{ color: `Grey900` }} />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ mr: -1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="top"
        open={open}
        PaperProps={{
          sx: {
            marginTop: "64px",
            maxHeight: "calc(100% - 64px)",
            boxShadow:
              "0px 2px 4px -4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px -10px rgba(0, 0, 0, 0.12)",
          },
        }}
        SlideProps={{
          timeout: 0,
        }}
      >
        <MobileMenuItem>
          <NavItem href={`/`} text={`home`} />
        </MobileMenuItem>
        <MobileMenuItem>
          <NavItem href={`/about`} text={`about`} />
        </MobileMenuItem>
        <MobileMenuItem>
          <NavItem href={`/resources`} text={`adult resources`} />
        </MobileMenuItem>
        <MobileMenuItem removeBorder>
          <NavItem href={`/library`} text={`library`} />
        </MobileMenuItem>
      </Drawer>
    </>
  );
};

export default MobileNav;
