import { useState } from "react";

const ToggleButtom = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className="bg-gray-800 text-white text-xl px-6 py-2 rounded"
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? "Active 👍" : "Inactive 👎"}
    </button>
  );
};

export default ToggleButtom;
