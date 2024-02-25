import Donate from "@/sections/Donate";
import HelpRightNowSection from "@/sections/HelpRightNowSection";
import GenericHero from "@/sections/Heros/GenericHero";
import LearnMore from "@/sections/LearnMore";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import WhoWeAreSection from "@/sections/WhoWeAreSection";
import { Stack } from "@mui/material";
export default function About() {
  return (
    <>
      <GenericHero
        text={"About us"}
        subtext={
          "We believe that every young person in Canada deserves access to light-hearted, age-appropriate learning to keep themselves and others safe from exploitation."
        }
      />
      <WhoWeAreSection />
      <LearnMore />
      <Donate />
      <Stack
        spacing={9}
        sx={{
          backgroundImage: "linear-gradient(to bottom right, #673BDC, #00B8C5)",
        }}
      >
        <WhatDoIDoSection overflow />
        <HelpRightNowSection />
      </Stack>
    </>
  );
}
