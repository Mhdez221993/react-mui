import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";

const heights = [
  150, 30, 90, 79, 110, 140, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

export const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
