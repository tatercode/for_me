import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import ToDoCard from './ToDoCard'
import Paper from '@mui/material/Paper'

const ToDo = () => {
  return (
    <Box sx={{display: 'flex',
             flexWrap: 'wrap',
             flex: 1,
    }}>
      <Paper elevation={2} sx={{display: 'flex',
                              width: 500,
                              height: 800,
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              flexWrap: 'wrap',}} >
        <Typography variant="h3" component="h2" sx={{mb: 2}}>
          Taven's TODOs
        </Typography>
        <ToDoCard/>
        <ToDoCard/>
        <ToDoCard/>
        <ToDoCard/>
        <ToDoCard/>
        <ToDoCard/>
      </Paper>
    </Box>
  )
}

export default ToDo;
