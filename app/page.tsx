import { Box } from "@mui/material";

import HomeHero from "@/sections/Heros/HomeHero";
import QuestionCardSection from "@/sections/QuestionCardSection";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import HelpRightNowSection from "@/sections/HelpRightNowSection";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <HomeHero />
      {/* Two column with purple background section */}
      <QuestionCardSection />
      <Stack
        spacing={9}
        sx={{
          backgroundImage: "linear-gradient(to bottom right, #673BDC, #00B8C5)",
        }}
      >
        <WhatDoIDoSection />
        <HelpRightNowSection />
      </Stack>
    </>
  );
}
