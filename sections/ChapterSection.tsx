import StandardLayout from "@/components/StandardLayout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, MenuItem, Select } from "@mui/material";
import { ReactNode } from "react";

const StyledMenuItem = ({
  value,
  divider,
  children,
}: {
  value: number;
  children: ReactNode;
  divider?: boolean;
}) => {
  return (
    <MenuItem
      value={value}
      sx={{
        backgroundColor: "PrimaryPurple",
        fontWeight: "bold",
        fontSize: { xs: "14px", sm: "18px" },
        color: "White",
        minHeight: "48px",
        paddingY: 2,
      }}
      divider={divider}
    >
      {children}
    </MenuItem>
  );
};

const ChapterMenu = ({ chapters }: { chapters: string[] }) => {
  return (
    <>
      <StandardLayout>
        <Select
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
          defaultValue={0}
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
          {chapters.map((chapter, index) => {
            return (
              <StyledMenuItem
                key={index}
                value={index}
                divider={chapters.length - 1 > index}
              >
                {`CHAPTER ${index + 1}: ${chapter}`}
              </StyledMenuItem>
            );
          })}
        </Select>
      </StandardLayout>
    </>
  );
};

export default ChapterMenu;
