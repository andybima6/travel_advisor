import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

// Export named styled components
export const MapContainer = styled(Box)({
  height: "85vh",
  width: "100%",
});

export const StyledPaper = styled(Paper)({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
});

export const MarkerContainer = styled(Box)({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": {
    zIndex: 2,
  },
});

export const Pointer = styled(Box)({
  cursor: "pointer",
});
