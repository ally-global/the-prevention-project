import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import TwoColumnsWithSquareImage from "@/components/TwoColumnsWithSquareImage";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

const Heading = () => {
  return (
    <Stack spacing={3} py={8}>
      <Text variant={"h4"}>Heading statement</Text>
      <Text variant={"body1"} sx={{ maxWidth: "450px" }}>
        t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Text>
    </Stack>
  );
};

const PurpleHeading = () => {
  return (
    <Box sx={{ backgroundColor: "PrimaryPurple" }}>
      <StandardLayout>
        <TwoColumnsWithSquareImage
          imageOnRight
          column={<Heading />}
          image={{
            src: "",
            alt: "",
          }}
        />
      </StandardLayout>
    </Box>
  );
};

export default PurpleHeading;
