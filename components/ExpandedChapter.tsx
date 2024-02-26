import { Box, Stack } from "@mui/material";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { ReactNode, useState } from "react";
import AllyButton from "./AllyButton";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Text from "./Text";

const ExpandedChapter = ({
  content,
}: {
  content: {
    title: string;
    description?: ReactNode;
    vimeoId?: string;
    externalLinks?: { name: string; caption?: string; href: string }[];
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
          height: { xs: "48px", sm: "64px" },
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
          <Text variant={"button"} color={selected ? "White" : "Grey900"}>
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
        <Box
          sx={{
            backgroundColor: "Grey300",
            borderRadius: "16px",
            mb: { xs: 4 },
          }}
        >
          <VideoPlayer vimeoId={content[selected].vimeoId ?? ""} />
        </Box>
      </TwoColumnLayout>
    </Box>
  );
};

export default ExpandedChapter;
