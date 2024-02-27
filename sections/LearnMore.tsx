"use client";

import StandardLayout from "@/components/StandardLayout";
import { Box, Stack } from "@mui/material";

import Image from "next/image";

import TitleAndParagraph from "@/components/TitleAndParagraph";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import AllyButton from "@/components/AllyButton";

const LearnMore = () => {
  return (
    <Box sx={{ backgroundColor: "PrimaryPurple", py: 8 }}>
      <StandardLayout>
        <TwoColumnLayout
          columnWrapOrderOnMobile={ColumnWrapOrder.NORMAL}
          leftCol={6}
          rightCol={5}
        >
          <Stack spacing={4} sx={{ mb: { xs: 4, sm: 4, md: 0 } }}>
            <TitleAndParagraph
              title={"Bring an ExEd presenter to your school or workplace."}
              paragraph={
                <>
                  ExEd offers a variety of presentation topics for grades 5-12
                  students, as well as training sessions for parent advisory
                  committees, educators, social service providers and law
                  enforcement. Most presentations can be provided either in
                  person or virtually, to any sized group, anywhere in Canada.
                </>
              }
            />
            <AllyButton color={"PurpleDark"} text={"BOOK A PRESENTATION"} />
          </Stack>
          <Box
            sx={{
              img: { maxWidth: "100%", height: "auto", borderRadius: "16px" },
            }}
          >
            <Image
              src={"/images/about-purple-section.jpg"}
              alt={"Presentation"}
              width={800}
              height={600}
            />
          </Box>
        </TwoColumnLayout>
      </StandardLayout>
    </Box>
  );
};

export default LearnMore;
