"use client";

import NumberCard, { numberCardInfo } from "@/components/NumberCard";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import useDevice from "@/hooks/useDevice";
import { Box, Stack } from "@mui/material";

const WhatDoIDoSection = ({ overflow }: { overflow?: boolean }) => {
  const { smScreen } = useDevice();
  return (
    <Box id={"what-to-do"}>
      <StandardLayout sx={{ paddingTop: 9 }}>
        <Stack spacing={5}>
          <Text
            variant="h4"
            sx={{ textAlign: "center" }}
            sxMobile={{ textAlign: "left" }}
          >
            What do I do if someone tells me they are {smScreen ? "" : <br />}
            being exploited or abused?
          </Text>

          <Box
            sx={{
              display: "flex",
              justifyContent: overflow ? "flex-start" : "center",
              flexWrap: overflow ? "nowrap" : "wrap",
              overflowX: overflow ? "scroll" : "auto",
            }}
          >
            {numberCardInfo.map((card, i) => (
              <NumberCard
                key={i}
                number={card.number}
                color={card.color}
                statement={card.statement}
                subtext={card.subtext}
                maxContent={!overflow}
              />
            ))}
          </Box>
        </Stack>
      </StandardLayout>
    </Box>
  );
};

export default WhatDoIDoSection;
