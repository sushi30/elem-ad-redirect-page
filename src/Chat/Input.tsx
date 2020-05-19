import React, { useState } from "react";
import { Sender } from "./index";

export default function Input({ onSubmit }: any) {
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div>
      <form>
        <input
          disabled={submitting}
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          disabled={submitting}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (value.length > 0) {
              setSubmitting(true);
              setTimeout(() => {
                onSubmit(value);
                setValue("");
                setSubmitting(false);
              }, 500);
            }
          }}
        >
          שלח
        </button>
      </form>
    </div>
  );
}
