const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} className="w-full h-auto rounded-sm" alt="" />
      <h2 className="text-xl font-bold my-2">{title}</h2>
      <p className="text-sm text-gray-500 my-2">{description}</p>
    </div>
  );
};

export default Card;
