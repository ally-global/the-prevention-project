import {
  Chapter,
  chapters3to5,
  chapters6to7,
  chapters8to12,
} from "@/app/content/chapters";
import LibraryChapters from "@/components/LibraryChapters";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Box, Stack } from "@mui/material";

export enum Section {
  THREE_TO_FIVE = "3-5",
  SIX_TO_SEVEN = "6-7",
  EIGHT_TO_TWELVE = "8-12",
}
const sections = new Map<
  Section,
  { title: string; color: string; chapters: Chapter[] }
>([
  [
    Section.THREE_TO_FIVE,
    { title: "Grades 3-5", color: "PrimaryBlue", chapters: chapters3to5 },
  ],
  [
    Section.SIX_TO_SEVEN,
    { title: "Grades 6-7", color: "Blue", chapters: chapters6to7 },
  ],
  [
    Section.EIGHT_TO_TWELVE,
    { title: "Grades 8-12", color: "PrimaryPurple", chapters: chapters8to12 },
  ],
]);

const LibrarySection = ({ section }: { section: Section }) => {
  const { title, color, chapters } = sections.get(section)!;

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: `${color}`,
      }}
    >
      <StandardLayout>
        <Stack spacing={6}>
          <Text variant={"h3"}>{title}</Text>
          <LibraryChapters chapters={chapters} />
        </Stack>
      </StandardLayout>
    </Box>
  );
};

export default LibrarySection;
