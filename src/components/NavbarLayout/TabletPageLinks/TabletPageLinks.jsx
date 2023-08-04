import MenuItem from '@mui/material/MenuItem';
import React, { useMemo, useState } from 'react';
import Link from '@material/Link';
import menuLinkArr from '../data/menuLinkArr';
import NavMenu from '../Elements/NavMenu';
import NavTabs from '../Elements/NavTabs';
import TabLink from '../Elements/TabLink';
import useFindCurrentPage from '../hooks/useFindCurrentPage';
import useNavMenu from './hooks/useNavMenu';
import useNavMenuJsx from './Elements/NavMenuJsx';
import NavMenuJsx from './Elements/NavMenuJsx';

export default React.memo(function TabletPagesLink() {
  const foundCurrentPage = useFindCurrentPage(menuLinkArr);

  const [value, setValue] = useState(foundCurrentPage ?? false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    open,
    openNavMenu,
    handleMouseLeave,
    handleMouseOnMenu,
    closeNavMenu,
  } = useNavMenu(setValue);

  const { link, nested } = useMemo(
    () => menuLinkArr.find(({ link }) => link === open?.link) || {},
    [open],
  );

  return (
    <>
      <NavTabs
        value={value}
        onChange={handleChange}
        onMouseLeave={handleMouseLeave}
      >
        {menuLinkArr.map(({ name, link }) => (
          <TabLink
            key={link}
            label={name}
            href={link}
            value={link}
            onMouseEnter={(e) => openNavMenu({ e, link })}
          />
        ))}
      </NavTabs>
      <NavMenuJsx
        setValue={setValue}
        link={link}
        nested={nested}
        open={open}
        closeNavMenu={closeNavMenu}
        handleMouseOnMenu={handleMouseOnMenu}
      />
    </>
  );
});
