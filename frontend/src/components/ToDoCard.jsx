import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import {Typography, FormControlLabel} from "@mui/material";
import {useState} from 'react';

const ToDoCard = ({text, completed}) => {
  const [checked, setCheck] = useState(completed);

  const handleCheck = () => {
    setCheck(!checked);
  }
  return (
      <Paper elevation={3} sx={{width: 300,
                                height: 100,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                mb: 3,
                                }}>
          <FormControlLabel 
            control={<Checkbox
                    onChange={handleCheck}
                    checked={checked}
                    />}
            sx={{ml: 1}}
             />
        <Typography sx={{
          textDecoration: checked ? 'line-through' : 'none'
        }}>{text}</Typography>
      </Paper>
  )
}

export default ToDoCard;
