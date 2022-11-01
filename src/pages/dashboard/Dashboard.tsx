import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { BaseLayout } from '../../shared/layouts';

export const Dashboard: FC = () => {
  return (
    <BaseLayout icon='dashboard_outlined' title='Dashboard'>
      <Box width='100%' display='flex'>
        <Grid container margin={1}>
          <Grid item container spacing={2}>
            Dashboard
          </Grid>
        </Grid>
      </Box>
    </BaseLayout >
  );
};
