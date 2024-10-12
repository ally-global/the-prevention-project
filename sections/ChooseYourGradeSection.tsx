import AllyButton from "@/components/AllyButton";
import { Box } from "@mui/material";
import { GradeGroup } from "./ChapterCardSection";

const ChooseYourGrade = ({
  text,
  color,
  mobile,
  onClick,
}: {
  text: string;
  color: string;
  onClick: () => void;
  mobile?: boolean;
}) => {
  return (
    <AllyButton
      sx={{
        width: "100%",
        paddingY: { xs: 4, sm: 4, md: 6 },
        paddingX: { xs: 2, sm: 4, md: 6 },
        color: "White",
        fontSize: { xs: "20px", sm: "20px", md: "34px" },
        fontWeight: "700px",
        borderRadius: "16px",
        whiteSpace: { xs: "normal", sm: "nowrap" },
        lineHeight: { xs: "20px", sm: "20px", md: "34px" },
      }}
      color={color}
      text={text}
      wide={mobile}
      onClick={onClick}
    />
  );
};

const ChooseYourGradeSection = ({
  setActiveGradeGroup,
}: {
  setActiveGradeGroup: any;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: { xs: 1, sm: 2 },
      }}
    >
      <ChooseYourGrade
        text="Grades 3-5"
        color="PrimaryBlue"
        onClick={() => setActiveGradeGroup(GradeGroup.GRADES_3_TO_5)}
      />
      <ChooseYourGrade
        text="Grades 6-7"
        color="Blue"
        onClick={() => setActiveGradeGroup(GradeGroup.GRADES_6_TO_7)}
      />
      <ChooseYourGrade
        text="Grades 8-12"
        color="PrimaryPurple"
        onClick={() => setActiveGradeGroup(GradeGroup.GRADES_8_TO_12)}
      />
    </Box>
  );
};

export default ChooseYourGradeSection;
