import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalSeeOutlined from '@mui/icons-material/LocalSeeOutlined';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import { ParamContext } from '@context/FormContextProvider';
import { PopUpLink } from '@elements/Links';
import MaxWidthContainer from '@elements/MaxWidthContainer';

const OverlayBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    position: 'relative',
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
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
);

export default React.memo(function ImageOverlayWrapper({ children, ...rest }) {
  const {
    tripAdvisorDetails: {
      photo_count: photoCount,
      see_all_photos: seeAllPicUrl,
    } = {},
  } = useContext(ParamContext);

  return seeAllPicUrl ? (
    <>
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
    </>
  ) : (
    <MaxWidthContainer
      disableGutters
      disableStack
      {...rest}
    >
      {children}
    </MaxWidthContainer>
  );
});
