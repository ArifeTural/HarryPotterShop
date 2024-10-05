
import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import { kitap } from "../helper/data";
import BooksCard from "../components/BooksCard";


const About = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true); // Loading durumu
  
    useEffect(() => {
     
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 600); 
      return () => clearTimeout(timer); 
    }, []);
  
    if (loading) {
      return <div>
         <img  className='w-[300px] h-[300px] mx-auto ' src="https://cdn.pixabay.com/animation/2023/10/02/18/06/18-06-24-613_512.gif" alt="" />
      </div>;
    }
  
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Form.Control
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ürün arama.."
          className="w-[75%] h-[50px] font-montserrat  border-4 mb-6 rounded-full hover:border-amber-700  hover:cursor-pointer text-[20px] text-main font-[600] "
        />
  
        <div className='book-genel'>
          {kitap.filter((kitapp) =>
            kitapp.name.toLowerCase().includes(search.trim().toLowerCase())
          ).map((kitapp) => (
            <BooksCard key={kitapp.id} kitapp={kitapp} />
          ))}
        </div>
      </div>
    );
  }

export default About;