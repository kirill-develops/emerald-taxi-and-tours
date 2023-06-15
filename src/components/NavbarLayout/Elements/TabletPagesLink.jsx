import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from '@material/Link';
import pages from '@data/sitePages';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

function TabletPagesLink({ dissapearingBreakpoint }) {
  const currentPage = useRouter().asPath.split('/')[1];

  const foundCurrentPage = pages.find(
    (page) => page.link === currentPage,
  )?.link;

  const [value, setValue] = useState(foundCurrentPage ?? false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      aria-label="page links"
      centered
      sx={{
        alignSelf: 'stretch',
        flexGrow: 1,
        flexBasis: 'content',
        display: {
          xs: 'none',
          [dissapearingBreakpoint]: 'flex',
        },
      }}
    >
      {pages.map(({ name, link }) => (
        <LinkTab
          key={link}
          label={name}
          href={`/${link}`}
          value={link}
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
          }}
        />
      ))}
    </Tabs>
  );
}

export default TabletPagesLink;
