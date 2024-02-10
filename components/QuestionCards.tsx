"use client";

import { Stack, Typography } from "@mui/material";
import AllyButton from "@/components/AllyButton";

export const AreYouAParentCard = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        width: { xs: "100%", sm: "100%", md: "428px" },
        height: { sm: "380px" },
        borderRadius: "16px",
        justifyContent: "space-between",
        padding: 4,
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
      <AllyButton
        sx={{ mt: 4 }}
        text="BROWSE THE RESOURCE LIBRARY"
        color="PrimaryBlue"
        wide
      />
    </Stack>
  );
};

export const AreYouAnEducatorCard = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        width: { xs: "100%", sm: "100%", md: "428px" },
        height: { sm: "380px" },
        borderRadius: "16px",
        justifyContent: "space-between",
        padding: 4,
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
        sx={{ mt: 4 }}
        text="BROWSE THE RESOURCE LIBRARY"
        color="PrimaryPurple"
        wide
      />
    </Stack>
  );
};
