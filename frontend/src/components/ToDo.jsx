import React, {useState} from 'react';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DraggableArea from "./DraggableArea";
import AddBoxIcon from '@mui/icons-material/AddBox';

const ToDo = () => { // Store cards in state with proper IDs
  
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
    }}>
      <Paper elevation={2} sx={{
        display: 'flex',
        width: 500,
        height: 800,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
          Taven's TODOs
        </Typography>
        <DraggableArea ></DraggableArea>
        <AddBoxIcon sx={{ cursor: 'pointer' }} />
      </Paper>
    </Box>
  );
};

export default ToDo;
