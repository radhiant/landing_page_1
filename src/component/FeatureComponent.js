import React, { Component } from 'react'

export default class FeatureComponent extends Component {
    render() {
        return (
            <section>
                <div className="position-relative">
                    <img src="assets/bg-feature.svg" alt="feature" width="100%" className="bg-feature" />
                    <div className="container position-relative">

                        <div className="row justify-content-center">
                            <h1 className="h2 bold-3 my-5 max-width-5x text-center">We design tools to unveil your superpowers</h1>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <div className="card border-0" data-aos="fade-up" data-aos-duration="300">
                                    <div className="card-body align">
                                        <div className="box bg-purple mb-4">
                                            <i className="fas fa-mouse-pointer text-white ms-1"></i>
                                        </div>
                                        <h5 className="card-title bold-2 mb-3">First click tests</h5>
                                        <p className="card-text">While most people enjoy casino gambling,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0" data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                                    <div className="card-body align">
                                        <div className="box bg-yellow mb-4">
                                            <i className="fas fa-pen-nib text-white"></i>
                                        </div>
                                        <h5 className="card-title bold-2 mb-3">Design surveys</h5>
                                        <p className="card-text">Sports betting, lottery and bingo playing for the fun</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0" data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
                                    <div className="card-body align">
                                        <div className="box bg-red mb-4">
                                            <i className="fas fa-heart text-white"></i>
                                        </div>
                                        <h5 className="card-title bold-2 mb-3">Preference tests</h5>
                                        <p className="card-text">The Myspace page defines the individual.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0" data-aos="fade-up" data-aos-duration="300" data-aos-delay="300">
                                    <div className="card-body align">
                                        <div className="box bg-blue mb-4">
                                            <i className="fas fa-hourglass-half text-white"></i>
                                        </div>
                                        <h5 className="card-title bold-2 mb-3">Five second tests</h5>
                                        <p className="card-text">Personal choices and the overall personality of the person.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 justify-content-center">
                            <a href="#signup" className="btn btn-custom p-3 rounded shadow width-2x bold-2" data-aos="fade-up"
                                data-aos-duration="300" data-aos-delay="300">SIGN UP NOW</a>
                        </div>

                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br />
            </section>
        )
    }
}
