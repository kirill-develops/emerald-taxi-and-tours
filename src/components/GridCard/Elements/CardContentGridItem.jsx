import React from 'react';
import { GridItem } from '@elements/CustomGridEl';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export default function CardContentGridItem({ children, ...rest }) {
  return (
    <GridItem
      xxs={7}
      sx={styles}
      {...rest}
    >
      {children}
    </GridItem>
  );
}
