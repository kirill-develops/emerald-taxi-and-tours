import React from 'react';
import { pages } from '../Navbar';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

function TabletPagesLink({ dissapearingBreakpoint }) {
  const router = useRouter();
  const currentPage = useRouter().pathname.substring(1);
  const foundCurrentPage = pages.find(
    (page) => page.link === currentPage,
  )?.link;

  const [value, setValue] = useState(foundCurrentPage || false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="page links"
      centered
      sx={{
        alignSelf: 'stretch',
        flexGrow: 1,
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
          href={`../${link}`}
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
