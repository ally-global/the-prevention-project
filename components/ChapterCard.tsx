import { Box, Stack, SxProps } from "@mui/material";
import Image from "next/image";
import Text from "./Text";

const ChapterCard = ({
  chapterNumber,
  chapterName,
  backgroundImageSrc,
  href,
  sx,
}: {
  chapterNumber: number;
  chapterName: string;
  backgroundImageSrc: string;
  href: string;
  sx?: SxProps;
}) => {
  return (
    <Box
      component="a"
      href={href}
      sx={{ textDecoration: "none", width: { xs: "100%", sm: "250px" } }}
    >
      <Stack
        sx={{
          width: { xs: "100%", sm: "250px" },
          height: { xs: "240px", sm: "250px" },
          borderRadius: 3,
          backgroundColor: "PrimaryPurple",
          gap: 0,
          ...sx,
        }}
      >
        <Box
          sx={{
            height: "131px",
            width: { xs: "100%", sm: "250px" },
            overflow: "hidden",
          }}
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            objectFit={"contain"}
            src={backgroundImageSrc}
            style={{
              width: "100%",
              height: "auto",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              zIndex: 1,
            }}
          />
        </Box>
        <Stack
          sx={{
            paddingX: 2,
            paddingY: 1,
            height: { xs: "84px", sm: "121px" },
          }}
          gap={1}
        >
          <Text variant="caption" color="White" sx={{ fontWeight: "bold" }}>
            {`CHAPTER ${chapterNumber} `}
          </Text>
          <Text variant="body1" color="White" sx={{ fontWeight: "bold" }}>
            {chapterName}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChapterCard;
