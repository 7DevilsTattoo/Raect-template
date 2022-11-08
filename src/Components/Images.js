import React from "react";
import Slider from "react-slick";

import "./images.css";
const Images=()=>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 8000,
        autoplaySpeed:8000
        
          
      };
    return(
      

        <div  >
        <Slider {...settings} >
         <div class="shadow p-3 mb-5 bg-white rounded">
        <img src="assets/img/hero/google-reviews-6.png"  alt="google reviews"  />
        </div>
         <div class="shadow p-3 mb-5 bg-white rounded">
         <img src="assets/img/hero/google-reviews-2.png"  alt="google reviews"  />
          </div>
         <div class="shadow p-3 mb-5 bg-white rounded">
         <img src="assets/img/hero/google-reviews-3.png"  alt="google reviews"  />
         </div>
            <div class="shadow p-3 mb-5 bg-white rounded">
      <img src="assets/img/hero/google-reviews-4.png"  alt="google reviews"  />
         </div>
         <div class="shadow p-3 mb-5 bg-white rounded">
          <img src="assets/img/hero/google-reviews-5.png"  alt="google reviews" />
         </div>
          <div class="shadow p-3 mb-5 bg-white rounded">
         <img src="assets/img/hero/google-reviews-1.png"  alt="google reviews" />
          </div>
           
        </Slider>
   
        </div> 


    )
}
export default Images;