import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDial, { speedDialClasses } from '@mui/material/SpeedDial';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import { QuestionAnswer } from '@mui/icons-material';
import useLoadingTransition from '@hooks/useLoadingTransition';
import Link from '@material/Link';

const withLink = (to, children) => (
  <Link
    href={to}
    target="_blank"
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    {children}
  </Link>
);

const actions = [
  {
    icon: withLink(
      'https://wa.me/18763642567/?text=Your%20message%20here',
      <WhatsappIcon />,
    ),
    name: 'WhatsApp',
    color: '#25D366',
  },
  {
    icon: withLink(
      'https://www.instagram.com/emeraldtaxiandtours_/',
      <InstagramIcon />,
    ),
    name: 'Instagram',
    color:
      'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
  },
];

function ContactSpeedDial() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const loadingTransitionStyle = useLoadingTransition();

  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Contact Emerald"
        icon={<QuestionAnswer />}
        onOpen={handleOpen}
        onClose={handleClose}
        open={open}
        sx={{
          ...loadingTransitionStyle,
          position: 'absolute',
          bottom: { xs: 105, sm: 45 },
          right: 45,
          [`& .${speedDialClasses.fab}`]: {
            backgroundColor: (theme) => theme.palette.info.main,
          },
        }}
      >
        {actions.map(({ name, icon, color, href }) => (
          <SpeedDialAction
            tooltipTitle={name}
            key={name}
            icon={icon}
            tooltipOpen
            onClick={handleClose}
            FabProps={{
              style: {
                background: color,
                color: (theme) => theme.palette.text.main,
              },
            }}
            href={href}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default ContactSpeedDial;
