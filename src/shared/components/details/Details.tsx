import { Box, Icon, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface IDetailsProps {
  left?: ReactNode,
  center: number | string,
  right: string,
  icon?: string,
  onRightClick?: () => void,
}

export const Details: FC<IDetailsProps> = ({
  left,
  center,
  right,
  icon,
  onRightClick,
}) => {
  return (
    <Box width='100%' display='flex' alignItems='center' justifyContent='space-between'>
      <Box>{left ?? <></>}</Box>

      <Typography sx={{ color: 'secondary.contrastText' }}>{center}</Typography>

      {icon ?
        <Box>
          <Typography
            onClick={() => onRightClick?.()}
            display='flex'
            alignItems='center'
            sx={{
              color: 'secondary.contrastText',
              cursor: 'pointer',
              ':hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {right} <Icon onClick={() => onRightClick?.()} sx={{ marginLeft: 1 }}>{icon}</Icon>
          </Typography>
        </Box>
        :
        <Typography
          onClick={() => onRightClick?.()}
          variant='caption'
          sx={{
            color: 'secondary.contrastText',
            cursor: 'pointer',
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {right}
        </Typography>
      }
    </Box >
  )
}
