import * as React from "react";
import { useEffect, useState } from "react";
import Input from "./Input";
import Messages from "./Messages";

export enum Sender {
  WEBSITE,
  VISITOR,
}

export default function Chat({ dev = true }: any) {
  const [messages, setMessages] = useState<any>([]);
  const [autoMessages, setAutoMessages] = useState<string[]>([]);
  const [devMode, setDevMode] = useState<any>(dev);
  const lastMessage: Record<string, any> = messages.slice(-1)[0];
  useEffect(() => {
    if (lastMessage?.sender == Sender.VISITOR && autoMessages.length > 0) {
      setMessages([
        ...messages,
        { sender: Sender.WEBSITE, content: autoMessages.pop() },
      ]);
    }
  }, [lastMessage?.sender]);
  return (
    <div
      style={{
        width: 300,
        height: 350,
        background: "white",
        color: "black",
        direction: "rtl",
        position: "absolute",
        bottom: "5vh",
        right: "5vh",
      }}
    >
      <Messages messages={messages} />
      <Input
        placeholder={
          devMode ? "הקלידו הודעה או / כדי להתחיל התכתבות" : "תכתבי משהו..."
        }
        onSubmit={(message: string) =>
          devMode
            ? message == "/"
              ? setDevMode(false)
              : setAutoMessages([...autoMessages, message])
            : setMessages([
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
