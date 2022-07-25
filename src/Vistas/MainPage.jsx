// aqui va:
// Navbar
// Categorias List
// Footer
import React from 'react'
import  Navbar  from '../components/Navbar/Navbar'
import  CategoryList  from '../components/CategoryList/CategoryList'
import  Header  from '../components/Header/Header'
import  Footer from '../components/Footer/Footer'

function MainPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <CategoryList />
      <Footer />
    </div>   
  )
}

export default MainPage