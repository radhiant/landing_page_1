import React, { Component } from 'react'

export default class ProductManagerComponent extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row mb-5">

                        <div className="col-lg-12 d-block d-lg-none">
                            <center>
                                <img src="assets/vector-productmanager.svg" alt="img" width="100%" data-aos="zoom-in" data-aos-duration="600" />
                            </center>
                        </div>

                        <div className="col-lg-6 d-none d-lg-block">
                            <img src="assets/vector-productmanager.svg" alt="img" data-aos="fade-right" data-aos-duration="600" width="100%" />
                        </div>

                        <div className="col-lg-6">
                            <div className="row" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                                <h1 className="h5 bold-2 mt-3">Easier decision making for</h1>
                                <h1 className="bold-3">Product Managers</h1>
                                <div className="desc mt-5 mb-2">
                                    <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices
                                    and the overall
                            personality of the person.</p>
                                </div>
                                <div className="d-flex desc">
                                    <img src="assets/vector-check.svg" alt="img" width="35px" className="me-3" />
                                    <p className="mt-3">Never worry about overpaying for your energy again.</p>
                                </div>
                                <div className="d-flex desc">
                                    <img src="assets/vector-check.svg" alt="img" width="35px" className="me-3" />
                                    <p className="mt-3">We will only switch you to energy companies that we trust and will treat you
                            right</p>
                                </div>
                                <div className="d-flex desc">
                                    <img src="assets/vector-check.svg" alt="img" width="35px" className="me-3" />
                                    <p className="mt-3">We track the markets daily and know where the savings are.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /> <br /><br />
            </section>
        )
    }
}
