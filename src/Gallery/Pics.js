import React, { startTransition } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Color from "color";
import "./Pics.css";



const Pics =()=>{
return(
<Carousel className='mb-5 opacity' >
    <Carousel.Item  >
        <img className="d-block"  style={{paddingLeft:"23%"}} src="assets/img/gallery/1 600x600.jpg"  alt="First slide" />
        
       {/*<Carousel.Caption >
            <h3 className='title m-5'></h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item >
        <img className="d-block "  style={{paddingLeft:"23%"}} src="assets/img/gallery/2 600x600.jpg" alt="Second slide" />
        

       {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item  >
        <img className="d-block"  style={{paddingLeft:"23%"}}  src="assets/img/gallery/3 600x600.jpg" alt="Third slide" />
       
        

       {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item  >
        <img className="d-block"  style={{paddingLeft:"23%"}}  src="assets/img/gallery/4 600x600.jpg" alt="Third slide" />
       
        

       {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item  >
        <img className="d-block"  style={{paddingLeft:"23%"}}  src="assets/img/gallery/5 600x600.jpg" alt="Third slide" />
       
        

       {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item  >
        <img className="d-block"  style={{paddingLeft:"23%"}}  src="assets/img/gallery/6 600x600.jpg" alt="Third slide" />
       
        

       {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item  >
        <img className="d-block"  style={{paddingLeft:"23%"}}  src="assets/img/gallery/7 600x600.jpg" alt="Third slide" />
       
        

       {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
</Carousel.Caption>*/}
    </Carousel.Item>
    <Carousel.Item  >
        <img className="d-block"  style={{paddingLeft:"23%"}}  src="assets/img/gallery/8 600x600.jpg" alt="Third slide" />
       
        

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
export default Pics;