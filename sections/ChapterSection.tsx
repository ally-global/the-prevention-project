"use client";

import useDevice from "@/hooks/useDevice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const ChapterMenu = ({ chapters }: { chapters: string[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const chapter = searchParams.get("chapter");
  const { xsScreen } = useDevice();

  return (
    <Select
      id="chapter-menu"
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: "PrimaryPurple",
            ".MuiMenuItem-root": {
              minHeight: "48px",
            },
            "& .Mui-selected": {
              backgroundColor: "#5538B7 !important",
            },
            "& .MuiMenuItem-root:hover": {
              backgroundColor: "#5538B7 !important",
            },
          },
        },
      }}
      value={chapter ? Number(chapter) - 1 : 0}
      onChange={(e) => {
        router.push(`${pathname}?chapter=${Number(e.target.value) + 1}`, {
          scroll: false,
        });
      }}
      sx={{
        backgroundColor: "PrimaryPurple",
        color: "White",
        width: "100%",
        border: "none !important",
        fontWeight: "bold",
        fontSize: { xs: "14px", sm: "18px" },
        borderRadius: "8px",
        ".MuiOutlinedInput-notchedOutline": {
          border: "none !important",
        },
        ".MuiSvgIcon-root": { color: "white" },
      }}
      IconComponent={KeyboardArrowDownIcon}
    >
      {chapters.map((chapterName, index) => {
        return (
          <MenuItem
            key={`chapter-menu-${index}`}
            value={index}
            sx={{
              backgroundColor: "PrimaryPurple",
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "18px" },
              color: "White",
              minHeight: "48px",
              paddingY: 2,
            }}
            divider={false}
          >
            {`${xsScreen ? "" : `CHAPTER ${index + 1}: `}${chapterName}`}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default ChapterMenu;
