import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { BaseLayout } from '../../shared/layouts';

export const BillsToPay: FC = () => {
  return (
    <BaseLayout icon='dashboard_outlined' title='Bills To Pay'>
      <Box width='100%' display='flex'>
        <Grid container margin={1}>
          <Grid item container spacing={2}>
            Bills To Pay
          </Grid>
        </Grid>
      </Box>
    </BaseLayout >
  );
};
