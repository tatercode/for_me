import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import {Typography} from "@mui/material";
const ToDoCard = () => {
  return (
    <Paper elevation={3} sx={{width: 300,
                              height: 100,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'flex-start',
                              mb: 1,
                              }}>
            
      <Checkbox/>
      <Typography>Some thing here....</Typography>
    </Paper>
  )
}

export default ToDoCard;
