import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { Details } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';

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
    const response = {
      year: 2022,
      payments: [
        {
          month: "January",
          value: 2500.00
        },
        {
          month: "February",
          value: 2500.00
        },
        {
          month: "March",
          value: 2500.00
        },
        {
          month: "April",
          value: 2500.00
        },
        {
          month: "May",
          value: 2500.00
        },
        {
          month: "June",
          value: 2500.00
        },
        {
          month: "July",
          value: 2500.00
        },
        {
          month: "August",
          value: 2500.00
        },
        {
          month: "September",
          value: 2500.00
        },
        {
          month: "October",
          value: 2500.00
        },
        {
          month: "November",
          value: 0.00
        },
        {
          month: "December",
          value: 0.00
        },
      ],
      receives: [
        {
          month: "January",
          value: 500.00
        },
        {
          month: "February",
          value: 500.00
        },
        {
          month: "March",
          value: 500.00
        },
        {
          month: "April",
          value: 500.00
        },
        {
          month: "May",
          value: 500.00
        },
        {
          month: "June",
          value: 500.00
        },
        {
          month: "July",
          value: 500.00
        },
        {
          month: "August",
          value: 500.00
        },
        {
          month: "September",
          value: 500.00
        },
        {
          month: "October",
          value: 500.00
        },
        {
          month: "November",
          value: 0.00
        },
        {
          month: "December",
          value: 0.00
        },
      ],
      total_payments: 25000,
      total_received: 5000
    }

    setYear(response.year);
    setPayments(response.payments);
    setReceives(response.receives);
    setTotalPayment(response.total_payments);
    setTotalReceives(response.total_received);
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
