import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Services = () => {
    return(
        <div>
            <section className="service-section service-main-wrapper">
                <Container>
                  <Row>
                        <Col lg="12">
                                <div class="section-title text-center mb--30 mb_sm--0">
                                    <span class="subtitle">Services</span>
                                    <h2 class="title">Some of Our Services</h2>
                                    <p class="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                                </div>
                                </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                             <div class="service service__style--2 text-left bg-gray">
                                <div class="icon"><i className="icon  bi-phone me-2"></i></div>
                                <div class="content">
                                    <h3 class="title">Business Stratagy</h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                </div>
                             </div>
                        </Col>
                        <Col xs lg="4">
                             <div class="service service__style--2 text-left bg-gray">
                                <div class="icon"><i className="icon  bi-phone me-2"></i></div>
                                <div class="content">
                                    <h3 class="title">Website Development</h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                </div>
                             </div>
                        </Col>
                        <Col xs lg="4">
                        <div class="service service__style--2 text-left bg-gray">
                                <div class="icon"><i className="icon  bi-phone me-2"></i></div>
                                <div class="content">
                                    <h3 class="title">Marketing & Reporting</h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                </div>
                             </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                        <div class="service service__style--2 text-left bg-gray">
                                <div class="icon"><i className="icon  bi-phone me-2"></i></div>
                                <div class="content">
                                    <h3 class="title">Mobile App Development</h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                </div>
                             </div>
                        </Col>
                        <Col xs lg="4">
                        <div class="service service__style--2 text-left bg-gray">
                                <div class="icon"><i className="icon  bi-phone me-2"></i></div>
                                <div class="content">
                                    <h3 class="title">Marketing & Reporting</h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                </div>
                             </div>
                        </Col>
                        <Col xs lg="4">
                        <div class="service service__style--2 text-left bg-gray">
                                <div class="icon"><i className="icon  bi-phone me-2"></i></div>
                                <div class="content">
                                    <h3 class="title">Mobile App Developments   </h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
                                </div>
                             </div>
                        </Col>
                    </Row>
                        
                </Container>
            </section>    
        </div>

    )
}

export default Services;