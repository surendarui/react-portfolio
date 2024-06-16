import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../../assets/images/surendar.png";
import Button from 'react-bootstrap/Button';

const About = () => {
    return(
        <div>
                    <section className="bg-dark-main text-white">            

<Container>
   <Row className="d-flex align-items-center text-start">
       <Col sm={5}>
           <div className="about-left">
                   <img src={image1} alt="Los Angeles" className="d-block w-100" />
                   <h3>Surendar</h3><p>Web Developer <span>based in</span> India</p>
                   <div class="btn-bar">
                        <Button variant="primary">Download CV<i className="ms-2 icon bi-download"></i></Button>
                   </div>
           </div>        
       </Col>
       <Col sm={7} className='text-start'>
          
               <div class="about-bio">
                     <p>Born in 1994, liveing in Coimbatore. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</p>                                
               </div>
                <div class="about-contact row gx-lg-5">
                   <div class="col-sm-6"> 
                           <p><i className="icon  bi-phone me-2"></i> <span>+919042344234</span></p>
                   </div>
                   <div class="col-sm-6">
                           <p><i className="icon  bi-person me-2"></i> <span>Surendar S</span></p>
                   </div>
                   <div class="col-sm-6">
                           <p><i className="icon  bi-envelope me-2"></i><span>surendarcandy@gmail.com</span></p>
                   </div>
                   <div class="col-sm-6">
                           <p><i className="icon  bi-map me-2"></i><span>Coimbatore, Tamilnadu</span></p>
                   </div>
               </div>
               <div class="about-exp">
                   <div class="row gy-4">
                       <div class="col-md-6">
                           <div class="a-number">
                           <h6>9+</h6><span>Years <br /> experience...</span></div>
                           <p class="lead">Hello there! My name is <span>Surendar</span>. I am a Frontend &amp; developer, and Im very passionate and dedicated to my work.</p>
                       </div>

                       <div class="col-md-6">
                           <div class="a-number">
                           <h6>10+</h6><span>Clients <br /> Worldwide...</span>
                           </div>
                           <p class="lead">With 10+ years experience as a professional designer, I have acquired the skills to make your project a success.</p>
                       </div>
                   </div>
                    <blockquote><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”</p></blockquote>
               </div>
       </Col>
   </Row>
   
</Container>        

</section>
        </div>
    )
}

export default About;