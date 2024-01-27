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
          <Stack spacing={2} alignItems={"center"}>
            <Text
              variant={"h3"}
              color={"PrimaryPurple"}
              sx={{ textAlign: "center" }}
            >
              Heading
            </Text>
            <Text
              color={"Grey900"}
              variant={"body1"}
              sx={{ textAlign: "center", maxWidth: "700px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At
              consectetur lorem donec massa sapien faucibus et molestie.
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
