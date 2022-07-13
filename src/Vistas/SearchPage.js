// aqui va:
// Navbar
// Product List
// Footer
import ProductList from '../components/ProductList/ProductList'
import React, { useRef } from 'react'

function SearchPage() {
  const inputEl = useRef(null);
  return (
    <div className='container'>
      <br />
      <div class="input-group mb-3">
        <input ref={inputEl} type="text" class="form-control" placeholder="Busca algo" aria-label="Recipient's username" aria-describedby="button-addon2" />

        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
      </div>
      <br />
      <ProductList></ProductList>

    </div>
  )
}

export default SearchPage