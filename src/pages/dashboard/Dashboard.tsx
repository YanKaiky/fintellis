import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { Details } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';
import { DashboardService } from '../../shared/services/dashboard/dashboard.service';

interface IProps {
  month: string,
  value: number,
}

export const Dashboard: FC = () => {
  const [year, setYear] = useState<number>(new Date().getUTCFullYear());
  const [dashboard, setDashboard] = useState<boolean>(true)

  const [payments, setPayments] = useState<IProps | any>([])
  const [totalPayment, setTotalPayment] = useState<number>(0)

  const [receives, setReceives] = useState<IProps | any>([])
  const [totalReceives, setTotalReceives] = useState<number>(0)

  useEffect(() => {
    (async () => {
      const response = await DashboardService.getValues();

      setYear(response.year);
      setPayments(response.payments);
      setReceives(response.receives);
      setTotalPayment(response.total_payments);
      setTotalReceives(response.total_received);
    })()
  }, [])

  return (
    <BaseLayout icon='dashboard_outlined' title='Dashboard' details={
      <Details
        right={dashboard ? 'Receiveds' : 'Paymentes'}
        icon='sync_alt_outlined'
        onRightClick={() => setDashboard(!dashboard)}
        center={year}
      />
    }>
      <Box width='100%' display='flex'>
        <Grid container margin={3}>
          <Grid item container spacing={4}>
            {
              dashboard ? payments.map((p: IProps) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={1} key={p.month}>
                    <Card sx={{ bgcolor: 'background.default', borderRadius: '10px' }}>
                      <CardContent>
                        <Typography variant='caption' align='left'>{p.month}</Typography>

                        <Box textAlign='left'>
                          <Typography variant='h5'>$ {p.value.toFixed(2)}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              }) :
                receives.map((r: IProps) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={1} key={r.month}>
                      <Card sx={{ bgcolor: 'background.default', borderRadius: '10px' }}>
                        <CardContent>
                          <Typography variant='caption' align='left'>{r.month}</Typography>

                          <Box textAlign='left'>
                            <Typography variant='h5'>$ {r.value.toFixed(2)}</Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                })
            }
          </Grid>

          <Grid container marginTop={3}>
            <Grid item container spacing={4} display='flex' justifyContent='flex-end'>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={1}>
                <Card sx={{ bgcolor: dashboard ? 'primary.main' : '#00C2FF', borderRadius: '10px' }}>
                  <CardContent>
                    <Typography variant='caption' align='left' color='#fff'>Total:</Typography>

                    <Box textAlign='left'>
                      <Typography variant='h5' color='#fff'>$ {dashboard ? totalPayment.toFixed(2) : totalReceives.toFixed(2)}</Typography>
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
