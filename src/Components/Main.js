import React, { Component } from 'react'
import Header from './Header/Header'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Auth from './Auth/Auth'
import Category from './Gallery/Categoris/Category/Category'
import CATEGORIES from '../data/categoris'
import CATEGORYGALLERY from '../data/catagoryGallery'
import IMAGES from '../data/categoryImage'
import './Gallery/Gallery.css'
import Animal from './Gallery/Categoris/Category/Animale'
// import Categoris from './Gallery/Categoris/Categoris'

export class Main extends Component {
  state= {
    categories:CATEGORIES,
    categoryGallery:CATEGORYGALLERY,
    images: IMAGES,
  }

  render() {
    const gallery = this.state.categories.map((category) => {
             return (<Gallery category={category} key={category.id}/>)
        });
    const category = <Category category={this.state.selectCategory} images={this.state.selectImages}/>

    const animal = this.state.categoryGallery.map((animal)=>{
            if(animal.categoryName === 'Animal'){
              let animals = animal;
              let images = this.state.images.filter((image) => image.categoryId === 1)
              return <Animal category={animals} images={images} key={animals.id}/>
            }
    })
    
    return (
        <div>
            <Header/>
                  <div className='container Main'>
                  <Routes>
                      <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
                      <Route path='/home' element={<Home/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/gallery' element={gallery}/>
                      <Route path='/category' element={category}/>
                      <Route path='/category-Animal' element={animal}/>
                      <Route path='/login' element={<Auth/>}/>
                  </Routes>             
                  </div>
            <Footer/>
        </div>
      )
  }
}

export default Main



// import React from 'react'
// import Header from './Header/Header'
// import Gallery from './Gallery/Gallery'
// import Footer from './Footer/Footer'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Home from './Home/Home'
// import About from './About/About'
// import Auth from './Auth/Auth'
// import Category from './Gallery/Categoris/Category/Category'

// const Main = () => {
//   return (
//     <div>
//         <Header/>
//             <Routes>
//                 <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
//                 <Route path='/home' element={<Home/>}/>
//                 <Route path='/about' element={<About/>}/>
//                 <Route path='/gallery' element={<Gallery/>}/>
//                 <Route path='/gallery/category' element={<Category/>}/>
//                 <Route path='/login' element={<Auth/>}/>
//             </Routes>
//         <Footer/>
//     </div>
//   )
// }

// export default Main