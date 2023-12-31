import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Box } from "@mui/material";

export enum Section {
  THREE_TO_FIVE = "3-5",
  SIX_TO_SEVEN = "6-7",
  EIGHT_TO_TWELVE = "8-12",
}

const sections = new Map<
  Section,
  { title: string; color: string; chapters: any }
>([
  [
    Section.THREE_TO_FIVE,
    { title: "Grades 3-5", color: "PrimaryBlue", chapters: [] },
  ],
  [Section.SIX_TO_SEVEN, { title: "Grades 6-7", color: "Blue", chapters: [] }],
  [
    Section.EIGHT_TO_TWELVE,
    { title: "Grades 8-12", color: "PrimaryPurple", chapters: [] },
  ],
]);

const LibrarySection = ({ section }: { section: Section }) => {
  const { title, color, chapters } = sections.get(section)!;

  return (
    <Box
      sx={{
        height: "200px",
        py: 4,
        backgroundColor: `${color}`,
      }}
    >
      <StandardLayout>
        <Text variant={"h3"}>{title}</Text>
      </StandardLayout>
    </Box>
  );
};

export default LibrarySection;
