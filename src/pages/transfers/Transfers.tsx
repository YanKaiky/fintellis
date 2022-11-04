import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { BaseLayout } from '../../shared/layouts';

export const Transfers: FC = () => {
  return (
    <BaseLayout icon='local_atm' title='Transfers'>
      <Box width='100%' display='flex'>
        <Grid container margin={1}>
          <Grid item container spacing={2}>
            Transfers
          </Grid>
        </Grid>
      </Box>
    </BaseLayout >
  );
};
