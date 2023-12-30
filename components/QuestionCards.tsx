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
        <Typography variant="h4" color="Grey200">
          Are you a parent?
        </Typography>
        <Typography variant="body1" color="Grey200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
          in arcu sit amet luctus. Aenean auctor lacus eget lectus ultricies,
          sit amet aliquam elit luctus. Phasellus eleifend quam massa, non
          auctor enim consequat vitae.
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
        <Typography variant="h4" color="Grey200">
          Are you an educator?
        </Typography>
        <Typography variant="body1" color="Grey200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
          in arcu sit amet luctus. Aenean auctor lacus eget lectus ultricies,
          sit amet aliquam elit luctus. Phasellus eleifend quam massa, non
          auctor enim consequat vitae.
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
