import React, { useState } from 'react';
import menuLinkArr from './data/menuLinkArr';
import NavTabs from './Elements/NavTabs';
import TabLink from './Elements/TabLink';
import useFindCurrentPage from './hooks/useFindCurrentPage';

export default React.memo(function TabletPagesLink() {
  const foundCurrentPage = useFindCurrentPage(menuLinkArr);

  const [value, setValue] = useState(foundCurrentPage ?? false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavTabs
      value={value}
      onChange={handleChange}
    >
      {menuLinkArr.map(({ name, link }) => (
        <TabLink
          key={link}
          label={name}
          href={link}
          value={link}
        />
      ))}
    </NavTabs>
  );
});
