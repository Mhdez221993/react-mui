import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const MuiAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            accusantium vero molestiae facilis libero culpa delectus beatae
            provident! Accusamus nobis veniam, perspiciatis distinctio quaerat
            maiores nostrum dolorum debitis? Ducimus, accusamus!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
