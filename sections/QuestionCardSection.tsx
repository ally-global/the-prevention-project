"use client";

import {
  AreYouAParentCard,
  AreYouAnEducatorCard,
} from "@/components/QuestionCards";
import StandardLayout from "@/components/StandardLayout";
import { Box, Stack } from "@mui/material";

const QuestionCardSection = () => {
  return (
    <Box sx={{ paddingY: 10 }}>
      <StandardLayout>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <AreYouAParentCard />
          <AreYouAnEducatorCard />
        </Stack>
      </StandardLayout>
    </Box>
  );
};

export default QuestionCardSection;
