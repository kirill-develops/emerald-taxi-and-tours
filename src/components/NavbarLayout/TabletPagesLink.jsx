import React, { useState } from 'react';
import pages from '@data/sitePages';
import NavTabs from './Elements/NavTabs';
import TabLink from './Elements/TabLink';
import useFindCurrentPage from './hooks/useFindCurrentPage';

export default React.memo(function TabletPagesLink() {
  const foundCurrentPage = useFindCurrentPage(pages);

  const [value, setValue] = useState(foundCurrentPage ?? false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavTabs
      value={value}
      onChange={handleChange}
    >
      {pages.map(({ name, link }) => (
        <TabLink
          key={link}
          label={name}
          href={`/${link}`}
          value={link}
        />
      ))}
    </NavTabs>
  );
});
