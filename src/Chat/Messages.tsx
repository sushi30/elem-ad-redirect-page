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
        width: "100%",
        height: 350,
        display: "flex",
        flexDirection: "column",
        background: "white",
        color: "black",
        overflow: "auto",
      }}
    >
      {messages.map(({ sender, time, content }: any) => (
        <Message {...{ sender, time, content }} />
      ))}
    </div>
  );
}
