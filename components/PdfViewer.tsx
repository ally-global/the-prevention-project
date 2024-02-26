import { Box } from "@mui/material";

const PdfViewer = ({ pathToFile }: { pathToFile: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <embed
        style={{
          height: "750px",
          width: "100%",
        }}
        src={pathToFile}
        type={"application/pdf"}
      />
      {/* <a href={pathToFile} download="proposed_file_name">
        Download
      </a> */}
    </Box>
  );
};

export default PdfViewer;
