import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel'

import "./index.css"

function Content() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
      
  };
  return (
    <div className="App">
     <div class="preloader">
      <div class="loader">
      <div class="ytp-spinner">
      <div class="ytp-spinner-container">
      <div class="ytp-spinner-rotator">
      <div class="ytp-spinner-left">
      <div class="ytp-spinner-circle"></div>
      </div>
      <div class="ytp-spinner-right">
      <div class="ytp-spinner-circle"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <header class="header">
      <div class="navbar-area">
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
      <img src="assets/img/logo/logo.svg" alt="Logo" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toggler-icon"></span>
      <span class="toggler-icon"></span>
      <span class="toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
      <ul id="nav" class="navbar-nav ml-auto">
      
      <li class="nav-item">
      <a class="page-scroll" href="#home">Home</a>
      </li>
      <li class="nav-item">
      <a class="page-scroll" href="#about">About</a>
      </li>
      <li class="nav-item">
      <a class="page-scroll" href="#services">Services</a>
      </li>
      <li class="nav-item">
      <a class="page-scroll" href="#gallery">Gallery</a>
      </li>
      <li class="nav-item">
      <a class="page-scroll" href="#testimonial">Testimonials</a>
      </li>
      <li class="nav-item">
      <a class="page-scroll" href="#testimonial">ContactUs</a>
      </li>
      <li class="nav-item">
      <a class="page-scroll" href="#testimonial">Map</a>
      </li>
      </ul>
      </div>
      </nav>
      </div>
      </div>
      </div>
      </div>
      </header>
     
     
        
      
      
      <section id="home" class="hero-section">
      
    <Carousel className='mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/hero/cover.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/hero/cover.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/hero/cover.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
        
      <div class="hero-shape ">
      <img src="assets/img/hero/hero-shape.svg" alt="" class="shape" />
      </div>
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-6">
      <div class="hero-content">
      <h1 class="wow fadeInUp" data-wow-delay=".2s">Home Delivery <span>From Stores Near You</span> </h1>
      <p class="wow fadeInUp" data-wow-delay=".4s">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <a href="javascript:void(0)" class="main-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Download App</a>
      </div>
      </div>
      <div class="col-lg-6">
      <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/hero/hero-img.svg" alt="" />
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="services" class="service-section pt-150">
      <div class="container">
      <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-8">
      <div class="section-title text-center mb-70">
      <span class="wow fadeInUp" data-wow-delay=".2s"> Services</span>
      <h1 class="wow fadeInUp" data-wow-delay=".4s">What We Do</h1>
      
      </div>
      </div>
      </div>
      <div class="row">
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".2s">
      <div class="icon">
      <img src="assets/img/service/service-icon-1.svg" alt="" />
      </div>
      <div class="content">
      <h3>Tattooing</h3>
      <p>For a premium result, at our tattoo shop we combine modern technics with traditional ones.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".4s">
      <div class="icon">
      <img src="assets/img/service/service-icon-2.svg" alt="" />
      </div>
      <div class="content">
      <h3>Tattoo Cover Up</h3>
      <p>Got some old tattoos that you don’t find pretty? Our talented artists will cover them up for you.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".6s">
      <div class="icon">
      <img src="assets/img/service/service-icon-3.svg" alt="" />
      </div>
      <div class="content">
      <h3>Tattoo Design</h3>
      <p>Nothing can beat the challenge of creating a design that initially is only in your imagination.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".2s">
      <div class="icon">
      <img src="assets/img/service/service-icon-4.svg" alt="" />
      </div>
      <div class="content">
      <h3>Laser Removal</h3>
      <p>If you are tired of your tattoos, in our salon we provide a service of laser tattoo removal.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".4s">
      <div class="icon">
      <img src="assets/img/service/service-icon-5.svg" alt="" />
      </div>
      <div class="content">
      <h3>Aftercare</h3>
      <p>It`s very important to know all the key basics to care for your new tattoo.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".6s">
      <div class="icon">
      <img src="assets/img/service/service-icon-6.svg" alt="" />
      </div>
      <div class="content">
      <h3>Piercing</h3>
      <p>Want some extra holes in your body? Our piercing masters will make some for you.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="about" class="about-section pt-150">
      <div class="container">
      <div class="row">
      <div class="col-lg-6">
      <div class="about-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/about/about-img.svg" alt="" />
      </div>
      </div>
      <div class="col-lg-6">
      <div class="about-content">
      <div class="section-title">
      <span class="wow fadeInUp" data-wow-delay=".2s">About Us</span>
      <h1 class="wow fadeInUp" data-wow-delay=".4s">We are a professional team of tattoists</h1>
      <p class="wow fadeInUp" data-wow-delay=".6s">To get your body inked in our tattoo salon, you may contact us via contact form on our website, or by phone. We welcome appointments, as well as walk-ins. We have gathered the best team of tattoo artists who work full time in our salon, and we have fantastic guest artists visiting our shop..</p>
      </div>
      <div class="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
      <h5>Rating 4.8</h5>
      <div class="rating">
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      </div>
      </div>
      <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
      <div class="single-counter">
      <h3 id="secondo1" class="countup" >1M</h3>
      <h5>Download</h5>
      </div>
      <div class="single-counter position-relative">
      <h3 id="secondo2" class="countup">234k </h3>
      <h5>Happy User</h5>
      </div>
      <div class="single-counter">
      <h3 id="secondo3" class="countup" >34k </h3>
      <h5>Reviews</h5>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="gallery" class="gallery-section">
        <div className='images-container d-flex mt-5'>
            <div className='gallery-image' >
                <img src="assets/img/gallery/1.jpeg" alt="" width="300px" height="300px" transtition="transform 2s"/>
            </div>
            <div className='gallery-image'>
                <img src="assets/img/gallery/2.webp" alt="" width="300px" height="300px"/>
            </div>
            <div className='gallery-image'>
                <img src="assets/img/gallery/4.jpg" alt="" width="300px" height="300px"/>
            </div>
            <div className='gallery-image'>
                <img src="assets/img/gallery/4.jpeg" alt="" width="300px" height="300px"/>
            </div>
        </div>
      </section>
      <section id="how" class="delivery-section pt-150">
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-5">
      <div class="delivery-content">
      <div class="section-title">
      <span class="wow fadeInUp" data-wow-delay=".2s">Fast Delivery</span>
      <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">Order Now, Recieve Within 30mins</h1>
      <p class="mb-35 wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore hdht dolore magna aliquyam erat, sed diam voluptua.</p>
      <a href="javscript:void(0)" class="main-btn btn-hover wow fadeInUp" data-wow-delay=".8s">Download App</a>
      </div>
      </div>
      </div>
      <div class="col-lg-7 order-first order-lg-last">
      <div class="delivery-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/delivery/delivery-img.svg" alt="" />
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="received" class="about-section received-section pt-150">
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-6">
      <div class="about-img received-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/received/received-img.svg" alt="" />
      </div>
      </div>
      <div class="col-lg-6">
      <div class="about-content received-content">
      <div class="section-title">
      <span class="wow fadeInUp" data-wow-delay=".2s">Contactless Delivery</span>
      <h1 class="mb-25 wow fadeInUp" data-wow-delay=".4s">On-time Delivery to Your Doorstep</h1>
      <p class="wow fadeInUp" data-wow-delay=".6s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="testimonial" class="testimonial-section img-bg pt-150 pb-40">
      <div class="container">
      <div class="row justify-content-center">
      <div class="col-lg-6">
      <div class="section-title mb-60 text-center">
      <span class="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
      <h1 class="wow fadeInUp" data-wow-delay=".4s">What Our Users Says</h1>
      </div>
      </div>
      </div>
      <div class="row testimonial-wrapper">
      <div class="col-lg-4 col-md-6 -mt-30">
      <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
      <div class="rating">
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      </div>
      <div class="content">
      <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
      </div>
      <div class="info">
      <div class="image">
      <img src="assets/img/testimonial/testimonial-1.png" alt="" />
      </div>
      <div class="text">
      <h5>Ena Shah</h5>
      <p>Teacher at Abc School</p>
      </div>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6 -mt-60">
      <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
      <div class="rating">
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      </div>
      <div class="content">
      <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
      </div>
      <div class="info">
      <div class="image">
      <img src="assets/img/testimonial/testimonial-2.png" alt="" />
      </div>
      <div class="text">
      <h5>Mrs. Gosh</h5>
      <p>Actor</p>
      </div>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
      <div class="rating">
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      </div>
      <div class="content">
      <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
      </div>
      <div class="info">
      <div class="image">
      <img src="assets/img/testimonial/testimonial-3.png" alt="" />
      </div>
      <div class="text">
      <h5>John Doe</h5>
      <p>Model</p>
      </div>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6 -mt-30">
      <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
      <div class="rating">
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      </div>
      <div class="content">
      <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
      </div>
      <div class="info">
      <div class="image">
      <img src="assets/img/testimonial/testimonial-4.png" alt="" />
      </div>
      <div class="text">
      <h5>Jonathan Smith</h5>
      <p>Creative Designer</p>
      </div>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6 -mt-60">
      <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
      <div class="rating">
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      </div>
      <div class="content">
      <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
      </div>
      <div class="info">
      <div class="image">
      <img src="assets/img/testimonial/testimonial-5.png" alt="" />
      </div>
      <div class="text">
      <h5>Sara A. K.</h5>
      <p>Heroine</p>
      </div>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
      <div class="rating">
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      <i class="lni lni-star-filled"></i>
      </div>
      <div class="content">
      <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
      </div>
      <div class="info">
      <div class="image">
      <img src="assets/img/testimonial/testimonial-6.png" alt="" />
      </div>
      <div class="text">
      <h5>David Smith</h5>
      <p>Businessman</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="map" class="map-location">

      </section>
      
      <footer id="footer" class="footer pt-100 pb-70 w-100">
      <div class="footer-shape">
      <img src="assets/img/footer/footer-left.svg" alt="" class="shape shape-1" />
      <img src="assets/img/footer/footer-right.svg" alt="" class="shape shape-2" />
      </div>
      <div class="container">
      <div class="row">
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
      <div class="logo">
      <a href="#"><img src="assets/img/logo/logo-2.svg" alt="logo" /></a>
      </div>
      <div class="download-btns">
      <a href="javascript:void(0)">
      <span class="icon"><i class="lni lni-apple"></i></span>
      <span class="text">Download on the <b>App Store</b> </span>
      </a>
      <a href="javascript:void(0)">
      <span class="icon"><i class="lni lni-play-store"></i></span>
      <span class="text">GET IT ON <b>Play Store</b> </span>
      </a>
      </div>
      </div>
      </div>
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
      <h3>About Us</h3>
      <ul class="links">
      <li>
      <a href="javascript:void(0)">Home</a>
      </li>
      <li>
      <a href="javascript:void(0)">Services</a>
      </li>
      <li>
      <a href="javascript:void(0)">About Us</a>
      </li>
      <li>
      <a href="javascript:void(0)">Contact</a>
      </li>
      </ul>
      </div>
      </div>
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".6s">
      <h3>About</h3>
      <ul class="links">
      <li>
      <a href="javascript:void(0)">Partners</a>
      </li>
      <li>
      <a href="javascript:void(0)">Terms of Service</a>
      </li>
      <li>
      <a href="javascript:void(0)">Privacy Policy</a>
      </li>
      <li>
      <a href="javascript:void(0)">Refund Policy</a>
      </li>
      </ul>
      </div>
      </div>
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
      <h3>Support</h3>
      <ul class="links">
      <li>
      <a href="javascript:void(0)">Open Ticket</a>
      </li>
      <li>
      <a href="javascript:void(0)">Community</a>
      </li>
      <li>
      <a href="javascript:void(0)">Return Policy</a>
      </li>
      <li>
      <a href="javascript:void(0)">Accessibility</a>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </footer>
      <a href="#" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up"></i>
      </a>
    </div>
  );
}
export default Content;