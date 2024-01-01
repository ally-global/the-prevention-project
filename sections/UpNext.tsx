import AllyButton from "@/components/AllyButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Text from "@/components/Text";
import { Stack } from "@mui/material";

const UpNext = ({
  contentColor,
  contentTitle,
  chapterName,
}: {
  contentColor: string;
  contentTitle: string;
  chapterName: string;
}) => {
  return (
    <Stack
      sx={{
        backgroundColor: `${contentColor}`,
        padding: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={2}
    >
      <AllyButton
        text={"NEXT"}
        color={"PrimaryBlue"}
        sx={{ borderRadius: "8px" }}
      />
      <Text variant={"button"}>{chapterName.toUpperCase()}</Text>
      <Text variant={"h4"}>{contentTitle}</Text>
      <AllyButton color={"PrimaryBlue"}>
        <ArrowForwardIcon fontSize="large" sx={{ color: "White" }} />
      </AllyButton>
    </Stack>
  );
};

export default UpNext;
