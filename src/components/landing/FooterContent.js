import React, {Fragment} from 'react'

const FooterContent = () => {
    return (
        <Fragment>
            <section className="footer-content d-flex justify-content-around align-items-center text-light">
                <div className="content-wrapper d-flex justify-content-around align-items-center">
                <div className="about-us d-flex justify-content-start align-items-center flex-column">
                    <p>About Us</p>
                    <p className="text-center">We ensure that our services is always have a quality to make sure our customer happy.</p>
                </div>
                <div className="supported-link d-flex flex-column justify-content-around align-items-center">
                    <p>Supported Links</p>
                    <a href="#!" className="link">About Us</a>
                    <a href="#!" className="link">How To Use</a>
                    <a href="#!" className="link">How Pricing Works</a>
                    <a href="#!" className="link">Popular Cities</a>
                </div>
                <div className="social-media d-flex flex-column justify-content-around align-items-center">
                    <p>Social Media</p>
                    <a href="#!"><i className="fab fa-facebook i"></i></a>
                    <a href="#!"><i className="fab fa-twitter i"></i></a>
                    <a href="#!"><i className="fab fa-instagram i"></i></a>
                    <a href="#!"><i className="fas fa-phone i"></i></a>
                </div>
                </div>
            </section>
        </Fragment>
    )
}

export default FooterContent;
