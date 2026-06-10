import { useState, useEffect } from "react";

const CounterWithEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`El contador cambio a: ${count}`);
  }, [count]);

  return (
    <div>
      <p className="text-2xl mb-4">El contador esta en: {count}</p>
      <div className="flex gap-4 justify-center">
        <button
          className="bg-gray-950
          text-white px-4 py-2 rounded-full"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterWithEffect;
