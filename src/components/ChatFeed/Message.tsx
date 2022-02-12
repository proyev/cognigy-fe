import { Avatar, Box } from "@mui/material";
import React from "react"; 

import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface Msg {
  sender: 'bot' | 'user',
  msg: string
};


// move away
const defaultMsg = {
  display: 'flex',
  margin: '5px 0',
  width: '100%',
};

const userMsg = {
  flexFlow: 'row-reverse'
}

const defaultMsgBubble = {
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
  maxWidth: '60%',
  padding: '0 4%',
};

const userMsgBubble = {
  backgroundColor: 'lightgrey',
  borderBottomLeftRadius: '10px',
};

const botMsgBubble = {
  backgroundColor: 'primary.dark',
  borderBottomRightRadius: '10px',
};

function Message ({msg: {sender, msg}}: {msg: Msg}) {
  return (
    <Box
      sx={[defaultMsg, sender === 'user' && userMsg]}
    >
      <Avatar 
        alt={sender}
        sx={{
          alignSelf: 'flex-end',
          bgcolor: 'dimgrey',
          margin: '.5% 1.5%',
          height: 24,
          width: 24,
        }}
      >
        {sender === 'user' ? <PersonIcon /> : <SmartToyIcon />}
      </Avatar>
      <Box
        sx={[defaultMsgBubble, sender === 'user' ? userMsgBubble : botMsgBubble]}
      >
        <p>{msg}</p>
      </Box>
    </Box>
  );
}


export default Message;
