import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BillsToPay, BillsToReceive, Dashboard } from '../pages';
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
      icon: 'payments',
      path: '/bills-to-pay'
    },
    {
      label: 'Bills To Receive',
      icon: 'receives',
      path: '/bills-to-receive'
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
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
