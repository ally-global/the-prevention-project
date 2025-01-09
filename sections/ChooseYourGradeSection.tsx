import AllyButton from "@/components/AllyButton";
import { Box } from "@mui/material";
import { GradeGroup } from "./ChapterCardSection";

const ChooseYourGrade = ({
  text,
  color,
  boxShadowColor,
  mobile,
  onClick,
}: {
  text: string;
  color: string;
  boxShadowColor: string;
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
        "&:hover": {
          backgroundColor: color,
          boxShadow: `4px 4px 0px ${boxShadowColor}`,
        },
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
        boxShadowColor="#06919B"
        onClick={() => setActiveGradeGroup(GradeGroup.GRADES_3_TO_5)}
      />
      <ChooseYourGrade
        text="Grades 6-7"
        color="Blue"
        boxShadowColor="#1855A0"
        onClick={() => setActiveGradeGroup(GradeGroup.GRADES_6_TO_7)}
      />
      <ChooseYourGrade
        text="Grades 8-12"
        color="PrimaryPurple"
        boxShadowColor="#423591"
        onClick={() => setActiveGradeGroup(GradeGroup.GRADES_8_TO_12)}
      />
    </Box>
  );
};

export default ChooseYourGradeSection;
