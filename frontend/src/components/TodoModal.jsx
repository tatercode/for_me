import React, {useState} from 'react';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {Typography, Button, TextField} from '@mui/material';
import Modal from '@mui/material/Modal';
import {post_todo} from './api/todo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// Todo: fix modal to rerender cards to add new card 
export default function TodoModal({open, setOpen}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const newTodo = { text: text,
                        completed: false };
      const result = await post_todo(newTodo);
      console.log('Todo posted successfully:', result);
      setText("");
      handleClose();
    } catch (error) {
      console.error('Failed to post todo:', error);
    }
  };

  return (
    <div>
      <AddBoxIcon onClick={handleOpen} sx={{ cursor: 'pointer' }} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <TextField
            id="modal-modal-input"
            label="Your Input"
            variant="outlined"
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
