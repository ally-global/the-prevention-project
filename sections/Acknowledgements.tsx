import StandardLayout from "@/components/StandardLayout";
import Text from "@/components/Text";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

const AcknowledgmentSectionWrappper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Stack spacing={2} alignItems={"center"} maxWidth={"280px"}>
      {children}
    </Stack>
  );
};

const Acknowledgements = () => {
  return (
    <StandardLayout>
      <Stack spacing={4} alignItems={"center"} sx={{ py: 10 }}>
        <Text variant={"h4"} color={"PrimaryPurple"}>
          Acknowledgements
        </Text>
        <Text
          variant={"body1"}
          sx={{ maxWidth: "600px", textAlign: "center" }}
          color={"Grey900"}
        >
          The Prevention Project extends heartfelt gratitude to the following
          individuals and organizations whose contributions were instrumental in
          the development of our resources:
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: { xs: 5, sm: 5, md: 10 },
            pt: 5,
          }}
        >
          <AcknowledgmentSectionWrappper>
            <Text
              variant={"h5"}
              color={"PrimaryPurple"}
              sx={{ textAlign: "center" }}
            >
              Education and Lived Experience Consultants
            </Text>
            <Text
              variant={"body1"}
              color={"Grey900"}
              sx={{ textAlign: "center" }}
            >
              We are deeply thankful for the invaluable insights and expertise
              provided by our dedicated team of education and lived experience
              consultants.
            </Text>
          </AcknowledgmentSectionWrappper>
          <AcknowledgmentSectionWrappper>
            <Text
              variant={"h5"}
              color={"PrimaryPurple"}
              sx={{ textAlign: "center" }}
            >
              Ally Global Foundation Donor Community
            </Text>
            <Text
              variant={"body1"}
              color={"Grey900"}
              sx={{ textAlign: "center" }}
            >
              We extend our sincere appreciation to the generous donors within
              the Ally Global Foundation community. Your support has made it
              possible for us to continue our efforts in preventing exploitation
              and empowering individuals and communities.
            </Text>
          </AcknowledgmentSectionWrappper>
          <AcknowledgmentSectionWrappper>
            <Text
              variant={"h5"}
              color={"PrimaryPurple"}
              sx={{ textAlign: "center" }}
            >
              BC Civil Forfeitures Grant
            </Text>
            <Text
              variant={"body1"}
              color={"Grey900"}
              sx={{ textAlign: "center" }}
            >
              We are grateful for the funding provided by Civil Forfeitures
              Grant BC, which has enabled us to develop these essential
              resources.
            </Text>
            <Image
              src={"/images/logo-bcid.png"}
              alt={"BCID logo"}
              width={180}
              height={90}
            />
          </AcknowledgmentSectionWrappper>
        </Box>
        <Text
          variant={"body1"}
          color={"Grey900"}
          sx={{ textAlign: "center", pt: 5 }}
        >
          Together, we are working towards a safer and
          <br />
          more informed future for all.
        </Text>
      </Stack>
    </StandardLayout>
  );
};

export default Acknowledgements;
