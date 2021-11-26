import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="ftco-section bg-light mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="heading-section ">Contact Us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-7 d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Get in touch</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form method="POST" id="contactForm" name="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="7"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              value="Send Message"
                              className="btn-regular "
                              style={{ cursor: "pointer" }}
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                    <h3 className="mb-4 mt-md-4">Contact us</h3>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span> 1717 Motijheel, North West,
                          Dhaka
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span> <a>0177777777</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span> <a>themepark@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Website</span> <a>www.themepark.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
