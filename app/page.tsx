import AllyButton from "@/components/AllyButton";
import NavBar from "@/components/NavBar/NavBar";
import NumberCard, { numberCardInfo } from "@/components/NumberCard";
import QuestionCards from "@/components/QuestionCards";
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
      <Box sx={{ backgroundColor: "PrimaryPurple", height: "512px" }}></Box>
      <Box width={"100%"} justifyContent={"center"} display="flex" padding={4}>
        <QuestionCards />
      </Box>
      <Box
        sx={{
          backgroundImage: "linear-gradient(to bottom right, #673BDC, #00B8C5)",
        }}
      >
        <StandardLayout>
          <Typography variant="h4" textAlign={"center"} py={8}>
            What do I do if someone tells me they are <br /> being exploited or
            abused?
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {numberCardInfo.map((card, i) => (
              <NumberCard
                key={i}
                number={card.number}
                color={card.color}
                statement={card.statement}
                subtext={card.subtext}
              />
            ))}
          </Box>
          <Typography variant="h4" textAlign={"center"} pt={10}>
            What if I need help right now?
          </Typography>
          <Typography variant="body1" textAlign={"center"} py={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </StandardLayout>
      </Box>
    </Box>
  );
}
