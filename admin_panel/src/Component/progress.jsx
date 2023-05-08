import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box style={{width:"100%",marginTop:"0px"}}>
      <LinearProgress style={{width:'100%'}}/>
    </Box>
  );
}