import React from "react";
import { Sender } from "./index";

export default function Message({ sender, content, time }: any) {
  return (
    <div
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
    </div>
  );
}
