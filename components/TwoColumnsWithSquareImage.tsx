"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import { ReactNode } from "react";

import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";

const SquareImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "0",
          paddingBottom: "100%",
          position: "relative",
          img: {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Image src={src} alt={alt} width={440} height={440} />
      </Box>
    </Box>
  );
};

const TwoColumnsWithSquareImage = ({
  column,
  image,
  imageOnRight,
}: {
  column: ReactNode;
  image: { src: string; alt: string };
  imageOnRight?: boolean;
}) => {
  const squareImage = <SquareImage src={image.src} alt={image.alt} />;

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {imageOnRight ? (
        <TwoColumnLayout
          columnWrapOrderOnMobile={ColumnWrapOrder.NORMAL}
          leftCol={6}
          rightCol={5}
        >
          {column}
          {squareImage}
        </TwoColumnLayout>
      ) : (
        <TwoColumnLayout
          columnWrapOrderOnMobile={ColumnWrapOrder.REVERSE}
          leftCol={5}
          rightCol={6}
        >
          {squareImage}
          {column}
        </TwoColumnLayout>
      )}
    </Box>
  );
};

export default TwoColumnsWithSquareImage;
