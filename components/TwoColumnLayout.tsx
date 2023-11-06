import Grid from "@mui/material/Grid";
import * as React from "react";
import useIsMobile from "../hooks/useIsMobile";

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
  spacing,
  pb,
}: {
  children: [React.ReactNode, React.ReactNode];
  leftCol?: number;
  rightCol?: number;
  columnWrapOrderOnMobile: ColumnWrapOrder;
  spacing?: MuiValues;
  pb?: MuiValues;
}) => {
  const isMobile = useIsMobile();
  const left = leftCol ?? 6;
  const right = rightCol ?? 5;
  if (left + right != 11) {
    throw new Error(`${left} col + ${right} col must equal 12`);
  }

  const defaultSpacing = {
    xs: 3,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 3,
  };

  return (
    <Grid
      container
      spacing={spacing ?? defaultSpacing}
      columns={{ xs: 4, sm: 12, md: 12, lg: 12, xl: 12 }}
      justifyContent="center"
      alignItems="center"
      height="100%"
      style={{
        marginTop: "0px",
      }}
    >
      <Grid
        item
        xs={4}
        sm={left}
        md={left}
        lg={left}
        xl={left}
        sx={{
          pt: `0px !important`,
        }}
      >
        {columnWrapOrderOnMobile === ColumnWrapOrder.REVERSE && isMobile
          ? children[1]
          : children[0]}
      </Grid>
      <Grid item xs={0} sm={1} md={1} lg={1} xl={1} />
      <Grid
        item
        xs={4}
        sm={right}
        md={right}
        lg={right}
        xl={right}
        pb={
          pb ?? {
            xs: 10,
            sm: 0,
            md: 0,
            lg: 0,
            xl: 0,
          }
        }
      >
        {columnWrapOrderOnMobile === ColumnWrapOrder.REVERSE && isMobile
          ? children[0]
          : children[1]}
      </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;
