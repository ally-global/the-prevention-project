import { Chapter } from "@/app/content/chapters";
import GradeHero from "@/sections/Heros/GradeHero";
import StandardLayout from "@/components/StandardLayout";
import { Suspense } from "react";
import ChapterMenu from "@/sections/ChapterSection";
import ContentSection from "@/sections/ContentSection";
import UpNext from "@/sections/UpNext";
import { Stack } from "@mui/material";
import WhatDoIDoSection from "@/sections/WhatDoIDoSection";
import HelpRightNowSection from "@/sections/HelpRightNowSection";

const GradePage = ({ chapters }: { chapters: Chapter[] }) => {
  return (
    <>
      <GradeHero
        title={chapters[0].content[0].title}
        subtitle={chapters[0].content[0].description}
        vimeoId={chapters[0].content[0].vimeoId}
      />
      <StandardLayout>
        <Suspense>
          <ChapterMenu
            chapters={chapters.map((chapter) => chapter.title).slice(1)}
          />
        </Suspense>
      </StandardLayout>
      <Suspense>
        <ContentSection chapters={chapters} />
      </Suspense>
      <UpNext
        chapterName={"Consent and healthy boundaries"}
        contentTitle={"Say it Simple"}
        contentColor={"Blue"}
      />
      <Stack
        id={"help-right-now"}
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
};

export default GradePage;
