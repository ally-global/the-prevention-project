"use client";

import Box from "@mui/material/Box";
import { RenderOn } from "@/utils/deviceUtils";
import Typography from "@mui/material/Typography";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const MenuItem = ({
  selected,
  backgroundColor,
  title,
  index,
}: {
  selected: boolean;
  backgroundColor: string;
  title: string;
  index: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const chapter = searchParams.get("chapter");
  return (
    <Box
      component={"button"}
      sx={{
        display: "flex",
        padding: { xs: 2, sm: 2, md: 3, lg: 4 },
        flex: 1,
        minHeight: { md: "80px" },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        textAlign: "center",
        cursor: "pointer",
        ":hover": {
          transform: "scaleY(1.05)",
          boxShadow: 4,
        },
        // I hate the persisted scale up
        ...(selected ? { transform: "scaleY(1.05)", boxShadow: 4 } : {}),
        border: "none",
        ...(index === 0
          ? { borderTopLeftRadius: "16px", borderBottomLeftRadius: "16px" }
          : {}),
        ...(index === 4
          ? { borderTopRightRadius: "16px", borderBottomRightRadius: "16px" }
          : {}),
      }}
      onClick={() => {
        router.push(
          `${pathname}?chapter=${chapter ?? 1}&section=${index + 1}`,
          { scroll: false }
        );
      }}
    >
      <RenderOn breakPoints={["md", "lg", "xl"]}>
        <Typography variant={"button"} color={"White"}>
          {title.toUpperCase()}
        </Typography>
      </RenderOn>
      <RenderOn breakPoints={["xs", "sm"]}>
        <Typography variant={"h6"} color={"White"}>
          {index + 1}
        </Typography>
      </RenderOn>
    </Box>
  );
};

const VideoMenu = ({ content }: { content: string[] }) => {
  const colors = [
    "#00B8C5",
    "#347AD1",
    "#673BDC",
    "#5538B7",
    "#423591",
    "#00B8C5",
    "#347AD1",
  ];
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "16px",
      }}
    >
      {content.map((contentTitle, index) => (
        <MenuItem
          selected={section ? Number(section) === index + 1 : index === 0}
          key={`menu-item-${index}`}
          backgroundColor={colors[index]}
          title={contentTitle}
          index={index}
        />
      ))}
    </Box>
  );
};

export default VideoMenu;
