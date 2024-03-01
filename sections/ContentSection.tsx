import { Box, Stack } from "@mui/material";
import VideoPlayer from "@/components/VideoPlayer";
import StandardLayout from "@/components/StandardLayout";
import VideoMenu from "@/components/VideoMenu";
import { useSearchParams } from "next/navigation";
import { Chapter } from "@/content/chapters";
import ExternalLinkTile from "@/components/ExternalLinkTile";
import Text from "@/components/Text";
import PdfViewer from "@/components/PdfViewer";
import Link from "next/link";
import AllyButton from "@/components/AllyButton";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { RenderOn } from "@/utils/deviceUtils";

const ContentSection = ({ chapters }: { chapters: Chapter[] }) => {
  const searchParams = useSearchParams();
  const chapterParam = searchParams.get("chapter");
  const sectionParam = searchParams.get("section");

  const chapter = chapterParam ? Number(chapterParam) : 1;
  const section = sectionParam ? Number(sectionParam) : 1;

  const selectedChapterSection = chapters[chapter].content[section - 1];

  return (
    <>
      <Box sx={{ backgroundColor: "White", pb: { xs: 4, sm: 10, md: 20 } }}>
        <StandardLayout>
          <Stack spacing={2} sx={{ pt: 2 }}>
            <VideoMenu
              content={chapters[chapter].content.map((c) => c.title)}
            />
            {selectedChapterSection.vimeoId && (
              <VideoPlayer vimeoId={selectedChapterSection.vimeoId} />
            )}
            {selectedChapterSection.pdfUrl && (
              <PdfViewer pathToFile={selectedChapterSection.pdfUrl} />
            )}
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: { xs: 0, sm: 4 },
              pt: { xs: 4, sm: 8 },
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: 4,
            }}
          >
            <Stack
              spacing={2}
              sx={{ maxWidth: { xs: "100%", sm: "100%", md: "600px" } }}
            >
              <Text variant={"h4"} color={"PrimaryPurple"}>
                {selectedChapterSection.title}
              </Text>
              {selectedChapterSection.pdfUrl && (
                <RenderOn breakPoints={["xs"]}>
                  <Link target="_blank" href={selectedChapterSection.pdfUrl}>
                    <AllyButton
                      text={"Download PDF"}
                      endIcon={<CloudDownloadOutlinedIcon />}
                      sx={{ mb: 3 }}
                    />
                  </Link>
                </RenderOn>
              )}
              <Text variant={"body1"} color={"Grey900"}>
                {selectedChapterSection.description}
              </Text>
            </Stack>
            <Stack spacing={2}>
              {selectedChapterSection.externalLinks?.map((link, index) => (
                <ExternalLinkTile
                  key={index}
                  name={link.name}
                  caption={link.caption ?? ""}
                  href={link.href}
                  light
                />
              ))}
            </Stack>
          </Box>
          {selectedChapterSection.facilitationNote ? (
            <Box
              sx={{
                backgroundColor: "Grey200",
                padding: 4,
                mt: 4,
                mx: { xs: 0, sm: 4 },
                borderRadius: "8px",
              }}
            >
              <Text
                variant={"body1"}
                color={"Grey900"}
                sx={{ fontStyle: "italic" }}
              >
                {selectedChapterSection.facilitationNote}
              </Text>
            </Box>
          ) : (
            <></>
          )}
        </StandardLayout>
      </Box>
    </>
  );
};

export default ContentSection;
