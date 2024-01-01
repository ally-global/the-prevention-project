import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

import Text from "@/components/Text";

const TitleAndParagraph = ({
  title,
  paragraph,
  height = `100%`,
  sx,
}: {
  title: ReactNode;
  paragraph: ReactNode;
  height?: string;
  sx?: SxProps;
}) => {
  return (
    <Box
      sx={{
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 0,
        mb: { xs: 4 },
        ...sx,
      }}
    >
      <Box
        sx={{
          p: 0,
        }}
      >
        <Text
          variant={"h4"}
          sx={{
            mb: { xs: 3, sm: 3, md: 4 },
            p: 0,
          }}
        >
          {title}
        </Text>
        <Text variant={"body1"}>{paragraph}</Text>
      </Box>
    </Box>
  );
};

export default TitleAndParagraph;
