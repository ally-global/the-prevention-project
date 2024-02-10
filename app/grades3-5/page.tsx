"use client";

import HelpRightNowSection from "@/sections/HelpRightNowSection";
import GradeHero from "@/sections/Heros/GradeHero";
import UpNext from "@/sections/UpNext";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import Stack from "@mui/material/Stack";
import { chapters3to5 } from "../content/chapters";
import ChapterMenu from "@/sections/ChapterSection";
import StandardLayout from "@/components/StandardLayout";
import { Suspense } from "react";
import ContentSection from "@/components/ContentSection";

export default function Page() {
  return (
    <>
      <GradeHero
        title={chapters3to5[0].content[0].title}
        subtitle={chapters3to5[0].content[0].description}
        vimeoId={chapters3to5[0].content[0].vimeoId}
      />
      <StandardLayout>
        <Suspense>
          <ChapterMenu
            chapters={chapters3to5.map((chapter) => chapter.title).slice(1)}
          />
        </Suspense>
      </StandardLayout>
      <ContentSection chapters={chapters3to5} />
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
