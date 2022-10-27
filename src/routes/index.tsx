import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useDrawerContext } from '../shared/contexts';

const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  const DrawerRoutes = [
    {
      label: 'Dashboard',
      icon: 'dashboard_outlined',
      path: '/'
    }
  ];

  useEffect(() => {
    setDrawerOptions(DrawerRoutes);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
