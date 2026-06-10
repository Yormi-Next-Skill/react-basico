import { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-2">Name Form</h2>
      <input
        className="border px-2 border-gray-300 rounded"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="text-md mt-2 text-center">Hello, {name || "Visitante"}</p>
    </div>
  );
};

export default NameForm;
