import { Box, IconButton, TextField } from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import React from "react";

function InputField() {
  return (
    <Box>
      <TextField 
        fullWidth
        label="Type a message"
        id="form-input-msg"
        multiline
        minRows={1}
        maxRows={4}
        variant="standard"
      />
      <IconButton aria-label="attach file">
        <AttachFileIcon />
      </IconButton>
      <IconButton aria-label="send msg">
        <SendIcon />
      </IconButton>
    </Box>
  );
}

export default InputField;
