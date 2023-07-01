import { LocalSeeOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { PopUpLink } from '@elements/Links';
import MaxWidthContainer from '@elements/MaxWidthContainer';
import { styled } from '@mui/material';
import { ParamContext } from '@Form/FormContextProvider';

const OverlayBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
    marginY: 2,
  }),
);

const OverlayLink = styled(PopUpLink)(({ theme }) =>
  theme.unstable_sx({
    position: 'absolute',
    zIndex: 1,
    bottom: 7,
    left: 7,
    gap: 0.5,
    alignItems: 'flex-end',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
);

export default function ImageOverlayWrapper({ children, ...rest }) {
  const {
    tripAdvisorDetails: {
      photo_count: photoCount,
      see_all_photos: seeAllPicUrl,
    },
  } = useContext(ParamContext);

  return seeAllPicUrl ? (
    <MaxWidthContainer
      disableGutters
      {...rest}
    >
      <OverlayBox>
        <OverlayLink href={seeAllPicUrl}>
          <LocalSeeOutlined fontSize="small" />
          <Typography
            variant="body2"
            fontWeight={500}
          >
            {' '}
            See All ({photoCount})
          </Typography>
        </OverlayLink>
        {children}
      </OverlayBox>
    </MaxWidthContainer>
  ) : (
    <MaxWidthContainer
      disableGutters
      {...rest}
    >
      {children}
    </MaxWidthContainer>
  );
}
