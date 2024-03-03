"use client";

import StandardLayout from "@/components/StandardLayout";
import { Box, Stack } from "@mui/material";

import Image from "next/image";

import TitleAndParagraph from "@/components/TitleAndParagraph";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import AllyButton from "@/components/AllyButton";
import Link from "next/link";

const Donate = () => {
  return (
    <Box sx={{ backgroundColor: "Blue", py: 8 }}>
      <StandardLayout>
        <TwoColumnLayout
          columnWrapOrderOnMobile={ColumnWrapOrder.REVERSE}
          leftCol={5}
          rightCol={6}
        >
          <Box
            sx={{
              img: { maxWidth: "100%", height: "auto", borderRadius: "16px" },
            }}
          >
            <Image
              src={"/images/about-blue-section.jpg"}
              alt={"Girls smiling"}
              width={800}
              height={400}
            />
          </Box>
          <Stack spacing={4} sx={{ mb: { xs: 4, sm: 4, md: 0 } }}>
            <TitleAndParagraph
              title={"Partner with us to prevent the exploitation of minors."}
              paragraph={
                <>
                  We want to ensure that resources like The Prevention Project
                  are accessible to all—this means keeping them free. If you
                  would like to help support the creation and distribution of
                  more resources like this, we invite you to make a donation
                  through Ally Global Foundation.
                </>
              }
            />
            <Link href={"https://ally.org/?form=donate"} target={"_blank"}>
              <AllyButton color={"PrimaryBlue"} text={"DONATE"} />
            </Link>
          </Stack>
        </TwoColumnLayout>
      </StandardLayout>
    </Box>
  );
};

export default Donate;
