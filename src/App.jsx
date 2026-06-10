// import SimpleComponent from "./components/SimpleComponent";
// import Card from "./components/Card";
// import Counter from "./components/Counter";
// import ToggleButtom from "./components/ToggleButtom";
// import NameForm from "./components/NameForm";
import CounterWithEffect from "./components/CounterWithEffect";

import "./App.css";

function App() {
  return (
    // Fundamentos de Componentes y JSX
    /* <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Lista de Cards</h1>
      <div className="grid grid-cols-4 gap-6">
        <Card
          title="Title Card"
          description="Lorem ipsum dolor sit amet consectetur, adipiscing elit senectus arcu."
          image="https://dummyimage.com/400x300/e3e3e3/141414"
        />
        <Card
          title="Title Card"
          description="Lorem ipsum dolor sit amet consectetur, adipiscing elit senectus arcu."
          image="https://dummyimage.com/400x300/e3e3e3/141414"
        />
        <Card
          title="Title Card"
          description="Lorem ipsum dolor sit amet consectetur, adipiscing elit senectus arcu."
          image="https://dummyimage.com/400x300/e3e3e3/141414"
        />
        <Card
          title="Title Card"
          description="Lorem ipsum dolor sit amet consectetur, adipiscing elit senectus arcu."
          image="https://dummyimage.com/400x300/e3e3e3/141414"
        />
      </div>
    </div> */

    // Manejo del Estado y Hooks Básicos
    <div className="flex justify-center items-center h-screen">
      {/* <Counter />*/}
      {/* <ToggleButtom />*/}
      {/* <NameForm />*/}
      <CounterWithEffect />
    </div>
  );
}

export default App;
