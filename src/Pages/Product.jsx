import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import ProductDispaly from '../Components/ProductDispaly';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <div>
        <Breadcrum product={product}/>
        <ProductDispaly product={product}/>
      </div>
    </div>
  );
}

export default Product;
