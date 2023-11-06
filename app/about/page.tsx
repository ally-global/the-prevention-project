"use client";
import PageBody from "@/components/PageBody";
import useTheme from "@mui/material/styles/useTheme";
import StandardLayout from "@/components/StandardLayout";
import Box from "@mui/material/Box";
import TwoColumnLayout, { ColumnWrapOrder } from "@/components/TwoColumnLayout";
import { Typography } from "@mui/material";

export default function About() {
  const { palette } = useTheme();
  return (
    <PageBody>
      <Box sx={{ backgroundColor: palette.Purple, width: "100%", py: 4 }}>
        <StandardLayout>
          <TwoColumnLayout columnWrapOrderOnMobile={ColumnWrapOrder.REVERSE}>
            <Box>
              <Typography variant="h2" color={palette.White} pb={2}>
                About Us
              </Typography>
              <Typography variant="body1" color={palette.White} pb={2}>
                Ally Global Foundation and Exploitation Education Institute are
                partnering together to make fun and light hearted digital
                educational resources for children, youth and adults in Canada
                to prevent the exploitation and trafficking of minors.
              </Typography>
              <Typography variant="body3" color={palette.White}>
                The trafficking of Canadian children and youth continues to be a
                rising crime largely related to the increase in online
                interactions over the last few years resulting in increased
                online recruitment. According to the Canadian Centre for Child
                Protection (C3P), reports of online sexual luring targeting
                Canadian children have risen to never-before-seen levels, with
                an 815% increase from 2018 to 2022! It is imperative that we
                equip our children and youth with the knowledge to make informed
                decisions about safe relationships and cybersafety, to decrease
                the risk of trafficking.
              </Typography>
            </Box>
            <Box borderRadius={4} overflow="hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={554}
                height={409}
                alt="Child smiling with ipad"
                src="https://s3-alpha-sig.figma.com/img/0acd/7b4a/4187eaf4cbff930c25d9e61935ee9306?Expires=1700438400&Signature=Y0fRFDCT5CMqdkJ1H3B-oSHvQaY2A57P835zUg8sWNjA73GqrMPmItAJpuJ0eGl4n6pAcmCnuGCP6tznUbaypC1VlbdI83Yx2DXTG96cUNWe5Nyfe0XhXC9yPEPKI5XrMWL2t5464Wr84Mn4XDn~bT0yOQIQvUoabTBHbIkj~yvUUm1b2pFqm1CpwKqW75pEiDWy2NsDZN~KnoG7U9NmVsFBT52H58gYskLBME-Ui~5NFCfjBpi2vJ78b1NKNSfJLO81AlJkC5dVCbA2EthjhoAicYI3YtYHZQQt2FhEO2GeabYaPRwrYyHIZN-CvNfVt~tsLc6iWQIs2d85tWPk3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </Box>
          </TwoColumnLayout>
        </StandardLayout>
      </Box>
    </PageBody>
  );
}
