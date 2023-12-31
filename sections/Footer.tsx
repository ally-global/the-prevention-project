import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Grid, ListItemText, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mb={10}>
      <div style={{ borderBottom: "1px solid #673BDC" }}>
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
          justifyContent="center"
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
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    HUMAN TRAFFICKING
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        What is trafficking?
                      </Typography>
                    }
                  />
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        Get Help Now
                      </Typography>
                    }
                  />
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
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        Who we are
                      </Typography>
                    }
                  />
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        Book a presentation
                      </Typography>
                    }
                  />
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        Donate
                      </Typography>
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <Box mb={2}>
                  <Typography
                    color={"PrimaryPurple"}
                    variant="button"
                    component="span"
                  >
                    RESOURCES
                  </Typography>
                </Box>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={0}
                >
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        Grades 3-5
                      </Typography>
                    }
                  />
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        Grages 6-7
                      </Typography>
                    }
                  />
                  <ListItemText
                    sx={{ my: 0 }}
                    primary={
                      <Typography color={"Grey800"} variant="caption">
                        Grages 8-12
                      </Typography>
                    }
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Stack
              direction="row"
              justifyContent={{
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-end",
                lg: "flex-end",
                xl: "flex-end",
              }}
              spacing={2}
              pt={{
                xs: 4,
                sm: 3,
                md: 3,
                lg: 3,
                xl: 3,
              }}
              mb={{ xs: 2, sm: 2, md: 0, lg: 0, xl: 0 }}
            >
              <InstagramIcon sx={{ color: "PrimaryPurple" }} fontSize="large" />
              <FacebookIcon sx={{ color: "PrimaryPurple" }} fontSize="large" />
            </Stack>
          </Grid>
        </Grid>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 1,
        }}
      >
        <Typography variant={"caption"} color={"Grey800"}>
          © 2024 Ally Global Foundation and Exploitation Education Institute
        </Typography>
        <Typography variant={"caption"} color={"Grey800"}>
          Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
