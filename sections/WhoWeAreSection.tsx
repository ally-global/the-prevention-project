import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ExploitationEducationTile from "./CtaTiles/ExploitationEducationTile";
import AllyGlobalTile from "./CtaTiles/AllyGlobalTile";

const WhoWeAreSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "White",
        paddingY: 10,
        position: "relative",
      }}
    >
      <StandardLayout>
        <Stack spacing={10}>
          <Stack spacing={2} alignItems={{ xs: "start", sm: "center" }}>
            <Text
              variant={"h4"}
              color={"PrimaryPurple"}
              sx={{ textAlign: { xs: "left", sm: "center" } }}
            >
              Built in collaboration; <br />
              backed by research.
            </Text>
            <Text
              color={"Grey900"}
              variant={"body1"}
              sx={{
                textAlign: { xs: "left", sm: "center" },
                maxWidth: "700px",
              }}
            >
              The Prevention Project is the result of collaboration between Ally
              Global Foundation and Exploitation Education Institute.
            </Text>
          </Stack>
          <Stack spacing={6}>
            <ExploitationEducationTile />
            <AllyGlobalTile />
          </Stack>
        </Stack>
      </StandardLayout>
    </Box>
  );
};

export default WhoWeAreSection;
