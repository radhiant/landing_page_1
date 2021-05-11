import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <section>
                <div className="container">

                    <br /><br /><br />

                    <div className="row my-5">

                        <div className="col-lg-12 d-block d-lg-none">
                            <img src="assets/vector-header.svg" alt="img-header" width="100%" data-aos="zoom-in" data-aos-duration="600" />
                        </div>

                        <div className="col-lg-6">
                            <div className="row align">
                                <h1 className="text-truncate bold-3 my-5" data-aos="zoom-in" data-aos-duration="600">The Design Thinking
                                </h1>
                                <div className="desc mt-5" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                                    <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to
                                    imagine your next
                                    user
                            experience.</p>
                                </div>
                                <div className="row my-4">
                                    <div className="col-lg-5">
                                        <a href="/#" className="btn btn-custom p-3 rounded shadow width-1n8x" data-aos="zoom-in"
                                            data-aos-duration="600" data-aos-delay="600">Get Started</a>
                                    </div>
                                    <div className="col-lg-7">
                                        <br />
                                        <a href="/#" className="link" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600"><i
                                            className="fas fa-play color-theme"></i> Watch the Video</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-block">
                            <img src="assets/vector-header.svg" alt="img-header" width="100%" data-aos="zoom-in" data-aos-duration="600"
                                data-aos-delay="900" />
                        </div>

                    </div>

                </div>
                <br /><br /><br /> <br /><br />
            </section>
        )
    }
}
