
import React from "react";
import { useNavigate } from "react-router-dom";


const BooksCard = ({kitapp}) => {
    const {name,image,id} = kitapp
  const navigate = useNavigate();

  return (
      <div className="cursor-pointer"
       onClick={() => navigate(`${id}`, {state:kitapp})}>
          <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
              <img
                  src={image}
                  alt={name} // Alternatif metin ekledim
                  className="w-full object-fit lg:h-full lg:w-full"
              />
          </div>

          <div className="mt-4 flex justify-between">
              <div className="flex-1">
                  <h3 className="text-sm text-gray-700 line-clamp-1">{name}</h3>
              </div>
          </div>
      </div>
  );
};

export default BooksCard;
