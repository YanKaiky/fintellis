import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { BaseLayout } from '../../shared/layouts';

export const Dashboard: FC = () => {
  return (
    <BaseLayout icon='dashboard_outlined' title='Dashboard' toolbar={
      <Box width='100%' display='flex'>
        <Typography marginLeft={2}>Bills To Receive</ Typography>

        <Typography>{'< 2022 >'}</ Typography>
      </Box >
    }>
      <Box width='100%' display='flex'>
        <Grid container margin={3}>
          <Grid item container spacing={4}>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>January</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>February</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>March</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>April</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>May</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>June</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>July</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>August</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>September</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>October</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 2500.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>November</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 0.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
              <Card>
                <CardContent>
                  <Typography variant='caption' align='left'>December</Typography>

                  <Box textAlign='left'>
                    <Typography variant='h5'>$ 0.00</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container marginTop={3}>
            <Grid item container spacing={4} display='flex' justifyContent='flex-end'>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={1}>
                <Card sx={{ background: '#009e9e' }}>
                  <CardContent>
                    <Typography variant='caption' align='left'>Total:</Typography>

                    <Box textAlign='left'>
                      <Typography variant='h5'>$ 250000.00</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BaseLayout >
  );
};
