import React, { useMemo, useState } from 'react';
import menuLinkArr from '../../data/menuLinkArr';
import NavTabs from './Elements/NavTabs';
import TabLink from './Elements/TabLink';
import useFindCurrentPage from '../../hooks/useFindCurrentPage';
import useNavMenu from './hooks/useNavMenu';
import NavMenuJsx from './Elements/NavMenuJsx';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default React.memo(function TabletPagesLink() {
  const foundCurrentPage = useFindCurrentPage(menuLinkArr);

  const [value, setValue] = useState(foundCurrentPage ?? false);

  const handleChange = (event, newValue) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

  const {
    open,
    openNavMenu,
    handleMouseLeave,
    handleMouseOnMenu,
    closeNavMenu,
    menuRef,
  } = useNavMenu(setValue);

  const { link, nested: nestedLinks } = useMemo(
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
            open={open}
            onMouseEnter={(e) => openNavMenu({ e, link })}
          />
        ))}
      </NavTabs>
      <NavMenuJsx
        setValue={setValue}
        link={link}
        nested={nestedLinks}
        open={open}
        closeNavMenu={closeNavMenu}
        handleMouseOnMenu={handleMouseOnMenu}
        menuRef={menuRef}
      />
    </>
  );
});
