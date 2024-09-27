import React from "react";


const ProductCard = ({products}) => {
    const {title,category,image,id,price} = products
    console.log(image)
  return (
    <div className="cursor-pointer">
      <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={title}
          title={title}
          className=" w-full object-fit lg:h-full lg:w-full"
        />
      </div>
  
      <div className="mt-4 flex justify-between">
        <div className="flex-1">
          <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} tl</p>
      </div>
    </div>
  );
};

export default ProductCard;