import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useContext, useMemo } from 'react';
import ReviewContext from '@context/ReviewContext';

export default function AvatarEl({ showName = false, showLocation = false }) {
  const {
    user: {
      avatar,
      username,
      user_location: { name: locationName },
    },
  } = useContext(ReviewContext);

  const { original = avatar.large } = avatar;

  return useMemo(() => {
    const nameEl = showName && username && (
      <Typography
        variant="caption"
        sx={{ textAlign: { md: 'center' } }}
      >
        {username}
      </Typography>
    );

    const locationEl = showLocation && locationName && (
      <Typography
        variant="caption"
        sx={{ textAlign: { md: 'center' } }}
      >
        {locationName}
      </Typography>
    );

    return (
      <Stack
        direction={{ xxs: 'row', md: 'column' }}
        alignItems="center"
        gap={1}
        sx={{ flexBasis: '10%', minWidth: '80px' }}
      >
        <Avatar
          alt={`${username} profile pic`}
          src={original}
          sx={{ width: { md: 54 }, height: { md: 54 } }}
        />
        <Stack>
          {nameEl}
          {locationEl}
        </Stack>
      </Stack>
    );
  }, [original, showName, username, showLocation, locationName]);
}
