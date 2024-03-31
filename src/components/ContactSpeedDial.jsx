import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDial, { speedDialClasses } from '@mui/material/SpeedDial';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import QuestionAnswer from '@mui/icons-material/QuestionAnswer';
import React, { useState } from 'react';
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

const StyledBackdrop = styled(Backdrop)(({ theme }) =>
  theme.unstable_sx({ zIndex: 1 }),
);

const StyledSpeedDial = styled((props) => (
  <SpeedDial
    ariaLabel="Contact Emerald"
    FabProps={{ elevation: 10 }}
    icon={<QuestionAnswer />}
    {...props}
  />
))(({ theme }) =>
  theme.unstable_sx({
    position: 'fixed',
    bottom: { xxs: 95, sm: 45 },
    right: 35,
    zIndex: theme.zIndex.fab,

    [`& .${speedDialClasses.fab}`]: {
      height: 50,
      width: 50,
      boxShadow: theme.shadows[10],
      backgroundColor: theme.palette.info.main,
    },
  }),
);

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

export default React.memo(function ContactSpeedDial() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledBackdrop open={open} />
      <StyledSpeedDial
        onOpen={handleOpen}
        onClose={handleClose}
        open={open}
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
      </StyledSpeedDial>
    </>
  );
});
