import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Product from '../components/Product';

const ProductPage = () => {
  const { id } = useParams();
  return (
    <>
      <div>Strona produktu: {id}</div>
      <Product id={id} />
      <Link to="/products">Powrót do wszystkich produktów</Link>
    </>
  );
};

export default ProductPage;
