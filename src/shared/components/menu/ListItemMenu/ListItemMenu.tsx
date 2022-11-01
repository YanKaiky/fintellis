import React, { FC } from 'react';
import { Icon, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IListItemMenuProps {
  to: string,
  icon: string,
  label: string,
  onClick: (() => void) | undefined,
}

const ListItemMenu: FC<IListItemMenuProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick} sx={{ margin: 1, borderRadius: '10px' }}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export default ListItemMenu;