import Hero from "@/components/Hero";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Stack } from "@mui/material";
import { ReactNode } from "react";

const GenericHero = ({
  text,
  subtext,
}: {
  text: string;
  subtext?: ReactNode;
}) => {
  return (
    <Hero
      sx={{
        background: "linear-gradient(to right, #673BDC, #00B8C5)",
        pb: {
          xs: 10,
          sm: 10,
          md: 15,
          lg: 15,
          xl: 15,
        },
      }}
    >
      <StandardLayout>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          spacing={4}
        >
          <Text
            variant="h2"
            sx={{
              maxWidth: "900px",
              textAlign: { xs: "left", sm: "center" },
            }}
          >
            {text}
          </Text>
          {subtext ? (
            <Text
              variant="body1"
              sx={{
                maxWidth: "900px",
                textAlign: { xs: "left", sm: "center" },
              }}
            >
              {subtext}
            </Text>
          ) : (
            <></>
          )}
        </Stack>
      </StandardLayout>
    </Hero>
  );
};

export default GenericHero;
