import React from "react";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  description: string;
}

export default function ProductCard({
  title,
  price,
  image,
  description,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
