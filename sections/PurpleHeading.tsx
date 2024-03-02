"use client";

import StandardLayout from "@/components/StandardLayout";
import { Box } from "@mui/material";

import Image from "next/image";

import TitleAndParagraph from "@/components/TitleAndParagraph";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";

const PurpleHeading = () => {
  return (
    <Box sx={{ backgroundColor: "PrimaryPurple", py: { xs: 6, sm: 8 } }}>
      <StandardLayout>
        <TwoColumnLayout
          columnWrapOrderOnMobile={ColumnWrapOrder.NORMAL}
          leftCol={5}
          rightCol={6}
        >
          <TitleAndParagraph
            title={
              "When so many of our social interactions happen digitally, it can be hard to know who’s safe and who isn’t."
            }
            paragraph={
              <>
                <b>The Prevention Project</b> is a space for kids and teens to
                feel empowered and confident in their daily connections with
                others. We&apos;ll look at topics that relate to navigating the
                digital world and in person relationships. From grade 6 onwards,
                we will also begin to discuss issues relating to sexual
                exploitation, human trafficking, and high risk behaviours.
                <br />
                <br />
                Together, we&apos;ll explore how to protect ourselves from
                unsafe situations, and in turn, how to be a safe person for
                others.
              </>
            }
          />
          <Box
            sx={{
              img: { maxWidth: "100%", height: "auto", borderRadius: "16px" },
            }}
          >
            <Image
              src={"/images/home-purple-header.jpg"}
              alt={"temp"}
              width={800}
              height={400}
            />
          </Box>
        </TwoColumnLayout>
      </StandardLayout>
    </Box>
  );
};

export default PurpleHeading;
