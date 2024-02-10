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
            height: "340px",
          }}
        >
          <Stack justifyContent={"space-between"}>
            <Stack spacing={3}>
              <Text variant={"h4"} color={"PrimaryBlue"}>
                {"Ally Global Foundation"}
              </Text>
              <Text variant={"body1"} color={"Grey900"}>
                Ally works to prevent human trafficking and help survivors
                rebuild their lives. In Canada, our focus is to prevent
                exploitation and human trafficking by empowering individuals and
                communities with essential information about what this issue
                looks like locally. We are working alongside organizations and
                individuals with lived experience across Canada to expand the
                research in this area and to develop survivor-informed
                educational resources—like The Prevention Project.
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
            height: "340px",
          }}
        ></Box>
      </TwoColumnLayout>
    </Box>
  );
};

export default AllyGlobalTile;
