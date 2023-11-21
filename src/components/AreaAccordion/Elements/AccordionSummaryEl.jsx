import AccordionSummary from '@mui/material/AccordionSummary';
import CardActionArea from '@mui/material/CardActionArea';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

const accordionSummaryStyles = {
  color: (theme) => theme.palette.secondary.contrastText,
};

export default React.memo(function AccordionSummaryEl({
  link,
  children,
  ...rest
}) {
  return (
    <CardActionArea
      component="div"
      disableRipple
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={accordionSummaryStyles} />}
        aria-controls={`${link}-transfers-content`}
        id={`${link}-transfers-header`}
        {...rest}
      >
        {children}
      </AccordionSummary>
    </CardActionArea>
  );
});
