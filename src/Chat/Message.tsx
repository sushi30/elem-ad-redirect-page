import React from "react";
import { Sender } from "./index";

export default function Message({ sender, content, time }: any) {
  return (
    <div
      style={{
        fontSize: 16,
        direction: "rtl",
        textAlign: "right",
        marginBottom: 8,
        maxWidth: "100%"
      }}
    >
      <div
        style={{
          borderRadius: 8,
          float: sender == Sender.VISITOR ? "left" : "right",
          padding: 8,
          background: sender == Sender.WEBSITE ? "aqua" : "gainsboro",
        }}
      >
        {content}
      </div>
    </div>
  );
}
