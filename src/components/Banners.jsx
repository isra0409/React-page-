import React, { Component } from 'react'
import FotoBanner from '../images/yourself.jpg'
import '../css/banners.css'

export class Banners extends Component {
    render() {
        return (
            <div className="imgBanners">
                <img src={FotoBanner} alt="" />
            </div>
        )
    }
}

export default Banners
