import React from "react";
import { Sender } from "./index";

export default function Message({ sender, content, time }: any) {
  return (
    <div
      style={{
        fontSize: 16,
        direction: "rtl",
        textAlign: "right",
        float: sender == Sender.VISITOR ? "left" : "right",
        maxWidth: "50%",
      }}
    >
      <p
        style={{
          padding: 8,
          background: sender == Sender.WEBSITE ? "aqua" : "gainsboro",
        }}
      >
        {content}
      </p>
    </div>
  );
}
