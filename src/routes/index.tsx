import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BillsToPay, BillsToReceive, Dashboard, Extract, Transfers } from '../pages';
import { useDrawerContext } from '../shared/contexts';

const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  const DrawerRoutes = [
    {
      label: 'Dashboard',
      icon: 'dashboard_outlined',
      path: '/'
    },
    {
      label: 'Bills To Pay',
      icon: 'credit_card',
      path: '/bills-to-pay'
    },
    {
      label: 'Bills To Receive',
      icon: 'card_travel',
      path: '/bills-to-receive'
    },
    {
      label: 'Extract',
      icon: 'account_balance',
      path: '/extract'
    }
    ,
    {
      label: 'Transfers',
      icon: 'local_atm',
      path: '/transfers'
    }
  ];

  useEffect(() => {
    setDrawerOptions(DrawerRoutes);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/bills-to-pay" element={<BillsToPay />} />
      <Route path="/bills-to-receive" element={<BillsToReceive />} />
      <Route path="/extract" element={<Extract />} />
      <Route path="/transfers" element={<Transfers />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
