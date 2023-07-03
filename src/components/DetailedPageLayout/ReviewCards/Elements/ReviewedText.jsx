import Typography from '@mui/material/Typography';
import React, { useContext, useMemo } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReviewContext from '@context/ReviewContext';

dayjs.extend(relativeTime);

const useFormatRelativeTime = (dateString) => {
  const formattedDate = useMemo(
    () => dayjs(dateString).fromNow(),
    [dateString],
  );

  return useMemo(() => formattedDate, [formattedDate]);
};

export default function WrittenText({ ...rest }) {
  const { published_date: publishedDate } = useContext(ReviewContext);

  const formattedDate = useFormatRelativeTime(publishedDate);

  return (
    <Typography
      variant="subtitle2"
      {...rest}
    >
      Reviewed {formattedDate}
    </Typography>
  );
}
