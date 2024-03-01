import { Box } from "@mui/material";

import Text from "@/components/Text";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, #673BDC, #00B8C5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Text variant={"h1"} color={"White"} sx={{ textAlign: "center" }}>
          The Prevention Project
        </Text>
        <Text variant={"h4"} sx={{ textAlign: "center" }}>
          Coming March 4th
        </Text>
      </Box>
    </>
  );
}
