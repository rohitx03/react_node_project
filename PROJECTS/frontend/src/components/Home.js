import React from 'react';
import './css/Home.css';
const Home = () => {
  return (
    <>
      <section className='banner' >
        <div className='container'>
          <div className='row my-3'>
            <div className='col-lg-4 col-md-8 col-xs-12'>
              <div className='bannerlinef d-flex '>
                <li></li>
                <p>A central processing unit (CPU)</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='banner-heading-one'>information  </h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3 col-lg-2'></div>
            <div className='col-md-9 col-sm-12 col-md-12 col-lg-10'>
              <h1 className='banner-heading-two'>technology</h1>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-lg-4 col-md-8 col-xs-12'>
              <div className='bannerlines d-flex'>
                <li></li>
                <p>(IT) is the application of computers</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className='service my-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='ser-back-heading'>SERVICES</h1>
              <h1 className='ser-front-heading'>OUR SERVICES</h1>
            </div>
          </div>
          <div className='row my-4'>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='ser-main-box'>
                <div className='ser-img-box' style={{overflow:'hidden'}}>
                  <img className='img-fluid' src='https://wallpaperaccess.com/full/186244.jpg' alt='services-img' />
                </div>
                <div className='ser-content-box'>
                  <h4 className='mb-4'>
                    <a href=''>An IC that contains a CPU may also contain memory</a></h4>
                  <a href='' className='more-btn'>Read More <i class="bi bi-plus-lg"></i></a>
                </div>

              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='ser-main-box'>
                <div className='ser-img-box' style={{overflow:'hidden'}}>
                  <img className='img-fluid' src='https://w0.peakpx.com/wallpaper/138/244/HD-wallpaper-gray-and-black-laptop-computer-on-surface.jpg' alt='services-img' />
                </div>
                <div className='ser-content-box'>
                  <h4 className='mb-4'>
                    <a href=''>A window is a separate viewing area</a></h4>
                  <a href='' className='more-btn'>Read More <i class="bi bi-plus-lg"></i></a>
                </div>

              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='ser-main-box'>
                <div className='ser-img-box' style={{overflow:'hidden'}}>
                  <img className='img-fluid' src='https://wallpaperaccess.com/full/1892752.jpg' alt='services-img' />
                </div>
                <div className='ser-content-box'>
                  <h4 className='mb-4'>
                    <a href=''>The application of computers and internet to store</a></h4>
                  <a href='' className='more-btn'>Read More <i class="bi bi-plus-lg"></i></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
