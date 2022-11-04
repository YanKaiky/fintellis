import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { BaseLayout } from '../../shared/layouts';

export const Extract: FC = () => {
  return (
    <BaseLayout icon='account_balance' title='Extract'>
      <Box width='100%' display='flex'>
        <Grid container margin={1}>
          <Grid item container spacing={2}>
            Extract
          </Grid>
        </Grid>
      </Box>
    </BaseLayout >
  );
};
