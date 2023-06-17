import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useContext, useMemo } from 'react';
import { ReviewContext } from '..';
import { Typography } from '@mui/material';

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
      <Typography variant="caption">{username}</Typography>
    );

    const locationEl = showLocation && locationName && (
      <Typography variant="caption">{locationName}</Typography>
    );

    return (
      <Stack
        direction="row"
        alignItems="center"
        columnGap={1}
      >
        <Avatar
          alt={`${username} profile pic`}
          src={original}
        />
        <Stack>
          {nameEl}
          {locationEl}
        </Stack>
      </Stack>
    );
  }, [original, showName, username, showLocation, locationName]);
}
