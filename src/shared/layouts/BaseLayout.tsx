import { ReactNode, FC, useState } from 'react';
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useAppThemeContext, useDrawerContext } from '../contexts';
import { Menu } from '../components';

interface IBaseLayoutProps {
  icon: string,
  title: string,
  details?: ReactNode,
  children: ReactNode,
}

export const BaseLayout: FC<IBaseLayoutProps> = ({ icon, title, details, children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(true);

  const { isDrawerOpen } = useDrawerContext();

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 10)}
        display='flex'
        alignItems='center'
        gap={1}
      >
        <Box marginLeft={isDrawerOpen ? theme.spacing(35) : 6}>
          <Menu />
        </Box>

        <Box
          width='100%'
          display='flex'
          justifyContent='space-between'
          marginLeft={isDrawerOpen && !mdDown ? theme.spacing(0) : 1}
          marginRight={theme.spacing(1)}
        >
          <Typography display='flex' alignItems='center' variant={smDown ? 'h5' : mdDown ? 'h5' : 'h3'} overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
            <Icon fontSize='inherit' sx={{ marginRight: '1rem' }}>{icon}</Icon>{' '}

            {title}
          </Typography>

          {!mdDown && <Typography display='flex' alignItems='center' variant='h6' overflow='hidden' whiteSpace='nowrap' textOverflow='ellipsis'>
            Logo
          </Typography>}

          {
            !mdDown &&
            <Box bgcolor='background.paper' borderRadius='12px' padding='0 24px 0 12px' width={smDown ? '18%' : mdDown ? '14%' : '10%'}>
              <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
                <Typography variant='caption' align='left'>Balance</Typography>

                <Typography>
                  <IconButton onClick={() => setOpen(!open)}>
                    <Icon>{open ? 'visibility_outlined' : 'visibility_off_outlined'}</Icon>
                  </IconButton>
                </Typography>
              </Box>

              <Typography variant='subtitle1' fontWeight={600}>$ {!open ? (2620.00 + ((2620.00 - 300) / 2)).toFixed(2) : '*****'}</Typography>
            </Box>
          }
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' columnGap={0}>
        {details && (
          <Box
            overflow={isDrawerOpen && !smDown ? 'auto' : undefined}
            marginLeft={isDrawerOpen && !mdDown ? theme.spacing(45) : 5}
            marginRight={theme.spacing(5)}
            marginBottom='-1rem'
          >
            {details}
          </Box>
        )}
        <Box
          flex={1}
          overflow='auto'
          marginTop={2}
          marginRight={2}
          marginBottom={2}
          marginLeft={isDrawerOpen && !mdDown ? theme.spacing(38) : 10}
          borderRadius={8}
          bgcolor='background.paper'
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
