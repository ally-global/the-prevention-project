import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Text from "./Text";

const ChapterCard = () => {
  return (
    <Stack
      sx={{
        width: "250px",
        height: "250px",
        borderRadius: 3,
        margin: 3,
        backgroundColor: "PrimaryPurple",
        gap: 0,
      }}
    >
      <Box>
        <Image
          width={250}
          height={133}
          alt=""
          src={
            "/images/chapter-cards/Gr3-5_Ch1_Consent and Healthy Boundaries.jpg"
          }
          style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
        />
      </Box>
      <Stack
        sx={{
          paddingX: 2,
          paddingY: 1,
        }}
        gap={1}
      >
        <Text variant="caption" color="White" sx={{ fontWeight: "bold" }}>
          CHAPTER 1
        </Text>
        <Text variant="body1" color="White" sx={{ fontWeight: "bold" }}>
          Consent and Healthy Boundaries
        </Text>
      </Stack>
    </Stack>
  );
};

export default ChapterCard;
