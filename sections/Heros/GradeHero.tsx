"use client";

import Hero from "@/components/Hero";
import ProgressBar from "@/components/ProgressBar";
import StandardLayout from "@/components/StandardLayout";
import TitleAndParagraph from "@/components/TitleAndParagraph";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const GradeHero = () => {
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
      <ProgressBar display={showProgressBar} name={"Grades 3-5"} />
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
            columnWrapOrderOnMobile={ColumnWrapOrder.NORMAL}
            leftCol={5}
            rightCol={6}
          >
            <TitleAndParagraph
              title={"Grades 3-5"}
              paragraph={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            />
            <Box
              sx={{
                img: {
                  maxWidth: "100%",
                  aspectRatio: "2:1",
                  borderRadius: "16px",
                },
              }}
            >
              <Image
                src={"/images/temp.png"}
                alt={"temp"}
                width={550}
                height={310}
              />
            </Box>
          </TwoColumnLayout>
        </StandardLayout>
      </Hero>
    </>
  );
};

export default GradeHero;
