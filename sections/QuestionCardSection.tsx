"use client";

import {
  AreYouAParentCard,
  AreYouAnEducatorCard,
} from "@/components/QuestionCards";
import { RenderOn } from "@/utils/deviceUtils";
import { Stack } from "@mui/material";

const QuestionCardSection = () => {
  return (
    <>
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
    </>
  );
};

export default QuestionCardSection;
