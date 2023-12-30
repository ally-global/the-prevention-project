import { RenderOn } from "@/utils/deviceUtils";
import { Box, SxProps, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { ReactNode } from "react";

const variantOnMobile = {
  h1: "h3" as const,
  h2: "h4" as const,
  h3: "h5" as const,
  h4: "h5" as const,
  h5: "h6" as const,
  h6: "h6" as const,
  body1: "body2" as const,
  body2: "caption" as const,
  caption: "caption" as const,
  subtitle1: "subtitle1" as const,
  subtitle2: "subtitle2" as const,
  overline: "overline" as const,
  button: "button" as const,
};

const Text = ({
  variant,
  children,
  color,
  sxMobile,
  sx,
}: {
  variant: Variant;
  children: ReactNode;
  color?: string;
  sx?: SxProps;
  sxMobile?: SxProps;
}) => {
  return (
    <Box>
      <RenderOn breakPoints={["xs", "sm"]}>
        <Typography
          variant={variantOnMobile[variant]}
          sx={sxMobile ?? sx}
          color={color}
        >
          {children}
        </Typography>
      </RenderOn>
      <RenderOn breakPoints={["md", "lg", "xl"]}>
        <Typography variant={variant} sx={sx} color={color}>
          {children}
        </Typography>
      </RenderOn>
    </Box>
  );
};

export default Text;
