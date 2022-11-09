import { FC } from 'react';
import { Avatar, Box, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import ListItemMenu from './ListItemMenu/ListItemMenu';

export const Menu: FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { themeName, toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant='permanent' onClose={toggleDrawerOpen}>
        <Box width={!isDrawerOpen ? theme.spacing(8) : theme.spacing(35)} height='100%' display='flex' flexDirection='column'>
          <Box width="100%" height={theme.spacing(10)} display='flex' justifyContent='center' alignItems='center'>
            {isDrawerOpen &&
              <Box display='flex' alignItems='center' flex={1}>
                <Avatar sx={{ height: theme.spacing(8), width: theme.spacing(8), margin: '0px 8px' }} src='https://www.github.com/YanKaiky.png' />

                <Box display='flex' alignItems='flex-start' flexDirection='column'>
                  <Typography variant='body1'>Yan Kaiky</Typography>

                  <Typography variant='body2'>yankaikys@gmail.com</Typography>
                </Box>
              </Box>
            }

            <Box marginRight={isDrawerOpen ? 1 : 0}>
              <IconButton onClick={toggleDrawerOpen}>
                {!isDrawerOpen ? <Icon>menu</Icon> : <Icon>arrow_back_ios</Icon>}
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
                    {themeName === 'light' ? <Icon>dark_mode</Icon> : <Icon>brightness_4</Icon>}
                  </ListItemIcon>
                  {isDrawerOpen && <ListItemText primary='Theme' />}
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
