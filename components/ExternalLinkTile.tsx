import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const tiles = [
  {
    name: "Canadian Human Trafficking Hotline (24/7 + Text)",
    caption: "HUMAN TRAFFICKING",
    href: "https://www.canadianhumantraffickinghotline.ca/",
  },
  {
    name: "Kids Help Phone (24/7 + Text)",
    caption: "MENTAL HEALTH",
    href: "https://kidshelpphone.ca/urgent-help",
  },
  {
    name: "Cybertip",
    caption: "ONLINE EXPLOITATION",
    href: "https://www.cybertip.ca/en/report/",
  },
  {
    name: "NeedHelpNow",
    caption: "CYBERBULLYING & IMAGE SHARING CONCERNS",
    href: "https://needhelpnow.ca/en/contact/",
  },
  {
    name: "PSSTWorld",
    caption: "VIOLENCE REPORTING TOOL FOR SCHOOLS",
    href: "https://www.psstworld.com/report-it",
  },
];

const ExternalLinkTile = ({
  name,
  caption,
  href,
  light,
}: {
  name: string;
  caption: string;
  href: string;
  light?: boolean;
}) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "328px" },
        height: "112px",
        backgroundColor: light ? "Grey300" : "PrimaryPurple",
        borderRadius: "16px",
      }}
    >
      <Link href={href} style={{ textDecoration: "none" }} target="_blank">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant={"h6"}
              color={light ? "PrimaryPurple" : "White"}
            >
              {name}
            </Typography>
            <Typography
              variant={"caption"}
              color={light ? "Grey900" : "PrimaryBlue"}
            >
              {caption.toUpperCase()}
            </Typography>
          </Stack>
          <ArrowOutwardOutlinedIcon
            fontSize="large"
            sx={{ color: light ? "PrimaryPurple" : "PrimaryBlue" }}
          />
        </Box>
      </Link>
    </Box>
  );
};

export default ExternalLinkTile;
