import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const BooksCard = ({ name, image, bilgi, link }) => {
  const[show,setShow]=useState(true)
  const handleClick=()=>setShow(!show)
  console.log(show);

  return (
    <Card className='cardStyle' role='button' onClick={handleClick}>
    {show ? (    
        <Card.Img variant="top" src={image} /> 
    ) : (
        <ul >
            {bilgi.map((item)=>(
                <li>🏀 {item}</li>
            ))}
        </ul>
        )}
   
     

        <Card.Footer>
        <Card.Title>
        {name}
        </Card.Title>
    
        </Card.Footer>
        
    </Card>
  );
}

export default BooksCard;
