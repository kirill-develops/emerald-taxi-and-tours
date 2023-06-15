import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDial, { speedDialClasses } from '@mui/material/SpeedDial';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import { QuestionAnswer } from '@mui/icons-material';
import Link from '@material/Link';

const actions = [
  {
    icon: <WhatsappIcon />,
    name: 'WhatsApp',
    color: '#25D366',
    href: 'https://wa.me/18763642567/',
  },
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    color:
      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
    href: 'https://www.instagram.com/emeraldtaxiandtours_/',
  },
];

const backdropStyles = { zIndex: 1 };

const speedDialStyles = {
  position: 'absolute',
  bottom: { xs: 105, sm: 45 },
  right: 45,
  zIndex: 10,
  [`& .${speedDialClasses.fab}`]: {
    backgroundColor: (theme) => theme.palette.info.main,
  },
};

const speedDialActionFabProps = (href, color) => ({
  href,
  component: Link,
  target: '_blank',
  sx: {
    background: color,
    color: (theme) => theme.palette.text.main,
    '&:hover': {
      filter: 'brightness(1.2)',
      background: color,
    },
  },
});

function ContactSpeedDial() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Backdrop
        open={open}
        sx={backdropStyles}
      />
      <SpeedDial
        ariaLabel="Contact Emerald"
        icon={<QuestionAnswer />}
        onOpen={handleOpen}
        onClose={handleClose}
        open={open}
        sx={speedDialStyles}
      >
        {actions.map(({ name, icon, color, href }) => (
          <SpeedDialAction
            tooltipTitle={name}
            key={name}
            icon={icon}
            tooltipOpen
            onClick={handleClose}
            FabProps={speedDialActionFabProps(href, color)}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default ContactSpeedDial;
