"use client";

import { Stack, Typography } from "@mui/material";
import AllyButton from "@/components/AllyButton";

export const AreYouAParentCard = ({ wide }: { wide?: boolean }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        width: wide ? "100%" : "428px",
        height: wide ? "344px" : "380px",
        borderRadius: wide ? "0px" : "16px",
        justifyContent: "space-between",
        pt: 4,
        px: 4,
        pb: 6,
        backgroundImage: "linear-gradient(to bottom right, #673BDC, #347AD1)",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h4">Are you a parent?</Typography>
        <Typography variant="body1">
          It can be hard to know where to begin with topics like
          exploitation—especially when the online world is changing so quickly.
          Our resources will help you learn how to navigate these conversations
          with the young people in your life.
        </Typography>
      </Stack>
      <AllyButton text="BROWSE THE RESOURCE LIBRARY" color="PrimaryBlue" wide />
    </Stack>
  );
};

export const AreYouAnEducatorCard = ({ wide }: { wide?: boolean }) => {
  return (
    <Stack
      sx={{
        width: wide ? "100%" : "428px",
        height: wide ? "344px" : "380px",
        display: "flex",
        borderRadius: wide ? "0px" : "16px",
        justifyContent: "space-between",
        pt: 4,
        px: 4,
        pb: 6,
        backgroundImage: "linear-gradient(to right, #347AD1, #00B8C5)",
      }}
    >
      <Stack spacing={3}>
        <Typography variant="h4">Are you an educator?</Typography>
        <Typography variant="body1">
          Helping young people understand the root causes of exploitation is the
          best way to prevent it from happening. Our modules are designed to be
          easily incorporated into your classroom learning, and every resource
          can be downloaded for free.
        </Typography>
      </Stack>
      <AllyButton
        text="BROWSE THE RESOURCE LIBRARY"
        color="PrimaryPurple"
        wide
      />
    </Stack>
  );
};
