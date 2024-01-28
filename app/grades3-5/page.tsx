"use client";

import HelpRightNowSection from "@/sections/HelpRightNowSection";
import GradeHero from "@/sections/Heros/GradeHero";
import UpNext from "@/sections/UpNext";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { chapters3to5 } from "../content/chapters";
import ChapterMenu from "@/sections/ChapterSection";
import VideoMenu from "@/components/VideoMenu";
import StandardLayout from "@/components/StandardLayout";

export default function Page() {
  return (
    <>
      <GradeHero />
      <ChapterMenu
        chapters={chapters3to5.map((chapter) => chapter.title).slice(1)}
      />
      <Box sx={{ backgroundColor: "White", height: "400px" }}>
        <StandardLayout>
          <Stack spacing={2} sx={{ pt: 2 }}>
            <VideoMenu content={chapters3to5[1].content.map((c) => c.title)} />
          </Stack>
        </StandardLayout>
      </Box>
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
