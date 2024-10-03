import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';



const BooksCard = ({ kitap }) => {
  const [show, setShow] = useState(true);

  return (
    <Col xs={10} sm={8} md={6} lg={4} className='genel' >
      <Card className='' onClick={() => setShow(!show)} role="button">
        {show ? (
          <Card.Img
            variant='top'
            title={kitap.name}
            src={kitap.image}
          />
         
        ) : (
          <>
            <Card.Header>
              <Card.Title>{kitap.name}</Card.Title>
            </Card.Header>
            <ul className='m-auto ps-0'>
              {kitap.bilgi.map((item, index) => (
                <li key={index}className="list-unstyled  text-start"> <br/>  {item} </li>
              ))}
            </ul>
         
          </>
        )}
      </Card>
    </Col>
  );
}

export default BooksCard;