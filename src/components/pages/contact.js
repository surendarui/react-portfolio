import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return(
        <div>
            <section id="contact" data-scroll-index="5" className="section contact-section">
                <Container> 
                     <Row>
                        <Col xs lg="5">
                        <div class="section-title text-left mb--30 mb_sm--0"><span class="subtitle">Call us</span><h2 class="title">Contact Us</h2><p class="description">There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p></div>
                            <div className="contact-info">
                                <ul>
                                    <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="aos-init aos-animate">
                                        <div className="icon"><i className="icon  bi-chat me-2"></i></div>
                                        <div className="text">
                                            <label>Chat to us</label>
                                            <p>Our friendly team is there to help.<span><a className="text-reset" href="mailto:info@domainname.com">info@domainname.com</a></span></p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="aos-init aos-animate">
                                        <div className="icon"><i className="icon  bi-map me-2"></i></div>
                                        <div className="text">
                                            <label>Visit us</label>
                                            <p>Come say hello at ur office HQ. Warnwe Park Streetperrine, FL 33157 New York City<span></span></p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" className="aos-init aos-animate">
                                        <div className="icon"><i className="icon  bi-phone me-2"></i></div>
                                        <div className="text">
                                            <label>Call us</label>
                                            <p>Mon-Fri from 8am to 5pm. +01 (555) 000-0000<span></span></p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="google-map aos-init aos-animate" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                                    <div className="ratio ratio-21x9">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"></iframe>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs lg="7">
                            <div className="contact-form bg-g aos-init aos-animate" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1000">
                                <div className="contact-head">
                                    <h4>Got Ideas? We have got the skills. Lets team up.</h4>
                                    <p>Tell us more about yourself and what you are got in mind.</p>
                                </div>
                                <form id="contact-form" method="POST">
                                    <input type="hidden" name="from_name" value="Lilon Macwan" />
                                    <input type="hidden" name="replyto" value="custom@gmail.com" />
                                    <div className="row gx-3 gy-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">First name</label>
                                                <input name="name" id="name" placeholder="Name *" className="form-control" type="text" required="" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Your Email</label>
                                                <input name="email" id="email" placeholder="Email *" className="form-control" type="email" required="" value="" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="form-label">Subject</label>
                                                <input name="subject" id="subject" placeholder="Subject *" className="form-control" type="text" required="" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Your message</label>
                                                <textarea name="message" id="message" placeholder="Your message *" rows="6" className="form-control" required=""></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div class="send">
                                                <button className="px-btn dark w-100" type="submit" value="Send">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>   
            </section>
        </div>
    )
}

export default Contact;