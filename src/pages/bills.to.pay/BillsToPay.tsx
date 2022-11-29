import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Details } from '../../shared/components';
import { BaseLayout } from '../../shared/layouts';
import { BillsToPayService } from '../../shared/services/bills.to.pay/bills.to.pay.service';

interface IProps {
  month: string,
  value: number,
}

export const BillsToPay: FC = () => {
  const [year, setYear] = useState<number>(new Date().getUTCFullYear());

  const [payments, setPayments] = useState<IProps | any>([])
  const [totalPayment, setTotalPayment] = useState<number>(0)

  useEffect(() => {
    (async () => {
      const response = await BillsToPayService.getValues();

      setYear(response.year);
      setPayments(response.payments);
      setTotalPayment(response.total_payments);
    })()
  }, [])

  return (
    <BaseLayout icon='credit_card' title='Bills To Pay' details={
      <Details
        right='Bills To Pay'
        center={year}
      />
    }>
      <Box width='100%' display='flex'>
        <Grid container margin={3}>
          <Grid item container spacing={4}>
            {
              payments && payments.map((p: IProps) => {
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
              })
            }
          </Grid>

          <Grid container marginTop={3}>
            <Grid item container spacing={4} display='flex' justifyContent='flex-end'>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={1}>
                <Card sx={{ bgcolor: 'primary.main' }}>
                  <CardContent>
                    <Typography variant='caption' align='left' color='#fff'>Total:</Typography>

                    <Box textAlign='left'>
                      <Typography variant='h5' color='#fff'>$ {totalPayment.toFixed(2)}</Typography>
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
