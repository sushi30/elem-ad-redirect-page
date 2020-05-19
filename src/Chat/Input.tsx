import React, { useState } from "react";
import { Sender } from "./index";

export default function Input({ onSubmit }: any) {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          onSubmit(value);
          setValue("");
        }}
      >
        שלח
      </button>
    </div>
  );
}
