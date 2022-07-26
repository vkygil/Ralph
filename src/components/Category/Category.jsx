import React  from 'react'
import CategoryList from '../CategoryList/CategoryList';
import { useParams } from 'react-router-dom';

function Category() {
const {id} = useParams(); 

  return (
    <h1>
      {id} jeej
    </h1>
  )
}

export default Category;
