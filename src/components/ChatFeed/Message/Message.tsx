import { Avatar, Box } from "@mui/material";
import React from "react"; 

import PersonIcon from '@mui/icons-material/Person';
import SmartToyIcon from '@mui/icons-material/SmartToy';

import {avatar, defaultMsg, userMsg, defaultMsgBubble, userMsgBubble, botMsgBubble} from './style';

// move to the top
interface Msg {
  sender: 'bot' | 'user',
  msg: string
};

function Message ({msg: {sender, msg}}: {msg: Msg}) {
  return (
    <Box 
      sx={[defaultMsg, sender === 'user' && userMsg]}
    >
      <Avatar 
        alt={sender}
        sx={{...avatar}}
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
