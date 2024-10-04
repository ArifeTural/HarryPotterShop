
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
      }, 500); 
      return () => clearTimeout(timer); 
    }, []);
  
    if (loading) {
      return <div>
        loading..
      </div>;
    }
  
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Form.Control
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ürün arama.."
          className="w-[75%] h-[50px] font-montserrat hover:cursor-pointer text-[20px] text-main font-[600] "
        />
  
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8'>
          {kitap.filter((kitapp) =>
            kitapp.name.toLowerCase().includes(search.trim().toLowerCase())
          ).map((kitapp) => (
            <BooksCard key={kitapp.id} {...kitapp} />
          ))}
        </div>
      </div>
    );
  }

export default About;