import AllyButton from "@/components/AllyButton";
import NavBar from "@/components/NavBar/NavBar";
import StandardLayout from "@/components/StandardLayout";
import { Box, Stack, Typography } from "@mui/material";

const ChooseYourGradeButton = ({
  text,
  color,
}: {
  text: string;
  color: string;
}) => {
  return (
    <AllyButton
      sx={{
        width: "340px",
        height: "110px",
        color: "White",
        fontSize: "34px",
        fontWeight: "700px",
        borderRadius: "16px",
        margin: "8px",
      }}
      color={color}
      text={text}
    />
  );
};

export default function Home() {
  return (
    <Box bgcolor={"White"}>
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, transparent, 90%, white), linear-gradient(to right, #673BDC, #00B8C5)",
          mb: 6,
        }}
      >
        <NavBar />
        <StandardLayout>
          <Stack
            display="flex"
            flexDirection="column"
            alignItems="center"
            spacing={4}
            paddingTop={10}
          >
            <Typography variant="h2" maxWidth={"900px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
            <AllyButton text="CHOOSE YOUR GRADE TO GET STARTED" />
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            pt={6}
            overflow="scroll"
          >
            <ChooseYourGradeButton text="Grades 3-5" color="PrimaryBlue" />
            <ChooseYourGradeButton text="Grades 6-7" color="Blue" />
            <ChooseYourGradeButton text="Grades 8-12" color="PrimaryPurple" />
          </Stack>
        </StandardLayout>
      </Box>
      <Box sx={{ backgroundColor: "PrimaryPurple", height: "500px" }}></Box>
    </Box>
  );
}
