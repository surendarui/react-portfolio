import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portfolio1 from "../../assets/images/portfolio-1.jpg";
import portfolio2 from "../../assets/images/portfolio-2.jpg";
import portfolio3 from "../../assets/images/portfolio-3.jpg";
import portfolio4 from "../../assets/images/portfolio-4.jpg";
import portfolio5 from "../../assets/images/portfolio-5.jpg";
import portfolio6 from "../../assets/images/portfolio-6.jpg";
import Image from 'react-bootstrap/Image';


const Portfolio = () => {
    return(
        <div>
            <section className="portfolio-section">
                <Container>
                    <Row>
                        <Col lg="12">
                                <div class="section-title text-center mb--30 mb_sm--0">
                                    <span class="subtitle">Our project</span>
                                    <h2 class="title">Some of My Recent Works</h2>
                                    <p class="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                                </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                         <div className="im_portfolio text-center mt--40">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                            <a href="/portfolio-details">
                                                <Image src={portfolio1} alt="React Creative Agency" />

                                            </a>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                    <a href="/portfolio-details">Development</a>
                                            </div>
                                            <h4 className="title">
                                                <a href="/portfolio-details">Web Design</a>
                                            </h4>
                                         </div>
                                        <div className="portfolio_hover">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                                        </div>
                                     </div>
                                </div>
                         </div>
                        </Col>
                        <Col xs lg="4">
                        <div className="im_portfolio text-center mt--40">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                            <a href="/portfolio-details">
                                                <Image src={portfolio2} alt="React Creative Agency" />

                                            </a>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                    <a href="/portfolio-details">Product Design</a>
                                            </div>
                                            <h4 className="title">
                                                <a href="/portfolio-details">App Development</a>
                                            </h4>
                                         </div>
                                        <div className="portfolio_hover">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                                        </div>
                                     </div>
                                </div>
                         </div>
                        </Col>
                        <Col xs lg="4">
                        <div className="im_portfolio text-center mt--40">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                            <a href="/portfolio-details">
                                                <Image src={portfolio3} alt="React Creative Agency" />

                                            </a>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                    <a href="/portfolio-details">Application</a>
                                            </div>
                                            <h4 className="title">
                                                <a href="/portfolio-details">
                                                    Photoshop Design</a>
                                            </h4>
                                         </div>
                                        <div className="portfolio_hover">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                                        </div>
                                     </div>
                                </div>
                         </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                        <div className="im_portfolio text-center mt--40">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                            <a href="/portfolio-details">
                                                <Image src={portfolio4} alt="React Creative Agency" />

                                            </a>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                    <a href="/portfolio-details">Web Design</a>
                                            </div>
                                            <h4 className="title">
                                                <a href="/portfolio-details">Web Design</a>
                                            </h4>
                                         </div>
                                        <div className="portfolio_hover">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                                        </div>
                                     </div>
                                </div>
                         </div>
                        </Col>
                        <Col xs lg="4">
                        <div className="im_portfolio text-center mt--40">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                            <a href="/portfolio-details">
                                                <Image src={portfolio5} alt="React Creative Agency" />

                                            </a>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                    <a href="/portfolio-details">Development</a>
                                            </div>
                                            <h4 className="title">
                                                <a href="/portfolio-details">Web Application</a>
                                            </h4>
                                         </div>
                                        <div className="portfolio_hover">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                                        </div>
                                     </div>
                                </div>
                         </div>
                        </Col>
                        <Col xs lg="4">
                        <div className="im_portfolio text-center mt--40">
                                <div className="thumbnail_inner">
                                    <div className="thumbnail">
                                            <a href="/portfolio-details">
                                                <Image src={portfolio6} alt="React Creative Agency" />

                                            </a>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="portfolio_heading">
                                            <div className="category_list">
                                                    <a href="/portfolio-details">Application</a>
                                            </div>
                                            <h4 className="title">
                                                <a href="/portfolio-details">Photo Editing</a>
                                            </h4>
                                         </div>
                                        <div className="portfolio_hover">
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</p>
                                        </div>
                                     </div>
                                </div>
                         </div>
                        </Col>
                    </Row>
                        
                </Container>
            </section>    
        </div>
    )
}

export default Portfolio;
