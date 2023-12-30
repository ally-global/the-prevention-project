import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useDevice = (breakpointBump: number = 0) => {
  const theme = useTheme();

  const lg = theme.breakpoints.values.lg + breakpointBump;
  const md = theme.breakpoints.values.md + breakpointBump;
  const sm = theme.breakpoints.values.sm + breakpointBump;

  const mdScreen = useMediaQuery(theme.breakpoints.down(lg));
  const smScreen = useMediaQuery(theme.breakpoints.down(md));
  const xsScreen = useMediaQuery(theme.breakpoints.down(sm));
  return { mdScreen, smScreen, xsScreen };
};

export default useDevice;
