import Typography from '@mui/material/Typography';
import React, { useContext, useMemo } from 'react';
import dayjs from 'dayjs';
import { ReviewContext } from '../../';

const useFormatDate = (dateString) => {
  const formattedDate = useMemo(
    () => dayjs(dateString).format('MMMM YYYY'),
    [dateString],
  );

  return useMemo(() => formattedDate, [formattedDate]);
};

export default function TravelDateAndType() {
  const { travel_date: travelDate, trip_type: tripType } =
    useContext(ReviewContext);

  const formattedDate = useFormatDate(travelDate);

  const hasTripType = useMemo(
    () => tripType && tripType !== 'NONE',
    [tripType],
  );

  return (
    <Typography variant="subtitle2">
      {formattedDate}
      {formattedDate && hasTripType && ' • '}
      {hasTripType && tripType}
    </Typography>
  );
}
