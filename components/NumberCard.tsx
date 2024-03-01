import { Box, Stack } from "@mui/material";
import Text from "@/components/Text";
import NumberCircle from "@/components/NumberCircle";

export const numberCardInfo: {
  number: number;
  color: string;
  statement: string;
  subtext: string;
}[] = [
  {
    number: 1,
    color: "PrimaryBlue",
    statement: "Listen",
    subtext:
      "It takes courage and a lot of trust in someone to share something like this. Prove their trust right by being non judgmental, and emotionally measured in your response.",
  },
  {
    number: 2,
    color: "Blue",
    statement: "Be empathetic.",
    subtext:
      "Thank them for sharing with you and trusting you with that information. Acknowledge that it takes a lot of courage to come forward and that you are there to help in any way you can.",
  },
  {
    number: 3,
    color: "PrimaryPurple",
    statement: "Focus on their needs.",
    subtext:
      "Don’t ask for details. Rather, find out what their needs are. Do they need an empathetic ear? Do they need assistance with reporting? Do they need to be connected with resources?",
  },
  {
    number: 4,
    color: "PurpleMid",
    statement: "Have they told anyone else?",
    subtext:
      "If yes — Do they need any further help? If no — Encourage them to report to a confidential and safe resource, or connect them with a counsellor.",
  },
  {
    number: 5,
    color: "#423591",
    statement: "Encourage them to report it.",
    subtext:
      "Don’t make any promises on what will be done if they report. Discuss the process of reporting. Address any fears and any goals they might have.",
  },
  {
    number: 6,
    color: "#423591",
    statement: "Take action if there is immediate danger.",
    subtext:
      "If a child or youth is ever in immediate danger, you are legally obligated to report it to your provincial child protection services body.",
  },
];

const NumberCard = ({
  number,
  color,
  statement,
  subtext,
  maxContent,
}: {
  number: number;
  color: string;
  statement: string;
  subtext: string;
  maxContent: boolean;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
        ...(maxContent
          ? {}
          : {
              minWidth: "424px",
              minHeight: { xs: "280px", sm: "280px", md: "348px" },
            }),
        width: { xs: "max-content", sm: "350px", md: "424px" },
        height: { xs: "max-content", sm: "280px", md: "348px" },
        backgroundColor: "White",
        padding: 4,
        borderRadius: "16px",
        margin: 2,
        marginX: { xs: 0, sm: 2 },
      }}
    >
      <NumberCircle number={number} backgroundColor={color} color={"White"} />
      <Stack spacing={2} sx={{ pt: { xs: 2 } }}>
        <Text variant="h4" color={color}>
          {statement}
        </Text>
        <Text variant="body1" color="Grey900">
          {subtext}
        </Text>
      </Stack>
    </Box>
  );
};

export default NumberCard;
