import { Stack, SxProps, Typography } from "@mui/material";
import AllyButton from "./AllyButton";

const QuestionCards = () => {
  return (
    <Stack flexDirection={"row"}>
      <Stack
        sx={{
          width: "428px",
          height: "380px",
          backgroundImage: "linear-gradient(to bottom right, #673BDC, #347AD1)",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "space-between",
          pt: 4,
          px: 4,
          pb: 6,
          margin: 4,
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h4" color="Grey200">
            Are you a parent?
          </Typography>
          <Typography variant="body1" color="Grey200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            viverra in arcu sit amet luctus. Aenean auctor lacus eget lectus
            ultricies, sit amet aliquam elit luctus. Phasellus eleifend quam
            massa, non auctor enim consequat vitae.
          </Typography>
        </Stack>
        <AllyButton
          text="BROWSE THE RESOURCE LIBRARY"
          color="PrimaryBlue"
          wide
        />
      </Stack>
      <Stack
        sx={{
          width: "428px",
          height: "380px",
          backgroundImage: "linear-gradient(to right, #347AD1, #00B8C5)",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "space-between",
          pt: 4,
          px: 4,
          pb: 6,
          margin: 4,
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h4" color="Grey200">
            Are you an educator?
          </Typography>
          <Typography variant="body1" color="Grey200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            viverra in arcu sit amet luctus. Aenean auctor lacus eget lectus
            ultricies, sit amet aliquam elit luctus. Phasellus eleifend quam
            massa, non auctor enim consequat vitae.
          </Typography>
        </Stack>
        <AllyButton
          text="BROWSE THE RESOURCE LIBRARY"
          color="PrimaryPurple"
          wide
        />
      </Stack>
    </Stack>
  );
};

export default QuestionCards;
