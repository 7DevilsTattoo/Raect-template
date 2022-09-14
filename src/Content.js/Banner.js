import React, { startTransition } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Color from "color";
import "./index.css";



const Slider =()=>{
return(
<Carousel className='mb-5 opacity' >
    <Carousel.Item >
        <img className="d-block w-100 pic" src="assets/img/hero/1.png"  alt="First slide" />
       {/*<Carousel.Caption >
            <h3 className='title m-5'></h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src="assets/img/hero/2.png" alt="Second slide" />

       {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src="assets/img/hero/3.png" alt="Third slide" />

       {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
</Carousel.Caption>*/}
    </Carousel.Item>
</Carousel>

)

}
export default Slider