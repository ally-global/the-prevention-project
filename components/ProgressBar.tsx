import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Text from "@/components/Text";
import NumberCircle from "@/components/NumberCircle";
import IconCircle from "@/components/IconCircle";

const ProgressBar = ({ display, name }: { display: string; name: string }) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "PrimaryPurple",
        position: "fixed",
        display: { xs: "none", sm: `${display}` },
        zIndex: 99,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "PurpleDark",
            flex: 1,
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text variant={"h4"}>{name}</Text>
        </Box>
        <Box
          sx={{
            backgroundColor: "PrimaryPurple",
            flex: 3,
            height: "100px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <IconCircle
            backgroundColor={"PurpleMid"}
            icon={<CheckIcon sx={{ color: "White" }} fontSize="large" />}
          />
          <IconCircle
            backgroundColor={"PurpleMid"}
            icon={<CheckIcon sx={{ color: "White" }} fontSize="large" />}
          />
          <NumberCircle
            number={3}
            backgroundColor="White"
            color={"PrimaryPurple"}
          />
          <NumberCircle
            number={4}
            backgroundColor="White"
            color={"PrimaryPurple"}
          />
          <NumberCircle
            number={5}
            backgroundColor="White"
            color={"PrimaryPurple"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
