import React, {useState} from 'react';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DraggableArea from "./DraggableArea";
import TodoModal from './TodoModal'; 

const ToDo = () => { // Store cards in state with proper IDs
  const [open, setOpen] = React.useState(false);

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
        <TodoModal setOpen={setOpen} open={open}/>
      </Paper>
    </Box>
  );
};

export default ToDo;
