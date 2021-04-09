import React from 'react'
import { Carousel } from './components/Carousel'
import "./css/app.scss"

export const App = () => {

    return (

            <div className= "main_grid">
                <div>
                <h1 className= "slider-title">Puto carrusel</h1>
                <Carousel />
                </div>
                
            </div>
    )
}
