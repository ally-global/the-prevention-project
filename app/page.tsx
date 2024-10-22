import VideoHero from "@/sections/Heros/VideoHero";
import QuestionCardSection from "@/sections/QuestionCardSection";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import HelpRightNowSection from "@/sections/HelpRightNowSection";
import { Stack } from "@mui/material";
import PurpleHeading from "@/sections/PurpleHeading";

export default function Home() {
  return (
    <>
      <VideoHero />
      <PurpleHeading />
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
