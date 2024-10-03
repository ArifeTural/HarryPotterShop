
import { dataa } from "../helper/dataa";
import { Container } from 'react-bootstrap';
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Row} from 'react-bootstrap'
import BooksCard from "../components/BooksCard";



const Books = () => {
    const [search, setSearch] = useState("")

  return (
<div>

<Form.Control
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Oyuncu arama.."
        className="w-75 mx-auto my-2"
      />

<Container  className=" cont p-3 rounded-4 card-container my-3">
<Row className="justify-content-center g-3">
{dataa.filter((kitap)=>
kitap.name.toLowerCase().includes(search.trim().toLowerCase())).map((kitap)=>(
    <BooksCard key={kitap.id} kitap={kitap}/>
    
))}


  

</Row>
  
</Container>
</div>
  )
}

export default Books