import React from 'react'
import CategorySideBar from '../CategoryList/CategorySideBar';
import ProductList from '../ProductList/ProductList';
import { useParams } from 'react-router-dom';

function Category() {
  const { id } = useParams();

  return (
    <h1>
      
      <div className="row"> 
        <div className="col-4"> 
          <CategorySideBar />
        </div>
        <div className="col">   
          <ProductList query={id}></ProductList>
        </div>
      </div>

    </h1>
  )
}

export default Category;
