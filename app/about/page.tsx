"use client";
import PageBody from "@/components/PageBody";
import useTheme from "@mui/material/styles/useTheme";
import StandardLayout from "@/components/StandardLayout";
import Box from "@mui/material/Box";

export default function About() {
  const { palette } = useTheme();
  return (
    <PageBody>
      <Box>
        <StandardLayout>About page</StandardLayout>
      </Box>
    </PageBody>
  );
}
