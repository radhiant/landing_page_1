import React, { Component } from 'react'
import ContactComponent from './ContactComponent'
import EffortlessComponent from './EffortlessComponent'
import FeatureComponent from './FeatureComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import MarketerComponent from './MarketerComponent'
import NavbarComponent from './NavbarComponent'
import ProductManagerComponent from './ProductManagerComponent'
import StrategisComponent from './StrategisComponent'
import AOS from "aos"
import ScreenComponent from './ScreenComponent'

export default class index extends Component {

    componentDidMount() {
        //load aos css
        AOS.init();

    }

    render() {
        return (
            <div>
                <ScreenComponent />
                <NavbarComponent />
                <HeaderComponent />
                <FeatureComponent />
                <EffortlessComponent />
                <ProductManagerComponent />
                <MarketerComponent />
                <ContactComponent />
                <StrategisComponent />
                <FooterComponent />
            </div>
        )
    }
}
