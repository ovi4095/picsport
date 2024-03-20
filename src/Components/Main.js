import React, { Component } from 'react'
import Header from './Header/Header'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Auth from './Auth/Auth'
import CATEGORIES from '../data/categoris'
import CATEGORYGALLERY from '../data/catagoryGallery'
import IMAGES from '../data/categoryImage'
import './Gallery/Gallery.css'
import Animal from './Gallery/Categoris/Category/Animale'
import COMMENTS from '../data/imageComments'
import Anime from './Gallery/Categoris/Category/Anime'
import Background from './Gallery/Categoris/Category/Background'
import Landscape from './Gallery/Categoris/Category/Landscape'
import People from './Gallery/Categoris/Category/People'
import Space from './Gallery/Categoris/Category/Space'
// import Categoris from './Gallery/Categoris/Categoris'

export class Main extends Component {
  state= {
    categories:CATEGORIES,
    categoryGallery:CATEGORYGALLERY,
    images: IMAGES,
    comments: COMMENTS,
  }

  render() {
    const gallery = this.state.categories.map((category) => {
             return (<Gallery category={category} key={category.id}/>)
        });

    const animal = this.state.categoryGallery.map((animal)=>{
            if(animal.categoryName === 'Animal'){
              let animals = animal;
              let images = this.state.images.filter((image) => image.categoryId === 1);
              let comments = this.state.comments.filter((comment) => comment.categoryId === 1);
              return <Animal category={animals} images={images} comments={comments} key={animals.id}/>
            }
    })
    const anime = this.state.categoryGallery.map((anime)=>{
            if(anime.categoryName === 'Anime'){
              let animes = anime;
              let images = this.state.images.filter((image) => image.categoryId === 2);
              let comments = this.state.comments.filter((comment) => comment.categoryId === 2);
              
              return <Anime category={animes} images={images} comments={comments} key={animes.id}/>
            }
    })
    const background = this.state.categoryGallery.map((background)=>{
            if(background.categoryName === 'Background'){
              let backgrounds = background;
              let images = this.state.images.filter((image) => image.categoryId === 3);
              let comments = this.state.comments.filter((comment) => comment.categoryId === 3);
              return <Background category={backgrounds} images={images} comments={comments} key={background.id}/>
            }
    })
    const landscape = this.state.categoryGallery.map((landscape)=>{
            if(landscape.categoryName === 'Land-Scape'){
              let landscapes = landscape;
              let images = this.state.images.filter((image) => image.categoryId === 4);
              let comments = this.state.comments.filter((comment) => comment.categoryId === 4);
              return <Landscape category={landscapes} images={images} comments={comments} key={landscape.id}/>
            }
    })
    const people = this.state.categoryGallery.map((people)=>{
            if(people.categoryName === 'People'){
              let peoples = people;
              let images = this.state.images.filter((image) => image.categoryId === 5);
              let comments = this.state.comments.filter((comment) => comment.categoryId === 5);
              return <People category={peoples} images={images} comments={comments} key={people.id}/>
            }
    })
    const space = this.state.categoryGallery.map((space)=>{
            if(space.categoryName === 'Space'){
              let spaces = space;
              let images = this.state.images.filter((image) => image.categoryId === 6);
              let comments = this.state.comments.filter((comment) => comment.categoryId === 6);
              return <Space category={spaces} images={images} comments={comments} key={space.id}/>
            }
    })
    
    return (
        <div>
            <Header/>
                  <div className='Main grid--x2'>
                  <Routes>
                      <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
                      <Route path='/home' element={<Home/>}/>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/gallery' element={gallery}/>
                      <Route path='/category-Animal' element={animal}/>
                      <Route path='/category-Anime' element={anime}/>
                      <Route path='/category-Background' element={background}/>
                      <Route path='/category-Land-Scape' element={landscape}/>
                      <Route path='/category-People' element={people}/>
                      <Route path='/category-Space' element={space}/>
                      <Route path='/login' element={<Auth/>}/>
                  </Routes>             
                  </div>
            <Footer/>
        </div>
      )
  }
}

export default Main

