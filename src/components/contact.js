import React from 'react'

const Contact = (props) => {
    return (
        <section className="page-section my-4" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <h2>Contact me</h2>
                        <hr className="divider my-4" />
                        < p className="text-muted mb-3">
                            Get in touch to discuss services and opportunities
                        </p>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-lg-4 text-center mx-auto mb-5">
                        <a href="mailto:volushawn@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-envelope fa-3x"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-center mx-auto mb-5">
                        <a href="https://github.com/ShawnATX" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-square fa-3x"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-center mx-auto mb-5">
                        <a href="https://www.linkedin.com/in/shawn-wright-b8331865/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
