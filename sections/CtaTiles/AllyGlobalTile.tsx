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
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: { md: "478px", lg: "400px" },
            backgroundColor: "Grey300",
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
          }}
        >
          <Stack justifyContent={"space-between"}>
            <Stack spacing={3} sx={{ pr: { xs: 0, sm: 10, md: 2 } }}>
              <Text variant={"h4"} color={"PrimaryBlue"}>
                {"Ally Global Foundation"}
              </Text>
              <Text variant={"body1"} color={"Grey900"}>
                Ally works to prevent human trafficking and help survivors
                rebuild their lives. In Canada, our focus is to prevent
                exploitation and human trafficking by empowering individuals and
                communities with essential information about what this issue
                looks like locally. <br />
                <br />
                We are working alongside organizations and individuals with
                lived experience across Canada to expand the research in this
                area, and to develop survivor-informed educational
                resources—like The Prevention Project.
              </Text>
            </Stack>
            <AllyButton
              text={"LEARN MORE"}
              color={"PrimaryBlue"}
              sx={{ mt: 4 }}
            />
          </Stack>
          <Image
            src={"/images/Ally-Global-Logo.png"}
            width={80}
            height={60}
            alt={"Ally Global Logo"}
          />
        </Box>
        <Box
          sx={{
            height: { md: "478px", lg: "400px" },
            img: { width: "100%", height: "100%" },
          }}
        >
          <Image
            src={"/images/about-cta-2.jpg"}
            width={800}
            height={800}
            alt={"temp"}
          />
        </Box>
      </TwoColumnLayout>
    </Box>
  );
};

export default AllyGlobalTile;
