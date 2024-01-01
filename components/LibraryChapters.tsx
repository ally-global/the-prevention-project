"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Chapter = ({
  number,
  title,
  content,
}: {
  number: number;
  title: string;
  content: any[];
}) => {
  const [fullWidth, setFullWidth] = useState<boolean>(false);
  return (
    <Box sx={{ width: { xs: "100%", sm: fullWidth ? "100%" : "50%" } }}>
      <Accordion
        onChange={() => {
          setFullWidth(!fullWidth);
        }}
        disableGutters
        sx={{
          margin: 1,
          borderRadius: "20px !important",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon fontSize="large" sx={{ color: "Grey900" }} />
          }
          sx={{
            padding: 4,
            height: "135px",
          }}
        >
          <Stack spacing={1}>
            {number > 0 ? (
              <Typography color={"PrimaryBlue"} variant="button">
                {`Chapter ${number}`}
              </Typography>
            ) : (
              <></>
            )}
            <Typography
              color={"black"}
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "Grey900",
              }}
            >
              {title}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const LibraryChapters = ({
  chapters,
}: {
  chapters: { title: string; content: any[] }[];
}) => {
  return (
    <>
      <Stack sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {chapters.map((chapter, index) => {
          return (
            <Chapter
              key={index}
              number={index}
              title={chapter.title}
              content={chapter.content}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default LibraryChapters;
