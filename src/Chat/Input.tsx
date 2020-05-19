import React, { useState } from "react";
import { Sender } from "./index";

export default function Input({ onSubmit }: any) {
  const [value, setValue] = useState("");

  return (
    <div>
      <form>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (value.length > 0) {
              onSubmit(value);
              setValue("");
            }
          }}
        >
          שלח
        </button>
      </form>
    </div>
  );
}
