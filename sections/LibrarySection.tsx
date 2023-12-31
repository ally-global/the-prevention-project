import LibraryChapters from "@/components/LibraryChapters";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { StackedBarChart } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

const chapters1 = [
  { title: "Introduction", content: [] },
  {
    title: "Consent and Healthy Boundaries",
    content: [
      { title: "What's the Big Deal?", videoURL: "" },
      { title: "Say it Simple", videoURL: "" },
      { title: "True or False", videoURL: "" },
      { title: "Imagine This", videoURL: "" },
      { title: "Knowledge Snapshot", videoURL: "" },
    ],
  },
  { title: "The Internet", content: [] },
  { title: "Information Sharing Online", content: [] },
  { title: "Unsafe People and Unhealthy Social Accounts", content: [] },
  { title: "Being a Safe Person", content: [] },
];

const chapters2 = [
  { title: "Introduction", content: [] },
  { title: "Consent and Healthy Boundaries", content: [] },
  { title: "Sexual Exploitation", content: [] },
  { title: "Sexting and Peer Exploitation", content: [] },
  { title: "About the Internet and Information Sharing", content: [] },
  { title: "Sextortion", content: [] },
  { title: "Predatory People and Grooming", content: [] },
  { title: "Human Trafficking", content: [] },
];

const chapters3 = [
  { title: "Introduction", content: [] },
  { title: "Consent and Healthy Boundaries", content: [] },
  { title: "Sexual Exploitation", content: [] },
  { title: "Sexting and Peer Exploitation", content: [] },
  { title: "Exploiters and Predators", content: [] },
  { title: "Internet Dynamics and Grooming", content: [] },
  { title: "Sextortion", content: [] },
  { title: "Pimps and Trafficking", content: [] },
  { title: "High Risk Behaviours", content: [] },
];

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
    { title: "Grades 3-5", color: "PrimaryBlue", chapters: chapters1 },
  ],
  [
    Section.SIX_TO_SEVEN,
    { title: "Grades 6-7", color: "Blue", chapters: chapters2 },
  ],
  [
    Section.EIGHT_TO_TWELVE,
    { title: "Grades 8-12", color: "PrimaryPurple", chapters: chapters3 },
  ],
]);

const LibrarySection = ({ section }: { section: Section }) => {
  const { title, color, chapters } = sections.get(section)!;

  return (
    <Box
      sx={{
        py: 4,
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
