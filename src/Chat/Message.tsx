import React from "react";
import { Sender } from "./index";
import FadeDiv from "./FadeDiv";

export default function Message({ sender, content, time, last }: any) {
  return (
    <FadeDiv
      in={true}
      appear={last}
      style={{
        fontSize: 16,
        direction: "rtl",
        textAlign: "right",
        marginBottom: 24,
        maxWidth: "100%",
        [sender == Sender.WEBSITE ? "paddingLeft" : "paddingRight"]: 8,
      }}
    >
      <div style={{ width: 24 }} />
      <div
        style={{
          borderRadius: 8,
          float: sender == Sender.WEBSITE ? "right" : "left",
          padding: 8,
          background: sender == Sender.WEBSITE ? "aqua" : "gainsboro",
        }}
      >
        {content}
      </div>
    </FadeDiv>
  );
}
