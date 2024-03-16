import React from 'react'
import './Home.css'
import Banner1 from '../../assets/images/banner/banner1.png'
import Banner2 from '../../assets/images/banner/banner2.png'
import Banner3 from '../../assets/images/banner/banner3.png'
import Gallery1 from '../../assets/images/home/g1.png'
import Gallery2 from '../../assets/images/home/g2.png'
import Category1 from '../../assets/images/home/category1.png'
import Category2 from '../../assets/images/home/category2.png'
import Category3 from '../../assets/images/home/category3.png'

import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
        <div className='container-fluid Home' style={{padding:'0px'}}>
            {/* Carousel */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade Home-Slider-field" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className='d-block w-100' alt='Banner One'  />
                        <div class="carousel-caption d-none d-md-block">
                            <NavLink to='/login' className='Carosuselbtn Carosuselbtn--position Carosuselbtn--color-navy'>Let's Go</NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className='d-block w-100' alt='Banner One'  />
                        <div class="carousel-caption d-none d-md-block">
                            <NavLink to='/login' className='Carosuselbtn Carosuselbtn--position Carosuselbtn--color-purple'>Let's Go</NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className='d-block w-100' alt='Banner One'  />
                        <div class="carousel-caption d-none d-md-block">
                            <NavLink to='/login' className='Carosuselbtn Carosuselbtn--position Carosuselbtn--color-sky'>Let's Go</NavLink>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Gallery view */}
            <section className='container grid'>
                <div className='Gallery--text'>
                    <h2>Take a Look!</h2>
                    <h4>What we have in here!</h4>
                </div>
                <div className='gallery--img-flex'>
                    <img className='GalleryImg' src={Gallery1} alt="." />
                    <img className='GalleryImg' src={Gallery2} alt="." />
                </div>
            </section>
            <section className='container grid'>
                <div className='Category--text'>
                    <h2>18 Different Categories</h2>
                    <p>You can browse as much as you want and share your opinions as much as you want </p>
                </div>
                <div className='category--img-flex'>
                    <img className='CategoryImg' src={Category1} alt="." />
                    <img className='CategoryImg' src={Category2} alt="." />
                    <img className='CategoryImg' src={Category3} alt="." />
                </div>
            </section>
        </div>
  )
}

export default Home