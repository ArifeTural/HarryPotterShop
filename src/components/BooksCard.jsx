
import React from "react";
import { useNavigate } from "react-router-dom";


const BooksCard = ({kitapp}) => {
    const {name,image,id} = kitapp
  const navigate = useNavigate();

  return (
      <div className="cursor-pointer"
       onClick={() => navigate(`${id}`, {state:kitapp})}>
          <div className="book-div">
              <img
                  src={image}  className="book-img"
              />
          </div>    
      </div>
  );
};

export default BooksCard;
