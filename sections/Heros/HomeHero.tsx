import AllyButton from "@/components/AllyButton";
import Hero from "@/components/Hero";
import { Box, Stack, Typography } from "@mui/material";
import ChooseYourGradeSection from "../ChooseYourGradeSection";
import { RenderOn } from "@/utils/deviceUtils";
import StandardLayout from "@/components/StandardLayout";

const HomeHero = () => {
  return (
    <Hero
      sx={{
        background:
          "linear-gradient(to bottom, transparent, 90%, white), linear-gradient(to right, #673BDC, #00B8C5)",
        marginBottom: 9,
      }}
    >
      <RenderOn breakPoints={["md", "lg", "xl"]}>
        <StandardLayout>
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            spacing={4}
          >
            <Typography variant="h2" sx={{ maxWidth: "900px" }}>
              Let’s learn together, so that we can create a safer world for
              ourselves and for others — both online and face to face.
            </Typography>
            <AllyButton text="CHOOSE YOUR GRADE TO GET STARTED" />
          </Stack>
        </StandardLayout>
      </RenderOn>

      <RenderOn breakPoints={["xs", "sm"]}>
        <StandardLayout>
          <Typography variant="h4">
            Let’s learn together, so that we can create a safer world for
            ourselves and for others — both online and face to face.
          </Typography>
        </StandardLayout>
      </RenderOn>

      <StandardLayout sx={{ pt: 5 }}>
        <ChooseYourGradeSection />
      </StandardLayout>
    </Hero>
  );
};

export default HomeHero;
