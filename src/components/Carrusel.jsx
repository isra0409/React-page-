import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../css/carrusel.css'
import Foto1 from '../images/img01.jpg'
import Foto2 from '../images/img02.jpg'
import Foto3 from '../images/img03.jpg'

function Carrusel() {
    return (
        <div className="sliderMenu">

            <Carousel>

                
                <Carousel.Item interval={3000}>
                    <img src={Foto1} alt="" />

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item interval={3000}>
                    <img src={Foto2} alt="" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                

                <Carousel.Item>
                    <img src={Foto3} alt="" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

        </div>
    )
}

export default Carrusel



