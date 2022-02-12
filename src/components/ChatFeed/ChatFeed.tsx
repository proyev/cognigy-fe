import { Box } from "@mui/material";
import React, {useState, useEffect} from "react";

import Message from './Message';

interface Msg {
  sender: 'bot' | 'user',
  msg: string
};

function ChatFeed() {

  // for now simple array of strings - later on 
  const [messages, setMessages] = useState<Msg[]>([]);

  useEffect(() => {
    setMessages([
      {
        sender: 'user',
        msg: 'hello',
      },
      {
        sender: 'bot',
        msg: 'hello there akghjafg gadg hdflg jadflg jag ldf glad dflg jdfalg jfdlg ajg ldfg ldag jflgsjlgjksdjl sdjfl',
      },
      {
        sender: 'user',
        msg: 'hello',
      },
    ])
  }, []);

  return (
    <Box>
      {messages.map((msg: Msg, msgIdx: number) => (
        <Message 
          key={msgIdx.toString()}
          msg={msg}
        />
      ))}
    </Box>
  );
}

export default ChatFeed;
