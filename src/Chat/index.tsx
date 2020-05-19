import * as React from "react";
import { useEffect, useState } from "react";
import initMessages from "./messages.json";
import Input from "./Input";
import Messages from "./Messages";

export enum Sender {
  WEBSITE,
  VISITOR,
}

export default function Chat({ style }: any) {
  const [messages, setMessages] = useState(initMessages);

  return (
    <div
      style={{
        width: 300,
        height: 400,
        background: "white",
        color: "black",
        overflow: "auto",
        direction: "rtl",
        position: "absolute",
        bottom: "5vh",
        right: "5vh",
      }}
    >
      <Messages messages={messages} />
      <Input
        onSubmit={(message: string) =>
          setMessages([
            ...messages,
            {
              content: message,
              time: new Date().toISOString(),
              sender: Sender.VISITOR,
            },
          ])
        }
      />
    </div>
  );
}
