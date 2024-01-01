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
          <Stack spacing={4} sx={{ mb: { xs: 4 } }}>
            <TitleAndParagraph
              title={"Heading statement"}
              paragraph={
                <>
                  t enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </>
              }
            />
            <AllyButton color={"PurpleMid"} text={"BOOK A PRESENTATION"} />
          </Stack>
          <Box
            sx={{
              img: { maxWidth: "100%", height: "auto", borderRadius: "16px" },
            }}
          >
            <Image
              src={"/images/temp.png"}
              alt={"temp"}
              width={456}
              height={390}
            />
          </Box>
        </TwoColumnLayout>
      </StandardLayout>
    </Box>
  );
};

export default LearnMore;
