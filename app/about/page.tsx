"use client";
import PageBody from "@/components/PageBody";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

export default function About() {
  const { palette } = useTheme();
  return (
    <PageBody>
      <Box sx={{ backgroundColor: palette.Purple, height: "580px" }}>
        <Typography variant="h2" color={palette.White}>
          About Us
        </Typography>
      </Box>
    </PageBody>
  );
}
