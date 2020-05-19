import * as React from "react";
import { useEffect } from "react";
import Message from "./Message";
import { animateScroll } from "react-scroll";

export default function Messages({ messages }: any) {
  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: "messageBox",
      duration: 100,
      delay: 0,
      smooth: true,
    });
  }, [JSON.stringify(messages)]);

  return (
    <div
      id="messageBox"
      style={{
        height: "calc(100% - 80px)",
        display: "flex",
        flexDirection: "column",
        background: "white",
        color: "black",
        overflow: "auto",
        padding: 16,
      }}
    >
      {messages.map(({ sender, time, content }: any, key: number) => (
        <Message
          {...{ sender, time, content, key }}
          last={key + 1 == messages.length}
        />
      ))}
    </div>
  );
}
