import Hero from "@/components/Hero";
import { Stack } from "@mui/material";
import ChooseYourGradeSection from "@/sections/ChooseYourGradeSection";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";

const HomeHero = () => {
  return (
    <Hero
      sx={{
        background:
          "linear-gradient(to bottom, transparent, 90%, white), linear-gradient(to right, #673BDC, #00B8C5)",
        marginBottom: 9,
      }}
    >
      <StandardLayout>
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          spacing={4}
        >
          <Text variant="h2" sx={{ maxWidth: "900px" }}>
            What&apos;s the problem with sharing information online?
          </Text>
          <Text variant="body1" sx={{ maxWidth: "900px" }}>
            Let’s learn together, so that we can create a safer world for
            ourselves and for others — both online and face to face.
          </Text>
        </Stack>
      </StandardLayout>

      <StandardLayout sx={{ pt: 10 }}>
        <ChooseYourGradeSection />
      </StandardLayout>
    </Hero>
  );
};

export default HomeHero;
