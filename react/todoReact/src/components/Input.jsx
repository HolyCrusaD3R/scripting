import { useEffect, useState } from "react";

export default function Input({ addItem }) {
  const [input, setInput] = useState("");
  const [submittedValue, setSubmittedValue] = useState();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedValue(input.trim());
    setInput("");
  };

  useEffect(() => {
    submittedValue && addItem(submittedValue);
  }, [submittedValue]);

  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
