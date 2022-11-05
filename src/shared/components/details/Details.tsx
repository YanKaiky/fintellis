import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useDrawerContext } from '../../contexts';

interface IDetailsProps {
  left: string,
  center: number | string,
  right?: ReactNode,
}

export const Details: FC<IDetailsProps> = ({
  left,
  center,
  right,
}) => {
  return (
    <Box width='100%' display='flex' alignItems='center' justifyContent='space-between'>
      <Typography
        variant='caption'
        sx={{
          cursor: 'pointer',
          ':hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {left}
      </Typography>

      <Typography>{center}</Typography>

      {right && <Box>{right}</Box>}
    </Box >
  )
}
