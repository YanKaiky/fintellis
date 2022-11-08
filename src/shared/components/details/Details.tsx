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

      <Typography>{center}</Typography>

      {icon ?
        <Box>
          <Typography
            onClick={() => onRightClick?.()}
            variant='button'
            display='flex'
            alignItems='center'
            sx={{
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
