import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const tiles = [
  {
    name: "Canadian Human Trafficking Hotline (24/7 + Text)",
    caption: "HUMAN TRAFFICKING",
    href: "",
  },
  {
    name: "Kids Help Phone (24/7 + Text)",
    caption: "MENTAL HEALTH",
    href: "",
  },
  {
    name: "Cybertip",
    caption: "ONLINE EXPLOITATION",
    href: "",
  },
  {
    name: "NeedHelpNow",
    caption: "CYBERBULLYING & IMAGE SHARING CONCERNS",
    href: "",
  },
  {
    name: "PSSTWorld",
    caption: "VIOLENCE REPORTING TOOL FOR SCHOOLS",
    href: "",
  },
];

const ExternalLinkTile = ({
  name,
  caption,
  href,
}: {
  name: string;
  caption: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: "none", margin: "8px" }}
      target="_blank"
    >
      <Box
        sx={{
          width: "328px",
          height: "112px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "PrimaryPurple",
          padding: 2,
          borderRadius: "16px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h6"}>{name}</Typography>
          <Typography variant={"caption"} color={"PrimaryBlue"}>
            {caption}
          </Typography>
        </Stack>
        <ArrowOutwardOutlinedIcon
          fontSize="large"
          sx={{ color: "PrimaryBlue" }}
        />
      </Box>
    </Link>
  );
};

export default ExternalLinkTile;
