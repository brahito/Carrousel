import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
    let settings = {
        dot:true,
        infinite: true,
        speed:500,
        slidesToShow:3,
        slidesToScroll: 3,
        cssEase: "linear"
    }
    return (
        <div className= "container mt-5 carousel">
            <Slider {...settings}>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src ="https://www.hola.com/imagenes/estar-bien/20190301137999/thedoger-cafeteria-adoptar-perros-gt/0-651-995/perro-t.jpg?filter=w600&filter=ds75"/>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src ="https://www.hola.com/imagenes/estar-bien/20190301137999/thedoger-cafeteria-adoptar-perros-gt/0-651-995/perro-t.jpg?filter=w600&filter=ds75"/>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src ="https://www.hola.com/imagenes/estar-bien/20190301137999/thedoger-cafeteria-adoptar-perros-gt/0-651-995/perro-t.jpg?filter=w600&filter=ds75"/>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src ="https://www.hola.com/imagenes/estar-bien/20190301137999/thedoger-cafeteria-adoptar-perros-gt/0-651-995/perro-t.jpg?filter=w600&filter=ds75"/>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src ="https://www.hola.com/imagenes/estar-bien/20190301137999/thedoger-cafeteria-adoptar-perros-gt/0-651-995/perro-t.jpg?filter=w600&filter=ds75"/>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
