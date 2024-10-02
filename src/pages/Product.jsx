import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { data } from "../helper/data";
import Form from "react-bootstrap/Form";


const Product = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // Loading durumu

  useEffect(() => {
    // Simüle edilen bir veri yükleme süresi
    const timer = setTimeout(() => {
      setLoading(false); // Yükleme tamamlandığında loading'i false yap
    }, 500); // 500 ms sonra loading durumu değişecek

    return () => clearTimeout(timer); // Temizlik işlemi
  }, []);

  if (loading) {
    return <div>
      <img  className='w-[300px] h-[300px] mx-auto ' src="https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_512.gif" alt="" />
    </div>; // Yükleme durumu
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <Form.Control
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Ürün arama.."
        className="w-[75%] h-[50px] font-montserrat hover:cursor-pointer text-[20px] text-main font-[600] "
      />

      <h2 className="text-2xl font-bold mt-8 tracking-tight text-red-900 text-center text-[35px] mb-4">
        All Products
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8'>
        {data.filter((products) =>
          products.title.toLowerCase().includes(search.trim().toLowerCase())
        ).map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </div>
  );
}

export default Product;


