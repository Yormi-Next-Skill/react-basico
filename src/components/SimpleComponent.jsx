// Fundamentos de Componentes y JSX
// Creación de Componentes con JavaScript y React

const SimpleComponent = () => {
  const items = ["React", "JavaScript", "Vite"];
  const itemsOb = [
    { name: "React", version: "Library" },
    { name: "JavaScript", version: "Lenguaje" },
    { name: "Vite", version: "Build Tool" },
  ];
  return (
    <div>
      <h2 className="text-xl font-bold">Lista de Tecnologías</h2>
      <ul className="list-disc">
        {items.map((item, index) => (
          <li className="text-sm font-medium" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleComponent;
