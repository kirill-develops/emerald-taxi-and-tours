import React, { useEffect, useState } from 'react';
import Copyright from './Copyright';
import Navbar from './Navbar';

function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <Navbar />
      {children}
      <Copyright />
    </>
  );
}

export default Layout;
