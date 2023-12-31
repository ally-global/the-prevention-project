"use client";

import {
  AreYouAParentCard,
  AreYouAnEducatorCard,
} from "@/components/QuestionCards";
import { RenderOn } from "@/utils/deviceUtils";
import { Box, Stack } from "@mui/material";

const QuestionCardSection = () => {
  return (
    <Box sx={{ paddingY: 10 }}>
      <RenderOn breakPoints={["md", "lg", "xl"]}>
        <Stack direction={"row"} justifyContent={"center"} spacing={4}>
          <AreYouAParentCard />
          <AreYouAnEducatorCard />
        </Stack>
      </RenderOn>

      <RenderOn breakPoints={["xs", "sm"]}>
        <AreYouAParentCard wide />
        <AreYouAnEducatorCard wide />
      </RenderOn>
    </Box>
  );
};

export default QuestionCardSection;
