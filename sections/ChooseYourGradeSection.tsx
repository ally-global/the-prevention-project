import AllyButton from "@/components/AllyButton";
import { RenderOn } from "@/utils/deviceUtils";
import { Stack } from "@mui/material";

const ChooseYourGrade = ({
  text,
  color,
  mobile,
}: {
  text: string;
  color: string;
  mobile?: boolean;
}) => {
  return (
    <AllyButton
      sx={{
        width: mobile ? "100%" : "340px",
        height: mobile ? "50px" : "110px",
        color: "White",
        fontSize: mobile ? "18px" : "34px",
        fontWeight: "700px",
        borderRadius: "16px",
        margin: "8px",
      }}
      color={color}
      text={text}
      wide={mobile}
    />
  );
};

const ChooseYourGradeSection = () => {
  return (
    <>
      <RenderOn breakPoints={["md", "lg", "xl"]}>
        <Stack direction="row" justifyContent={"space-between"}>
          <ChooseYourGrade text="Grades 3-5" color="PrimaryBlue" />
          <ChooseYourGrade text="Grades 6-7" color="Blue" />
          <ChooseYourGrade text="Grades 8-12" color="PrimaryPurple" />
        </Stack>
      </RenderOn>
      <RenderOn breakPoints={["xs", "sm"]}>
        <Stack direction="column" spacing={1}>
          <ChooseYourGrade text="Grades 3-5" color="PrimaryBlue" mobile />
          <ChooseYourGrade text="Grades 6-7" color="Blue" mobile />
          <ChooseYourGrade text="Grades 8-12" color="PrimaryPurple" mobile />
        </Stack>
      </RenderOn>
    </>
  );
};

export default ChooseYourGradeSection;
