import Carousel from 'react-bootstrap/Carousel';
import img1 from './img/computerec.png'
import img2 from './img/Screenshot_25.png'
import img3 from './img/Screenshot_24.png'
import img4 from './img/Screenshot_26.png'
import img5 from './img/Screenshot_27.png'
import img6 from './img/Screenshot_29.png'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const COMPUTERSHOP=()=>{
    return(
        <div className="contenur_computershope" >
                <div className="left_pox">
                    <div>
                        <h1 className='titel_project' >
                        Computer Shop Ecommerce
                        </h1>
                    </div>
                    <div>
                        <p>
                        A site dedicated to the sale of new and used computer parts and accessories, and customers can sell used parts to our site by submitting an order to sell a product
                        </p>
                    </div>
                    <div>
                        <h1 className='titel_project'>
                        Site Advantages
                        </h1>
                        <p>
                            *  Create an account
                        </p>
                        <p>
                            *  sign in
                        </p>
                        <p>
                            *  Sign in with google
                        </p>
                        <p>
                            *  Contact with the site
                        </p>
                        <p>
                            *  buy via paypal
                        </p>
                        <p>
                            *  Search for any product
                        </p>
                        <p>
                            *  Submit a request to sell a used product
                        </p>
                    </div>
                    <div><Button variant="outline-primary">Go to the site</Button></div>
                  
                </div>
                <div className="right_pox" >
                <Carousel className='slider_img' >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>main page</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Category</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>product page</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Shopping basket</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Request to sell a used product</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Create an account</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
     
    </div>
                
        </div>
    )
}
export default COMPUTERSHOP