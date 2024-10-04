import React from 'react'

import { kitap } from "../helper/data";
import BooksCard from "../components/BooksCard";

const About = () => {
  return (
    <div className="CardCont row-col-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">    

    {
      kitap.map((kitapp)=>(
        <BooksCard key={kitapp.id} {...kitapp}/>
      ))
     
    }
    
        </div>
  )
}

export default About