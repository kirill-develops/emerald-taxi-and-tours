import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Link from '@material/Link';
import React, { useState } from 'react';
import menuLinkArr from '../data/menuLinkArr';
import ExpandMoreWrapper from '@elements/ExpandMore';
import DarkModeSwitch from './DrawerButton/Elements/DarkModeSwitch';

const borderRadiusStyles = { borderRadius: 4 };

const drawerListItemButtonStyles = (nested) => ({
  ...borderRadiusStyles,
  pr: nested ? 0 : null,
  mr: nested ? 3 : null,
});

function DrawerListItemButton({ children, nested, ...rest }) {
  return (
    <ListItemButton
      LinkComponent={Link}
      sx={() => drawerListItemButtonStyles(nested)}
      {...rest}
    >
      {children}
    </ListItemButton>
  );
}

export default function MobileDrawerLinks({ handleDrawerClose }) {
  const [openCollapse, setOpenCollapse] = useState(false);

  function ExpandClickIcon({ nested, link }) {
    if (!nested) return null;

    const handleExpandClick = () => {
      setOpenCollapse((prevState) => ({
        ...prevState,
        [link]: !prevState[link] ?? true,
      }));
    };

    return (
      <ExpandMoreWrapper
        expand={openCollapse[link]}
        onClick={handleExpandClick}
        sx={{
          '&:hover': {
            color: (theme) => theme.palette.primary.main,
          },
        }}
      >
        <ExpandMore color={openCollapse[link] ? 'primary' : 'inherit'} />
      </ExpandMoreWrapper>
    );
  }

  return (
    <List sx={{ mt: 10 }}>
      {menuLinkArr.map(({ name, link, icon, nested }) => {
        return (
          <React.Fragment key={link}>
            <ListItem
              key={link}
              secondaryAction={
                <ExpandClickIcon
                  nested={nested}
                  link={link}
                />
              }
            >
              <DrawerListItemButton
                href={link}
                onClick={handleDrawerClose}
                nested={nested}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </DrawerListItemButton>
            </ListItem>
            {nested ? (
              <Collapse
                in={openCollapse[link]}
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                >
                  {nested?.map(({ name: nestedName, link: nestedLink }) => (
                    <ListItem
                      key={nestedLink}
                      dense
                    >
                      <DrawerListItemButton
                        href={`${link}${nestedLink}`}
                        onClick={handleDrawerClose}
                        sx={borderRadiusStyles}
                      >
                        <ListItemText
                          primary={nestedName}
                          inset
                        />
                      </DrawerListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            ) : null}
          </React.Fragment>
        );
      })}
      <Divider />
      <ListItem secondaryAction={<ExpandClickIcon />}>
        <DarkModeSwitch />
      </ListItem>
    </List>
  );
}
