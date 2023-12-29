import { Box, Stack, Typography } from "@mui/material";

export const numberCardInfo: {
  number: number;
  color: string;
  statement: string;
  subtext: string;
}[] = [
  {
    number: 1,
    color: "PrimaryBlue",
    statement: "Listen.",
    subtext: "Don't judge them, and don't act shocked by what they tell you.",
  },
  {
    number: 2,
    color: "Blue",
    statement: "Be empathetic.",
    subtext:
      "Thank them for sharing with you. It takes a lot of courage to come forward.",
  },
  {
    number: 3,
    color: "PrimaryPurple",
    statement: "Don't ask for details.",
    subtext:
      "You might be curious, but it will not be helpful. It could also affect the person's information sharing if they later connect with a resource such as police.",
  },
  {
    number: 4,
    color: "PurpleMid",
    statement: "Have they told anyone else?",
    subtext:
      "Yes — Do they need any futher help? No — Offer to connect them with a counsellor or confidential resource.",
  },
  {
    number: 5,
    color: "#423591",
    statement: "Encourage them to report it.",
    subtext:
      "Don't make any promises about what can be done. Explain the benefits of telling another resource (like a counsellor or police).",
  },
  {
    number: 6,
    color: "#423591",
    statement: "Take further action if there is immediate danger.",
    subtext:
      "If a child or youth is ever in immediate danger, you must report it to the provincial child protection services body.",
  },
];

const NumberCircle = ({ number, color }: { number: number; color: string }) => {
  return (
    <Typography
      component="div"
      variant="h4"
      sx={{
        width: "56px",
        height: "56px",
        borderRadius: "28px",
        backgroundColor: color,
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {number}
    </Typography>
  );
};

const NumberCard = ({
  number,
  color,
  statement,
  subtext,
}: {
  number: number;
  color: string;
  statement: string;
  subtext: string;
}) => {
  return (
    <Box
      sx={{
        width: "424px",
        height: "336px",
        backgroundColor: "White",
        padding: 4,
        margin: 2,
        borderRadius: "16px",
        flexDirection: "column",
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <NumberCircle number={number} color={color} />
      <Stack spacing={2}>
        <Typography variant="h4" color={color}>
          {statement}
        </Typography>
        <Typography variant="body1" color="Grey900">
          {subtext}
        </Typography>
      </Stack>
    </Box>
  );
};

export default NumberCard;
