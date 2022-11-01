import { FC } from 'react';
import { Avatar, Box, Divider, Drawer, Icon, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import ListItemMenu from './ListItemMenu/ListItemMenu';

export const Menu: FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { themeName, toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={isDrawerOpen ? 'permanent' : 'temporary'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(40)} height='100%' display='flex' flexDirection='column'>
          <Box width="100%" height={theme.spacing(20)} display='flex' justifyContent='center'>
            <Box display='flex' alignItems='center' justifyContent='center' flex={1}>
              <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src='https://www.github.com/YanKaiky.png' />

              <Box display='flex' alignItems='flex-start' flexDirection='column' margin={1}>
                <Typography variant='h5'>Yan Kaiky</Typography>

                <Typography variant='body2'>yankaikys@gmail.com</Typography>
              </Box>
            </Box>

            <Box>
              <IconButton onClick={toggleDrawerOpen}>
                <Icon>menu</Icon>
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
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {themeName === 'light' ? <Icon>dark_mode</Icon> : <Icon>brightness_4</Icon>}
                </ListItemIcon>
                <ListItemText primary='Theme' />
              </ListItemButton>

              <ListItemText>
                <Typography variant='body2' color='gray' textAlign='center'>
                  {`© ${new Date().getUTCFullYear()}, Fintellis`}
                </Typography>
              </ListItemText>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
