'use client';

import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const PerspectiveSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        left: -1,
        top: -1,
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="22" viewBox="0 0 20 20"><path  fill="${encodeURIComponent('#fff')}" d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"></path></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: -2,
      top: -1,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff')}" d="M20.69 4.05C18.66 4.73 15.86 5.5 12 5.5c-3.89 0-6.95-.84-8.69-1.43-.64-.22-1.31.26-1.31.95V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45.65.21 1.31-.27 1.31-.95V5c0-.68-.66-1.16-1.31-.95zM12 15c-2.34 0-4.52.15-6.52.41l3.69-4.42 2 2.4L14 10l4.51 5.4c-1.99-.25-4.21-.4-6.51-.4z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export default PerspectiveSwitch;
