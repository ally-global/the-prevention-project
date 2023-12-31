import ExternalLinkTile, { tiles } from "@/components/ExternalLinkTile";
import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Stack } from "@mui/material";

const HelpRightNowSection = () => {
  return (
    <StandardLayout
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          sx={{ textAlign: "center", maxWidth: "600px" }}
          sxMobile={{ textAlign: "left" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Stack>
      <Stack
        sx={{
          maxWidth: "1048px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: 6,
          paddingBottom: 9,
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
      </Stack>
    </StandardLayout>
  );
};

export default HelpRightNowSection;
