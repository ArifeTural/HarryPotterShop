import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { kitap } from "../helper/data";

const AboutDetail = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(null);
  const { id } = useParams();

  const getDetailKtp = () => {
    try {
      const aboutDetail = kitap.find((kitap) => kitap.id === parseInt(id)); 
      setState(aboutDetail); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailKtp();
  }, []);

  if (!state) return <div>Loading...</div>;

  const {  image, name, bilgi, link } = state; 

  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 w-full ">
        <article className="mx-auto w-full block lg:flex mt-4 h-full 2xl:h-[70vh] shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <div className="grid grid-rows-4 gap-2 h-full w-full lg:w-3/6 p-4">
            <div className="w-full row-span-3">
              <img
                className="h-full w-full rounded-lg"
                src={image}
                alt=""
              />
            </div>
         
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-evenly p-4">
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">{name}</h3>
              <p className="text-gray-500 mt-1">{bilgi}</p>
             <a href={link} target="blank">özetin devamı..</a>
            </div>
            
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => navigate(-1)}
                className="border rounded-lg bg-labelColor text-white p-2"
              >
                Geri
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="border rounded-lg bg-main text-white p-2"
              >
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutDetail;
