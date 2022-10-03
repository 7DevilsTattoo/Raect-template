import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SimpleImageSlider from "react-simple-image-slider";
import "./index.css"
import Banner from './Banner.js'
import Rating from '../Stars/Rating';
import Pics from '../Gallery/Pics.js';








const  Content=() =>{
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed:8000,
    cssEase: "linear"
    
      
  };
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
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
      
      <div class="row align-items-center ">
      <div class="col-lg-12">
      <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
      <img src="assets/img/logo/devils-tatto.png" alt="Logo" />
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
      <a class="page-scroll" href="#footer">ContactUs</a>
      </li>
      
      </ul>
      </div>
      </nav>
      </div>
      </div>
      </header>
     
     
        
      
      
      <section id="home" class="hero-section" width="100%">
        <Banner/>

        
      
    
    
        
      <div class="hero-shape w-100 ">
      <img src="assets/img/hero/T.png" alt="" class="shape" />
      </div>
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-6 ">
      <div class="hero-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/hero/Devils-Home-image.png" alt="" />
      </div>
      </div>
      <div class="col-lg-6 order-first order-lg-last">
      <div class="hero-content " >
      <h1 class="wow fadeInUp" data-wow-delay=".2s">7 Devils <span>Tattoo Studio</span> </h1>
      <p class="wow fadeInUp" data-wow-delay=".4s" style={{textAlign:"justify"}}>
      From the first step inside, you’ll feel  home. We’re like family here, and you’re always welcome. 7 Devils Tatto Studio is a crew of artists that pride ourselves on our passion for fine art and creativity.
      </p>
      
      </div>
      </div>
      
      </div>
      </div>
      </section>
      
      <section id="services" class="service-section pt-70">
      <div class="container">
      <div class="row justify-content-center w-100">
      <div class="col-xl-6 col-lg-8">
      <div class="section-title text-center mb-10">
      <span class="wow fadeInUp" data-wow-delay=".2s"> Services</span>
      <h1 class="wow fadeInUp" data-wow-delay=".4s">What We Do</h1>
      
      </div>
      </div>
      </div>
      <div class="row">
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".2s">
      <div class="icon">
      <img src="assets/img/service/1.png" alt="" />
      </div>
      <div class="content">
      <h3>Tattooing</h3>
      <p  style={{textAlign:"justify"}}>For a premium result, at our tattoo shop we combine modern technics with traditional ones.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".4s">
      <div class="icon">
      <img src="assets/img/service/2.png" alt="" />
      </div>
      <div class="content">
      <h3>Tattoo Cover Up</h3>
      <p  style={{textAlign:"justify"}}>Got some old tattoos that you don’t find pretty? Our talented artists will cover them up for you.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".6s">
      <div class="icon">
      <img src="assets/img/service/4.png" alt="" />
      </div>
      <div class="content">
      <h3>Tattoo Design</h3>
      <p  style={{textAlign:"justify"}}>Nothing can beat the challenge of creating a design that initially is only in your imagination.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".2s">
      <div class="icon">
      <img src="assets/img/service/5.png" alt="" />
      </div>
      <div class="content">
      <h3>Laser Removal</h3>
      <p  style={{textAlign:"justify"}}>If you are tired of your tattoos, in our salon we provide a service of laser tattoo removal.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".4s">
      <div class="icon">
      <img src="assets/img/service/6.png" alt="" />
      </div>
      <div class="content">
      <h3>Aftercare</h3>
      <p  style={{textAlign:"justify"}}>It`s very important to know all the key basics to care for your new tattoo.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-4 col-md-6">
      <div class="single-service wow fadeInUp" data-wow-delay=".6s">
      <div class="icon">
      <img src="assets/img/service/3.png" alt="" />
      </div>
      <div class="content">
      <h3>Piercing</h3>
      <p  style={{textAlign:"justify"}}>Want some extra holes in your body? Our piercing masters will make some for you.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>

      <section id="about" class="about-section">
      <div class="container">
      <div class="row">
      
      <div class="col-lg-6">
      <div class="about-content">
      <div class="section-title">
      <span class="wow fadeInUp" data-wow-delay=".2s">About Us</span>
      <h1 class="wow fadeInUp" data-wow-delay=".4s">We are a professional team of tattoists</h1>
      <p class="wow fadeInUp" data-wow-delay=".6s"  style={{textAlign:"justify"}}>To get your body inked in our tattoo studio, you may contact us via contact form on our website, or by phone. We welcome appointments, as well as walk-ins. We have gathered the best team of tattoo artists who work full time in our studio, and we have fantastic guest artists visiting our shop..</p>
      </div>
      <div class="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
      <div class="rating d-flex">
     <h5>Rating 5.0 </h5>
     <Rating/>
      </div>
      </div>
      <div class="counter-up wow fadeInUp" data-wow-delay=".8s">
      <div class="single-counter">
      <h3 id="secondo1" class="countup" >5.0</h3>
      <h5>Rating  </h5>
      </div>
      <div class="single-counter position-relative">
      <h3 id="secondo2" class="countup">2.0k+</h3>
      <h5>HappyUsers</h5>
      </div>
      <div class="single-counter">
      <h3 id="secondo3" class="countup" >244.. </h3>
      <h5>Reviews</h5>
      </div>
      </div>
      </div>
      </div>
      <div class="col-lg-6 p-3">
      <div class="about-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/about/7-Devils-Tatto-540x473.png" alt="img" />
      </div>
      </div>
      
      </div>
      </div>
      
      </section>

     
      
      <section id="gallery" class="gallery-section w-80">
        
      <h2 class="gallery-heading text-center m-5">Gallery</h2>
        
      
      <Pics/>
      </section>
      <section id="how" class="delivery-section pt-150">
      <div class="container">
      <div class="row align-items-center">
      <div class="col-lg-5 order-first order-lg-last">
      <div class="delivery-content">
      <div class="section-title">
      <span class="wow fadeInUp" data-wow-delay=".2s">Special Offer</span>
      <h1 class="mb-35 wow fadeInUp" data-wow-delay=".4s">Get 20% Discount on Tatto Piercing</h1>
      <p class="mb-35 wow fadeInUp" data-wow-delay=".6s"  style={{textAlign:"justify"}}>Piercings and tattoos are body decorations that go back to ancient times. Body piercing involves making a hole in the skin so that you can insert jewelry. </p>
      
      </div>
      </div>
      </div>
      <div class="col-lg-7 ">
      <div class="delivery-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/delivery/Desgins.png" alt="" />
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="received" class="about-section received-section pt-150">
      <div class="container">
      <div class="row align-items-center">
      
      <div class="col-lg-6  ">
      <div class="about-content received-content">
      <div class="section-title">
      <span class="wow fadeInUp" data-wow-delay=".2s">Aftercare</span>
      <h1 class="mb-25 wow fadeInUp" data-wow-delay=".4s">The Best Way To Heal A New Tattoo Quickly</h1>
      <p class="wow fadeInUp" data-wow-delay=".6s"  style={{textAlign:"justify"}}>DO wear loose, clean cotton/soft clothing and/or expose to air (but not sun!).<br/>DO NOT use aloe, Neosporin, etc.; they make the skin heal too fast.
      <br/>DO NOT swim, sauna, or soak (quick shower ok, avoid long soaking on the tattoo)<br/>DO NOT expose to direct sunlight.</p>
      </div>
      </div>
      </div>
      <div class="col-lg-6">
      <div class="about-img received-img wow fadeInUp" data-wow-delay=".5s">
      <img src="assets/img/received/Seven-Devils-Aftercare.png" alt="" />
      </div>
      </div>
      
      </div>
      </div>
      </section>
      
      
      <section id="testimonial" class="testimonial-section img-bg pt-150 pb-40">
       
               
                    <div class="section-title mb-2  align-items-center text-center">
                        <span class="wow fadeInUp" data-wow-delay=".2s ">Testimonials</span>
                        <h1 class="wow fadeInUp" data-wow-delay=".4s ">What Our Users Says</h1>
                    </div>
                
                    <div class='sk-ww-google-reviews' data-embed-id='95053'></div>
                    
    </section>
   
      
      
  
      
      <footer id="footer" class="footer pt-100  w-100">
      <div class="footer-shape">
      <img src="assets/img/footer/footer-left.svg" alt="" class="shape shape-1" />
      <img src="assets/img/footer/footer-right.svg" alt="" class="shape shape-2" />
      </div>
      <div class="container">
      <div class="row">
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
      <div class="logo">
      <a href="#"><img src="assets/img/logo/white.png" alt="logo" /></a>
      </div>
      
      </div>
      </div>
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".4s">
      <h3>Contact Us</h3>
      <ul class="links">
      <li >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="white" class="bi bi-geo-alt"  viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
      <a href="javascript:void(0)" class="ml-1"> Kundula Rd,Krishna Nagar</a>
      <a href="javascript:void(0)" class="ml-3"> Guntur,Andhra Pradesh</a>
      </li>
      <li>
      <svg href="javascript:void(0)" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="white" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
      <a href="tel:+919347179138" class="ml-2">9347179138</a>
      </li>
      <li >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
      <a href=" https://www.instagram.com/7devils_tattoo/"  target="_blank" class="ml-2 align-items-center">Instagram</a>
      </li>
      
      </ul>
      </div>
      </div>
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".6s">
      <h3>Quick Links</h3>
      <ul class="links">
      
      <li>
      <a href="#about">About Us</a>
      </li>
      <li>
      <a href="#services">Services</a>
      </li>
      
      <li>
      <a href="#gallery">Gallery</a>
      </li>
      <li>
      <a href="#testimonial">Testimonials</a>
      </li>
      </ul>
      </div>
      </div>
      <div class="col-lg-3 col-md-6">
      <div class="footer-widget wow fadeInUp" data-wow-delay=".8s">
      
      <ul class="links">
      <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.219232390493!2d80.41692981477367!3d16.311738688731428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75401629971b%3A0x8310dfbf5cd6f228!2s7%20Devils%20Tattoo%20Studio!5e0!3m2!1sen!2sin!4v1662611244499!5m2!1sen!2sin" width="200" height="200"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
      </ul>
      
     
      </div>
      </div>
      
      </div>
      
      </div>
        <a href='https://wa.me/+919347179138'  class="whatsapp" target="_blank"> <img src="assets/img/hero/whatsapp-img.png" width="60px" height="50px" alt="whatsapp"/></a>
        
        <div class="copyright-container text-center">
      <p style={{color:"white"}}>Copyright © 2022 Desgined by <a class="color" > DT7Solutions</a>  </p>
      </div>
          
        
       
      </footer>
      
      <a href="#home" class="scroll-top btn-hover">
      <i class="lni lni-chevron-up"></i>
      </a>
      
    </div>
    
  );
}
export default Content;