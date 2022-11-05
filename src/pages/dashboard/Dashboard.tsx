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
  const [dashboard, setDashboard] = useState<IProps | any>()

  useEffect(() => {
    const response = {
      year: 2022,
      months: [
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
      total: 25000
    }

    setDashboard(response)
  }, [])

  return (
    <BaseLayout icon='dashboard_outlined' title='Dashboard' details={
      <Details left='Bills To Receive' center={dashboard && dashboard.year} />
    }>
      <Box width='100%' display='flex'>
        <Grid container margin={3}>
          <Grid item container spacing={4}>
            {
              dashboard && dashboard.months.map((v: IProps) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={1}>
                    <Card>
                      <CardContent>
                        <Typography variant='caption' align='left'>{v.month}</Typography>

                        <Box textAlign='left'>
                          <Typography variant='h5'>$ {v.value.toFixed(2)}</Typography>
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
                <Card sx={{ background: '#009e9e' }}>
                  <CardContent>
                    <Typography variant='caption' align='left'>Total:</Typography>

                    <Box textAlign='left'>
                      <Typography variant='h5'>$ {dashboard && dashboard.total.toFixed(2)}</Typography>
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
