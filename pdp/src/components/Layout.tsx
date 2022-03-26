import React, { useEffect, useState } from "react";
import { getProduct, currency } from "home/services";
import { useParams } from 'react-router-dom';
import { ProductSpinner } from "./types";

const Layout = () => {
  const [product, setProduct] = useState<ProductSpinner>(null);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, []);

  if (!product) return null;
  
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default Layout;
