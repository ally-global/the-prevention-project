"use client";

import AllyButton from "@/components/AllyButton";
import Text from "@/components/Text";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

const AllyGlobalTile = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <TwoColumnLayout
        columnWrapOrderOnMobile={ColumnWrapOrder.NORMAL}
        leftCol={8}
        rightCol={4}
        noGap
        sx={{ borderRadius: "16px", overflow: "hidden", position: "relative" }}
      >
        <Box
          sx={{
            backgroundColor: "Grey300",
            padding: 4,
            display: "flex",
            justifyContent: "space-between",
            height: "300px",
          }}
        >
          <Stack justifyContent={"space-between"}>
            <Stack spacing={3}>
              <Text variant={"h4"} color={"PrimaryBlue"}>
                {"Ally Global Foundation"}
              </Text>
              <Text variant={"body1"} color={"Grey900"}>
                {`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                `}
              </Text>
            </Stack>
            <AllyButton text={"Learn more"} color={"PrimaryBlue"} />
          </Stack>
          <Image
            src={"/images/ally-exed-logo.png"}
            width={60}
            height={40}
            alt={"Ally Global Logo"}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "Grey800",
            height: "300px",
          }}
        ></Box>
      </TwoColumnLayout>
    </Box>
  );
};

export default AllyGlobalTile;
