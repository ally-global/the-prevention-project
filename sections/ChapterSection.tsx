import StandardLayout from "@/components/StandardLayout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, MenuItem, Select } from "@mui/material";
import { ReactNode } from "react";

const StyledMenuItem = ({
  value,
  children,
}: {
  value: number;
  children: ReactNode;
}) => {
  return (
    <MenuItem
      value={value}
      sx={{
        backgroundColor: "PrimaryPurple",
        fontWeight: "bold",
        color: "White",
      }}
    >
      {children}
    </MenuItem>
  );
};

const ChapterSection = () => {
  return (
    <>
      <StandardLayout>
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "PrimaryPurple",
                "& .MuiMenuItem-root": {
                  minHeight: "48px",
                  "&.Mui-selected": { backgroundColor: "PrimaryPurple" },
                },
              },
            },
          }}
          defaultValue={1}
          sx={{
            backgroundColor: "PrimaryPurple",
            color: "White",
            width: "100%",
            border: "none !important",
            fontWeight: "bold",
            borderRadius: "8px",
            ".MuiOutlinedInput-notchedOutline": {
              border: "none !important",
            },
          }}
          disableUnderline
          IconComponent={KeyboardArrowDownIcon}
        >
          <StyledMenuItem value={1}>
            CHAPTER 1: Consent and Healthy Boundaries
          </StyledMenuItem>
          <StyledMenuItem value={2}>CHAPTER 2:</StyledMenuItem>
          <StyledMenuItem value={3}>CHAPTER 3:</StyledMenuItem>
        </Select>
      </StandardLayout>
      <Box height={200}></Box>
    </>
  );
};

export default ChapterSection;
