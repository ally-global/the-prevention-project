import { Box } from "@mui/material";

import HomeHero from "@/sections/Heros/HomeHero";
import QuestionCardSection from "@/sections/QuestionCardSection";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* Two column with purple background section */}
      <QuestionCardSection />
      <Box
        sx={{
          backgroundImage: "linear-gradient(to bottom right, #673BDC, #00B8C5)",
        }}
      >
        <WhatDoIDoSection />
        {/* What if I need help right now section */}
      </Box>
    </>
  );
  {
    /*
      <Box

      >

        <Typography variant="h4" textAlign={"center"} pt={10}>
          What if I need help right now?
        </Typography>
        <Typography variant="body1" textAlign={"center"} py={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box> */
  }
}
