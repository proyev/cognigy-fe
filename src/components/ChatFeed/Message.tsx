import { Avatar, Box } from "@mui/material";
import React from "react"; 

import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface Msg {
  sender: 'bot' | 'user',
  msg: string
};

function Message ({msg: {sender, msg}}: {msg: Msg}) {
  return (
    <Box
      sx={{
        backgroundColor: 'red',
        display: 'flex',
        margin: '5px 0',
        width: '100%',
      }}
    >
      <Avatar 
        alt={sender}
        sx={{
          alignSelf: 'flex-end',
          bgcolor: 'primary.light',
          margin: '.5% 1.5%',
          height: 24,
          width: 24,
        }}
      >
        {sender === 'user' ? <PersonIcon /> : <SmartToyIcon />}
      </Avatar>
      <Box
        sx={{
          backgroundColor: 'green',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
          maxWidth: '70%',
          padding: '0 4%',
        }}
      >
        <p>{msg}</p>
      </Box>
    </Box>
  );
}

// apply two different stylings

export default Message;
