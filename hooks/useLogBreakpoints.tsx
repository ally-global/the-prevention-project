"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ReactNode, useEffect } from "react";

import useDevice from "@/hooks/useDevice";

const useLogBreakpoints = () => {
  const theme = useTheme();

  const matchedBreakpoints = theme.breakpoints.keys
    .map((k, index, keysArr) => {
      const bp = theme.breakpoints.values[k];
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const isMatched = useMediaQuery(`(min-width:${bp}px)`);
      if (isMatched) {
        return `${k} ${bp}-${
          theme.breakpoints.values[keysArr[index + 1]] || "∞"
        }`;
      } else return false;
    })
    .filter((b) => b);

  if (matchedBreakpoints.length) {
    return () => {
      console.log(
        `Breakpoint: %c${matchedBreakpoints[matchedBreakpoints.length - 1]}`,
        "color: lightblue; font-family:serif; font-size: 20px"
      );
    };
  }
};

export default useLogBreakpoints;

export const LogBreakpointWrapper = ({ children }: { children: ReactNode }) => {
  const devices = useDevice();
  const log = useLogBreakpoints();

  useEffect(() => {
    log?.();
    console.log(
      `Devices: %c${JSON.stringify(devices, null, 2)}`,
      "color: lightblue; font-family: serif; font-size: 20px;"
    );
  }, [devices, log]);

  return <div>{children}</div>;
};
