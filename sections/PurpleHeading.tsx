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
                others. We’ll look at topics like how to identify safe vs.
                unsafe people, how to engage in the digital world and how to
                navigate relationships. From grade 6 onwards, we’ll also begin
                to discuss the red flags of predatory people and the topics of
                exploitation and trafficking.
                <br />
                <br />
                Together, we’ll explore not only how to protect ourselves, but
                also how to be a good friend and safe person for others.
              </>
            }
          />
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

export default PurpleHeading;
