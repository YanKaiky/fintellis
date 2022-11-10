import { FC } from 'react';
import { Avatar, Box, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import ListItemMenu from './ListItemMenu/ListItemMenu';
import { useLocation } from 'react-router-dom';

export const Menu: FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const location = useLocation()

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { themeName, toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box
          width={!isDrawerOpen ? theme.spacing(8) : theme.spacing(35)}
          height='100%'
          display='flex'
          flexDirection='column'
          bgcolor={location.pathname === '/bills-to-receive' ? '#00C2FF' : 'primary.main'}
        >
          <Box width="100%" height={theme.spacing(10)} display='flex' justifyContent='center' alignItems='center'>
            {isDrawerOpen &&
              <Box display='flex' alignItems='center' flex={1}>
                <Avatar sx={{ height: theme.spacing(8), width: theme.spacing(8), margin: '0px 8px' }} src='https://www.github.com/YanKaiky.png' />

                <Box display='flex' alignItems='flex-start' flexDirection='column' sx={{ color: 'secondary.main' }}>
                  <Typography variant='body1'>Yan Kaiky</Typography>

                  <Typography variant='body2'>yankaikys@gmail.com</Typography>
                </Box>
              </Box>
            }

            <Box marginRight={isDrawerOpen ? 1 : 0}>
              <IconButton onClick={toggleDrawerOpen}>
                {!isDrawerOpen ? <Icon color='secondary'>menu</Icon> : <Icon color='secondary'>arrow_back_ios</Icon>}
              </IconButton>
            </Box>
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption => (
                <ListItemMenu
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  to={drawerOption.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItem disablePadding sx={{ display: 'block' }} title='Theme'>
                <ListItemButton
                  onClick={toggleTheme}
                  sx={{
                    margin: 1,
                    borderRadius: '10px',
                    minHeight: 48,
                    justifyContent: isDrawerOpen ? 'initial' : 'center',
                    px: 2.5
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0, mr: isDrawerOpen ? 3 : 0, justifyContent: 'center' }}>
                    {themeName === 'light' ? <Icon color='secondary'>dark_mode</Icon> : <Icon color='secondary'>brightness_4</Icon>}
                  </ListItemIcon>
                  {isDrawerOpen && <ListItemText primary='Theme' sx={{ color: 'secondary.main' }} />}
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
