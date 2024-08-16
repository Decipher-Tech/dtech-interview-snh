"use client";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
    <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
    <p className="text-white text-opacity-90">{description}</p>
  </div>
);

export default Card;
