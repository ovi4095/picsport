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
import Categoris from './Gallery/Categoris/Categoris'

export class Main extends Component {
  state= {
    categories:CATEGORIES,
    categoryGallery:CATEGORYGALLERY,
    images: IMAGES,
    selectCategory: '',
    selectImages: '',
  }

  selectedCategoryHandler = (categoryid) => {
      const categoryselector = this.state.categoryGallery.filter((category) => category.id === categoryid);
      const category = categoryselector[0];
      const imageselector = (this.state.images.filter((images) => images.categoryId === categoryid));
      const images= imageselector;
      console.log(category, images)
      this.setState({
        selectCategory: category,
        selectImages: images,
      })
  }
  render() {
    const categories = this.state.categories.map((category) => {
             return (<Categoris category={category} key={category.id} selectedCategoryHandler={this.selectedCategoryHandler}/>)
        });
    const category = <Category category={this.state.selectCategory} images={this.state.selectImages}/>
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    {/* <Route path='/gallery' element={<Gallery/>}/> */}
                    <Route path='/gallery' element={categories}/>
                    <Route path='/category' element={category}/>
                    <Route path='/login' element={<Auth/>}/>
                </Routes>
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