"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

export const FooterItem = ({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    style={{
      textDecoration: "none",
      margin: "2px",
    }}
    onClick={onClick}
  >
    <Typography
      variant="caption"
      color={`Grey800`}
      sx={{
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {text}
    </Typography>
  </Link>
);

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <Box mb={10}>
      <Box
        sx={{ borderBottom: "1px solid #673BDC", pb: { xs: 6, sm: 6, md: 4 } }}
      >
        <Grid
          container
          spacing={{
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
          }}
          columns={{ xs: 4, sm: 4, md: 12, lg: 12, xl: 12 }}
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
          style={{
            marginTop: "0px",
            minHeight: "250px",
          }}
        >
          <Grid item xs={4} sm={4} md={8} lg={8} xl={8}>
            <Grid
              container
              spacing={{
                xs: 4,
                sm: 3,
                md: 3,
                lg: 3,
                xl: 3,
              }}
              columns={{ xs: 4, sm: 4, md: 8, lg: 8, xl: 8 }}
              justifyContent="flex-start"
              alignItems="flex-start"
              height="100%"
              style={{
                marginTop: "0px",
              }}
            >
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    STAY UPDATED
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <Typography
                    variant={"caption"}
                    color={`Grey800`}
                    lineHeight={"24px"}
                  >
                    Sign up to receive email updates on future resources and
                    developments
                  </Typography>
                  <div
                    data-paperform-id="2ukmtlqr"
                    style={{
                      marginLeft: "-25px",
                    }}
                  ></div>
                </Stack>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    ABOUT US
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <FooterItem text={"Who We Are"} href="/about#who-we-are" />
                  <FooterItem
                    text={"Book a Presentation"}
                    href="/about#book-a-presentation"
                  />
                  <FooterItem text={"Donate"} href="/about#donate" />
                </Stack>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    CHOOSE YOUR GRADE
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <FooterItem text="Grades 3-5" href="/grades3-5" />
                  <FooterItem text="Grades 6-7" href="/grades6-7" />
                  <FooterItem text="Grades 8-12" href="/grades8-12" />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 1,
        }}
      >
        <Typography variant={"caption"} color={"Grey800"}>
          © 2024 Ally Global Foundation
        </Typography>
        <Box
          sx={{ display: "flex", gap: { xs: 2, sm: 2, md: 4 }, mt: "-10px" }}
        >
          <FooterItem
            text={"Terms & Conditions"}
            href="https://ally.org/terms"
          />
          <FooterItem text={"Privacy Policy"} href="https://ally.org/terms" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
