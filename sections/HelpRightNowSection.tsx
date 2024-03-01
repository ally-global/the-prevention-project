import ExternalLinkTile, { tiles } from "@/components/ExternalLinkTile";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Box, Stack, Typography } from "@mui/material";

const LocalResourceTile = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "328px" },
        height: "112px",
        backgroundColor: "PrimaryPurple",
        borderRadius: "16px",
      }}
    >
      <Stack
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 3,
        }}
      >
        <Typography variant={"h6"}>A Local Resource</Typography>
        <Typography variant={"caption"} color={"PrimaryBlue"}>
          SCHOOL COUNSELLORS, VICTIMS SERVICES & SPECIALIZED POLICE
        </Typography>
      </Stack>
    </Box>
  );
};

const HelpRightNowSection = () => {
  return (
    <StandardLayout
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack
        id={"help-right-now"}
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          variant="h4"
          sx={{ textAlign: "center" }}
          sxMobile={{ textAlign: "left" }}
        >
          What if I need help right now?
        </Text>
        <Text
          variant="body1"
          sx={{ textAlign: "center", maxWidth: "800px" }}
          sxMobile={{ textAlign: "left" }}
        >
          If you suspect that you’re being exploited, you can report it to one
          of the resources below. However, if you are in immediate danger, call
          9-1-1.
        </Text>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "1048px",
          paddingTop: 6,
          paddingBottom: 9,
          gap: 1,
        }}
      >
        {tiles.map((tile, index) => {
          return (
            <ExternalLinkTile
              key={index}
              name={tile.name}
              caption={tile.caption}
              href={tile.href}
            />
          );
        })}
        <LocalResourceTile />
      </Box>
    </StandardLayout>
  );
};

export default HelpRightNowSection;
