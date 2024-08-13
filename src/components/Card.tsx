const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="w-full bg-white rounded-lg px-8 py-4 shadow-md">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
