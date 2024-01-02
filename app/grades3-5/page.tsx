import HelpRightNowSection from "@/sections/HelpRightNowSection";
import GradeHero from "@/sections/Heros/GradeHero";
import UpNext from "@/sections/UpNext";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <>
      <GradeHero />
      <UpNext
        chapterName={"Consent and healthy boundaries"}
        contentTitle={"Say it Simple"}
        contentColor={"Blue"}
      />
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
