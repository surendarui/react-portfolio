import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from "../../assets/images/surendar.png";
import { Form } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';




const Home = () => {
    return(
        <div>   
            <section id="banner" class="banner bg-dark-main text-white">     
                <Container>
                    <Row>
                        <Col sm={6} className="d-flex align-items-center">
                            <div className="content text-start">
                                <h6 className="sub-title mb-30 fz-14 opacity-7">UI/UX Designer &amp; Web Developer</h6>
                                <h1>Hello, I’m <br /> <span className="main-color">Surendar</span></h1>
                                <div className="text mt-30">
                                    <p>I've done remote work for agencies, consulted for startups, and collaborated with
                                        talented people to create digital products for both business and consumer use.</p>
                                </div>
                                <div className="mt-50">
                                     <Button variant="primary">Hire Me</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="img-Author">
                                <img src={image1} alt="Los Angeles" className="d-block w-100" />
                               
                            </div>
                        </Col>
                    </Row>
                    
                </Container>    

            </section>  




        </div>
    )
}

export default Home;