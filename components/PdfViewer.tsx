import { Box } from "@mui/material";

const PdfViewer = () => {
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
        src={"/pdfs/sexting-and-exploitation.pdf"}
        type={"application/pdf"}
      />
    </Box>
  );
};

export default PdfViewer;
