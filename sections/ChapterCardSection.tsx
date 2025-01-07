import ChapterCard from "@/components/ChapterCard";
import StandardLayout from "@/components/StandardLayout";
import {
  Chapter,
  chapters3to5,
  chapters6to7,
  chapters8to12,
} from "@/content/chapters";
import { Box } from "@mui/material";

export enum GradeGroup {
  GRADES_3_TO_5 = "grades-3-to-5",
  GRADES_6_TO_7 = "grades-6-to-7",
  GRADES_8_TO_12 = "grades-8-to-12",
}

const ChapterCardSection = ({
  showChapters,
}: {
  showChapters: null | GradeGroup;
}) => {
  if (showChapters === null) {
    return <></>;
  }

  let data: Chapter[] = [];
  let slug: undefined | string;
  let backgroundColor: string;
  let boxShadowColor: string;

  if (showChapters === GradeGroup.GRADES_3_TO_5) {
    data = chapters3to5;
    slug = "grades3-5";
    backgroundColor = "PrimaryBlue";
    boxShadowColor = "#06919B";
  } else if (showChapters === GradeGroup.GRADES_6_TO_7) {
    data = chapters6to7;
    slug = "grades6-7";
    backgroundColor = "Blue";
    boxShadowColor = "#1855A0";
  } else {
    data = chapters8to12;
    slug = "grades8-12";
    backgroundColor = "PrimaryPurple";
    boxShadowColor = "#423591";
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        width: "100%",
        gap: 4,
      }}
    >
      {data.map((chapter, index) => {
        if (index === 0) {
          // Don't show introduction
          return <></>;
        }
        return (
          <ChapterCard
            key={`chapter-card-${index}`}
            chapterName={chapter.title}
            chapterNumber={index}
            sx={{
              backgroundColor,
              "&:hover": {
                boxShadow: `4px 4px 0px ${boxShadowColor}`,
                transition: "box-shadow 0.2s ease-in-out"
              },
            }}
            backgroundImageSrc={chapter.cardImage ?? ""}
            href={`/${slug}?chapter=${index}#chapter-menu`}
          />
        );
      })}
    </Box>
  );
};

export default ChapterCardSection;
