import React, { Component } from 'react'

export default class FooterComponent extends Component {
    render() {
        return (
            <section>
                <div className="container" data-aos="zoom-in" data-aos-duration="600">
                    <hr className="my-5" />
                    <div className="row mb-5">

                        <div className="col-lg-3">
                            <a href="#home">
                                <img src="assets/vector-logo.svg" height="35px" alt="img" />
                            </a>
                            <h6><br /></h6>
                        </div>
                        <div className="col-lg-3">
                            <h5>Quick Links</h5>
                            <br /><br />
                            <a href="#about" className="link-navbar">About Us</a><br />
                            <a href="#blog" className="link-navbar">Blog</a><br />
                            <a href="#contact" className="link-navbar">Contact</a><br />
                            <a href="#faq" className="link-navbar">FAQ</a><br />
                            <br />
                        </div>
                        <div className="col-lg-3">
                            <h5>Legal Stuff</h5>
                            <br /><br />
                            <a href="#disclaimer" className="link-navbar">Disclaimer</a><br />
                            <a href="#financing" className="link-navbar">Financing</a><br />
                            <a href="#privacy" className="link-navbar">Privacy Policy</a><br />
                            <a href="#tof" className="link-navbar">Terms of Service</a><br />
                            <br />
                        </div>
                        <div className="col-lg-3">
                            <h5>knowing you're always on the best energy deal.</h5>
                            <br />
                            <form action="#" method="post">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter your Phone number" required />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-custom rounded shadow">Sign Up Now</button>
                            </form>
                        </div>

                    </div>


                </div>

                <footer className="bg-custom text-center pb-3 pt-4">
                    <p className="text-white">Created with <i class="fas fa-heart text-danger"></i> by <a href="https://github.com/radhiant"
                        className="text-white fw-bold" target="_blank" rel="noopener noreferrer">Radhian Sobarna</a></p>
                </footer>
            </section>
        )
    }
}
