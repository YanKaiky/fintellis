import { FC } from 'react';
import { Icon, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext } from '../../../contexts';

interface IListItemMenuProps {
  to: string,
  icon: string,
  label: string,
  onClick: (() => void) | undefined,
}

const ListItemMenu: FC<IListItemMenuProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const { isDrawerOpen } = useDrawerContext();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItem key={to} disablePadding sx={{ display: 'block' }} title={label}>
      <ListItemButton
        selected={!!match}
        onClick={handleClick}
        sx={{
          margin: 1,
          borderRadius: '10px',
          minHeight: 48,
          justifyContent: isDrawerOpen ? 'initial' : 'center',
          px: 2.5
        }}
      >
        <ListItemIcon sx={{ minWidth: 0, mr: isDrawerOpen ? 3 : 0, justifyContent: 'center' }}>
          <Icon color='secondary'>{icon}</Icon>
        </ListItemIcon>
        {isDrawerOpen && <ListItemText primary={label} sx={{ color: 'secondary.main' }} />}
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemMenu;