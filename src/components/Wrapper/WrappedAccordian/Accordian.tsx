import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
type props = {
  title: string;
  description: string;
  style?: any;
};
const Accordian = ({ title, description }: props) => {
  return (
    <div>
      <Accordion
        sx={{ background: '#F0E8DB', color: '#545454', marginBottom: 2 }}
      >
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ background: '#fff', color: '#2E5D9E' }}>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
