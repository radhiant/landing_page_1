import React, { Component } from 'react'

export default class StrategisComponent extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <h1 className="h2 bold-3 mt-5 mb-4">Marketing Strategies</h1>
                    </div>

                    <div className="row">
                        <p data-aos="fade-up" data-aos-duration="600">Join 40,000+ other marketers and get
                proven strategies on email marketing</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card border-0 my-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                <img src="assets/marketing/01.svg" width="100%" className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <h6 className="card-title">By <b>Abdullah</b> | 03 March 2019</h6>
                                    <p className="card-text h4 bold-2">Increasing Prosperity With Positive Thinking</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-0 my-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                                <img src="assets/marketing/02.svg" width="100%" className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <h6 className="card-title">By <b>Abdullah</b> | 03 March 2019</h6>
                                    <p className="card-text h4 bold-2">Motivation Is The First Step To Success</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card border-0 my-3" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
                                <img src="assets/marketing/03.svg" width="100%" className="card-img-top" alt="img" />
                                <div className="card-body">
                                    <h6 className="card-title">By <b>Abdullah</b> | 03 March 2019</h6>
                                    <p className="card-text h4 bold-2">Success Steps For Your Personal Or Business Life</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br />
            </section>
        )
    }
}
