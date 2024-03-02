"use client";

import NumberCard, { numberCardInfo } from "@/components/NumberCard";
import StandardLayout, { standardSpacing } from "@/components/StandardLayout";
import Text from "@/components/Text";
import useDevice from "@/hooks/useDevice";
import { Box } from "@mui/material";

const WhatDoIDoSection = ({ overflow }: { overflow?: boolean }) => {
  const { smScreen } = useDevice();
  return (
    <Box id={"what-to-do"}>
      <StandardLayout sx={{ paddingTop: 9 }}>
        <Text
          variant="h4"
          sx={{ textAlign: "center" }}
          sxMobile={{ textAlign: "left" }}
        >
          What do I do if someone tells me they are {smScreen ? "" : <br />}
          being exploited or abused?
        </Text>
      </StandardLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: overflow ? "flex-start" : "center",
          flexWrap: overflow ? "nowrap" : "wrap",
          overflowX: overflow ? "scroll" : "auto",
          gap: overflow ? 2 : 0,
          "-webkit-scrollbar": {
            display: "none",
          },
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          px: overflow ? {} : standardSpacing,
          pt: 5,
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
    </Box>
  );
};

export default WhatDoIDoSection;
