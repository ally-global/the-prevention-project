"use client";

import { Stack } from "@mui/material";
import AllyButton from "@/components/AllyButton";
import Link from "next/link";
import Text from "@/components/Text";

const sharedCardStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: { xs: "100%", sm: "340px", md: "488px" },
  height: { sm: "380px", md: "480px" },
  borderRadius: "16px",
  padding: { xs: 4, sm: 4, md: 6 },
};

export const AreYouAParentCard = () => {
  return (
    <Stack
      sx={{
        ...sharedCardStyles,
        backgroundImage: "linear-gradient(to bottom right, #673BDC, #347AD1)",
      }}
    >
      <Stack spacing={3}>
        <Text variant="h4">Are you a parent?</Text>
        <Text variant="body1">
          It can be hard to know where to begin with topics like exploitation —
          especially when the online world is changing so quickly. Our resources
          serve as tools to get these conversations started with your children
          and youth.
        </Text>
      </Stack>
      <Link href={"/parents-and-educators"} style={{ textDecoration: "none" }}>
        <AllyButton
          sx={{ mt: 4 }}
          text="BROWSE THE RESOURCE LIBRARY"
          color="PrimaryBlue"
          wide
        />
      </Link>
    </Stack>
  );
};

export const AreYouAnEducatorCard = () => {
  return (
    <Stack
      sx={{
        ...sharedCardStyles,
        backgroundImage: "linear-gradient(to right, #347AD1, #00B8C5)",
      }}
    >
      <Stack spacing={3}>
        <Text variant="h4">Are you an educator?</Text>
        <Text variant="body1">
          Integrating education on topics like consent, digital safety, healthy
          relationships and even human trafficking are crucial to keeping your
          students safe. Our modules are designed to be easily incorporated into
          your classroom learning, and every resource can be downloaded for
          free.
        </Text>
      </Stack>
      <Link href={"/parents-and-educators"} style={{ textDecoration: "none" }}>
        <AllyButton
          sx={{ mt: 4 }}
          text="BROWSE THE RESOURCE LIBRARY"
          color="PrimaryPurple"
          wide
        />
      </Link>
    </Stack>
  );
};
