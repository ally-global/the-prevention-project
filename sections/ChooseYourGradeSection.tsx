import AllyButton from "@/components/AllyButton";
import { Box } from "@mui/material";
import Link from "next/link";

const ChooseYourGrade = ({
  text,
  color,
  mobile,
  href,
}: {
  text: string;
  color: string;
  href: string;
  mobile?: boolean;
}) => {
  return (
    <Link href={href} style={{ width: "100%" }}>
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
      />
    </Link>
  );
};

const ChooseYourGradeSection = () => {
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
        href={"/grades3-5"}
      />
      <ChooseYourGrade text="Grades 6-7" color="Blue" href={"/grades6-7"} />
      <ChooseYourGrade
        text="Grades 8-12"
        color="PrimaryPurple"
        href={"/grades8-12"}
      />
    </Box>
  );
};

export default ChooseYourGradeSection;
