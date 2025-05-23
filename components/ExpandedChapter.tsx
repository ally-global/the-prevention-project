/* eslint-disable @next/next/no-sync-scripts */

import { Box, Stack } from "@mui/material";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { ReactNode, useState } from "react";
import AllyButton from "./AllyButton";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Text from "./Text";
import Link from "next/link";

const ExpandedChapter = ({
  content,
  chapterDownloadUrl,
}: {
  chapterDownloadUrl?: string;
  content: {
    title: string;
    description?: ReactNode;
    vimeoId?: string;
    vimeoDownloadUrl?: string;
    pdfUrl?: string;
    externalLinks?: { name: string; caption?: string; href: string }[];
    backgroundImage?: string;
  }[];
}) => {
  const SectionChip = ({
    title,
    id,
    selected,
  }: {
    title: string;
    id: number;
    selected: boolean;
  }) => {
    return (
      <AllyButton
        onClick={() => {
          setSelected(id);
        }}
        color={selected ? "PrimaryBlue" : "Grey300"}
        sx={{
          width: "100%",
          height: { xs: "48px", sm: "64px", md: "fit-content" },
          minHeight: { xs: "48px", sm: "64px" },
          textWrap: "pretty",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100% !important",
            px: 2,
          }}
        >
          <Text variant={"body1"} color={selected ? "White" : "Grey900"}>
            {title}
          </Text>
          <PlayCircleFilledIcon
            sx={{ color: selected ? "White" : "PrimaryBlue" }}
          />
        </Box>
      </AllyButton>
    );
  };
  const [selected, setSelected] = useState<number>(0);
  return (
    <Box sx={{ pb: 4, px: 1 }}>
      <TwoColumnLayout
        columnWrapOrderOnMobile={ColumnWrapOrder.REVERSE}
        leftCol={4}
        rightCol={7}
        pb={4}
      >
        <Stack
          spacing={1}
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {content.map((section, index) => {
            return (
              <SectionChip
                title={section.title}
                id={index}
                key={index}
                selected={selected === index}
              />
            );
          })}
        </Stack>
        <Box sx={{ position: "relative" }}>
          {content[selected].vimeoId && (
            <Box
              sx={{
                backgroundColor: "Grey300",
                borderRadius: "16px",
                mb: { xs: 4 },
              }}
            >
              <VideoPlayer vimeoId={content[selected].vimeoId!} />
            </Box>
          )}
          {content[selected].pdfUrl && (
            <Box
              sx={{
                mb: 3,
                ...(content[selected].backgroundImage
                  ? {
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${content[selected].backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }
                  : {
                      backgroundColor: "Grey300",
                    }),
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: { xs: "240px", sm: "396px" },
              }}
            >
              {/* <Link
                target="_blank"
                href={content[selected].pdfUrl!}
                style={{ textDecoration: "none" }}
              >
                <AllyButton
                  sx={{
                    ...(content[selected].backgroundImage) && {
                      boxShadow: `0 2px 4px #BDBDBD`,}
                  }}
                  text={"Download PDF"}
                  color={"PrimaryBlue"}
                  endIcon={<CloudDownloadOutlinedIcon />}
                />
              </Link> */}
            </Box>
          )}
        </Box>
      </TwoColumnLayout>
      <Stack
        sx={{
          mt: { xs: 2, sm: 2, md: 0 },
          display: "flex",
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-end",
          },
          gap: 1,
        }}
      >
        <Box sx={{ backgroundColor: "#FFFFC5", padding: 2, borderRadius: 4 }}>
          <Text variant={"body2"} color={"Grey800"}>
            Downloads are temporarily unavailable
          </Text>
        </Box>
        {/* {content[selected].vimeoDownloadUrl && (
          <Link
            target="_blank"
            href={content[selected].vimeoDownloadUrl!}
            style={{ textDecoration: "none" }}
          >
            <AllyButton
              text={"DOWNLOAD VIDEO"}
              color="PrimaryBlue"
              endIcon={<CloudDownloadOutlinedIcon />}
            />
          </Link>
        )} */}
        {/* {chapterDownloadUrl && (
          <Link
            target="_blank"
            href={chapterDownloadUrl}
            style={{ textDecoration: "none" }}
          >
            <AllyButton
              text="DOWNLOAD FULL CHAPTER"
              color={"PrimaryBlue"}
              endIcon={<CloudDownloadOutlinedIcon />}
            />
          </Link>
        )} */}
      </Stack>
    </Box>
  );
};

export default ExpandedChapter;
