import { SxProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";

import useDevice from "@/hooks/useDevice";

export enum ColumnWrapOrder {
  REVERSE = "reverse",
  NORMAL = "normal",
}

type MuiValues =
  | number
  | { xs: number; sm: number; md: number; lg: number; xl: number };

const TwoColumnLayout = ({
  children,
  leftCol,
  rightCol,
  columnWrapOrderOnMobile,
  noGap,
  pb,
  sx,
}: {
  children: [React.ReactNode, React.ReactNode];
  leftCol?: number;
  rightCol?: number;
  columnWrapOrderOnMobile: ColumnWrapOrder;
  noGap?: Boolean;
  spacing?: MuiValues;
  pb?: MuiValues;
  sx?: SxProps;
}) => {
  const { smScreen: isMobile } = useDevice();
  const left = leftCol ?? 6;
  const right = rightCol ?? 5;
  if (!(left + right === 12 || left + right === 11)) {
    throw new Error(`${left} col + ${right} col must equal 12`);
  }

  return (
    <Grid
      container
      spacing={0}
      columns={{ xs: 4, sm: 4, md: 12, lg: 12, xl: 12 }}
      justifyContent="center"
      alignItems="center"
      height="100%"
      style={{
        marginTop: "0px",
        padding: `0px !important`,
        width: `100%`,
        height: `100%`,
      }}
      sx={sx || {}}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={left}
        lg={left}
        xl={left}
        sx={{
          p: `0px !important`,
          m: `0px !important`,
        }}
      >
        {columnWrapOrderOnMobile === ColumnWrapOrder.REVERSE && isMobile
          ? children[1]
          : children[0]}
      </Grid>
      <Grid
        sx={{
          p: `0px !important`,
          m: `0px !important`,
        }}
        item
        xs={0}
        sm={0}
        md={noGap ? 0 : 1}
        lg={noGap ? 0 : 1}
        xl={noGap ? 0 : 1}
      />
      <Grid
        item
        xs={4}
        sm={4}
        md={right}
        lg={right}
        xl={right}
        pb={
          pb ?? {
            xs: 10,
            sm: 10,
            md: 0,
            lg: 0,
            xl: 0,
          }
        }
        sx={{
          p: `0px !important`,
          m: `0px !important`,
        }}
      >
        {columnWrapOrderOnMobile === ColumnWrapOrder.REVERSE && isMobile
          ? children[0]
          : children[1]}
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
