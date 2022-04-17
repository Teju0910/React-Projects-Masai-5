import { useState } from "react";

export const TodoInput = ({ fn }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fn(text);
        }}
      >
        ADD TODO
      </button>
    </div>
  );
};
