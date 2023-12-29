import AllyButton from "@/components/AllyButton";
import StandardLayout from "@/components/StandardLayout";
import { Stack } from "@mui/material";

const ChooseYourGrade = ({ text, color }: { text: string; color: string }) => {
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

const ChooseYourGradeSection = () => {
  return (
    <StandardLayout>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        pt={6}
        overflow="scroll"
      >
        <ChooseYourGrade text="Grades 3-5" color="PrimaryBlue" />
        <ChooseYourGrade text="Grades 6-7" color="Blue" />
        <ChooseYourGrade text="Grades 8-12" color="PrimaryPurple" />
      </Stack>
    </StandardLayout>
  );
};

export default ChooseYourGradeSection;
