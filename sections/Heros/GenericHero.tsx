import Hero from "@/components/Hero";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Box } from "@mui/material";

const GenericHero = ({ text }: { text: string }) => {
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Text
            variant="h2"
            sx={{
              width: "100%",
              maxWidth: { sm: "800px" },
              textAlign: { sm: "center" },
            }}
          >
            {text}
          </Text>
        </Box>
      </StandardLayout>
    </Hero>
  );
};

export default GenericHero;
