import Hero from "@/components/Hero";
import { Box, Stack } from "@mui/material";
import ChooseYourGradeSection from "@/sections/ChooseYourGradeSection";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";

const HomeHero = () => {
  return (
    <Hero
      sx={{
        background:
          "linear-gradient(to bottom, transparent, 90%, white), linear-gradient(to right, #673BDC, #00B8C5)",
        height: {
          xs: "auto",
          sm: "auto",
          md: "792px",
          lg: "792px",
          xl: "792px",
        },
        marginBottom: { xs: 6, sm: 8, md: 8 },
      }}
    >
      <Box sx={{ py: { xs: 0, sm: 4, md: 10 } }}>
        <StandardLayout>
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            spacing={4}
          >
            <Text
              variant="h2"
              sx={{
                maxWidth: "900px",
                textAlign: { xs: "left", sm: "center" },
              }}
            >
              What are the red flags of unsafe online friends and followers?
            </Text>
            <Text
              variant="h5"
              sx={{
                maxWidth: "700px",
                textAlign: { xs: "left", sm: "center" },
              }}
            >
              Let&apos;s learn together, so that we can create a safer world for 
              ourselves and for others — both online and face to face.
            </Text>
          </Stack>
        </StandardLayout>
        <StandardLayout sx={{ pt: { xs: 6, sm: 8, md: 12 } }}>
          <ChooseYourGradeSection />
        </StandardLayout>
      </Box>
    </Hero>
  );
};

export default HomeHero;
