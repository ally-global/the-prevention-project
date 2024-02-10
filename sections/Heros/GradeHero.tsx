"use client";

import Hero from "@/components/Hero";
import ProgressBar from "@/components/ProgressBar";
import StandardLayout from "@/components/StandardLayout";
import TitleAndParagraph from "@/components/TitleAndParagraph";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import VideoPlayer from "@/components/VideoPlayer";
import { Box } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

const GradeHero = ({
  title,
  subtitle,
  vimeoId,
}: {
  title: string;
  subtitle: ReactNode;
  vimeoId: string;
}) => {
  const [showProgressBar, setShowProgressBar] = useState("none");

  function stickNavbar() {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 250
        ? setShowProgressBar("initial")
        : setShowProgressBar("none");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <>
      {/* <ProgressBar display={showProgressBar} name={"Grades 3-5"} /> */}
      <Hero
        sx={{
          background:
            "linear-gradient(to bottom, transparent, 90%, white), linear-gradient(to right, #673BDC, #00B8C5)",
          pb: {
            xs: 8,
            sm: 8,
            md: 15,
            lg: 15,
            xl: 15,
          },
        }}
      >
        <StandardLayout>
          <TwoColumnLayout
            columnWrapOrderOnMobile={ColumnWrapOrder.REVERSE}
            leftCol={6}
            rightCol={5}
          >
            <TitleAndParagraph title={title} paragraph={subtitle} />
            <Box
              sx={{
                backgroundColor: "Grey300",
                borderRadius: "16px",
                iframe: {
                  borderRadius: "16px",
                },
                mb: { xs: 4, sm: 0 },
              }}
            >
              <VideoPlayer vimeoId={vimeoId} autoplay />
            </Box>
          </TwoColumnLayout>
        </StandardLayout>
      </Hero>
    </>
  );
};

export default GradeHero;
