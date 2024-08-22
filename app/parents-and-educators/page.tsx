import HelpRightNowSection from "@/sections/HelpRightNowSection";
import GenericHero from "@/sections/Heros/GenericHero";
import LibrarySection, { Section } from "@/sections/LibrarySection";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import { Stack } from "@mui/material";

export default function Library() {
  return (
    <>
      <GenericHero text="Quickly find the topic you're looking for." />
      <LibrarySection section={Section.THREE_TO_FIVE} />
      <LibrarySection section={Section.SIX_TO_SEVEN} />
      <LibrarySection section={Section.EIGHT_TO_TWELVE} />
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
