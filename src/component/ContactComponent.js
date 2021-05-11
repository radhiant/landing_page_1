import React, { Component } from 'react'

export default class ContactComponent extends Component {
    render() {
        return (
            <section>
                <div>
                    <img src="assets/bg-contact.png" width="100%" className="bg-contact" alt="img" />
                    <br /><br /><br /><br /><br /><br />
                    <div className="container position-relative">
                        <div className="d-none d-lg-block">
                            <img src="assets/avatar/1.svg" alt="img" width="250px" className="avatar1" data-aos="fade-up-right"
                                data-aos-duration="600" data-aos-delay="600" />
                            <img src="assets/avatar/2.svg" alt="img" width="250px" className="avatar2" data-aos="fade-up-left"
                                data-aos-duration="600" data-aos-delay="600" />
                            <img src="assets/avatar/3.svg" alt="img" width="250px" className="avatar3" data-aos="fade-down-left"
                                data-aos-duration="600" data-aos-delay="600" />
                            <img src="assets/avatar/4.svg" alt="img" width="250px" className="avatar4" data-aos="fade-up-left"
                                data-aos-duration="600" data-aos-delay="600" />
                            <img src="assets/avatar/5.svg" alt="img" width="250px" className="avatar5" data-aos="fade-down-right"
                                data-aos-duration="600" data-aos-delay="600" />
                        </div>
                        <div className="row justify-content-center">
                            <h1 className="h2 bold-3 my-3 max-width-5x text-center">Need a super hero?</h1>
                        </div>

                        <div className="row justify-content-center">
                            <div className="desc my-3 text-center" data-aos="fade-up" data-aos-duration="600">
                                <p>Do you require some help for your project: Conception workshop,
                        prototyping, marketing strategy, landing page, Ux/UI?</p>
                            </div>
                        </div>

                        <div className="row mt-3 mb-5 justify-content-center">
                            <a href="/#" className="btn btn-custom p-3 rounded shadow width-2x bold-2" data-aos="fade-up"
                                data-aos-duration="600" data-aos-delay="300">Contact our expert</a>
                        </div>

                        <br /><br /><br />

                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br />
            </section>
        )
    }
}
