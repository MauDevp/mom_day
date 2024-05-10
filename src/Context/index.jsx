import { createContext, useState } from 'react';

import SlideUno from '../Components/SlideUno';
// import SlideDos from '../Components/SlideDos';
import SlideTres from '../Components/SlideTres';
import SlideCuatro from '../Components/SlideCuatro';
import SlideCinco from '../Components/SlideCinco';
import SlideSeis from '../Components/SlideSeis';
import SlideSiete from '../Components/SlideSiete';
import SlideOcho from '../Components/SlideOcho';
import SlideNueve from '../Components/SlideNueve';
import SlideDiez from '../Components/SlideDiez';
import SlideOnce from '../Components/SlideOnce';
import SlideDoce from '../Components/SlideDoce';
import SlideTrece from '../Components/SlideTrece';
import SlideCatorce from '../Components/SlideCatorce';
import SlideQuince from '../Components/SlideQuince';
import SlideDieciseis from '../Components/SlideDieciseis';


export const SlideContext = createContext();


const slides = [
    SlideUno,
    SlideTres,
    SlideCuatro,
    SlideCinco,
    SlideSeis,
    SlideSiete,
    SlideOcho,
    SlideNueve,
    SlideDiez,
    SlideOnce,
    SlideDoce,
    SlideTrece,
    SlideCatorce,
    SlideQuince,
    SlideDieciseis,
];

// eslint-disable-next-line react/prop-types
export const SlideProvide = ({children}) =>{

    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    // Función para avanzar al siguiente slide
    // Reemplazar setTimeout con requestAnimationFrame
    const nextSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setTransitioning(false);
        }, 500); // Ajuste del tiempo para que coincida con la duración de la transición CSS
    };
    
    const backSlide = () => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prevSlide) => prevSlide === 0 ? 0 : prevSlide - 1);
            setTransitioning(false);
        }, 500); // Ajuste del tiempo para que coincida con la duración de la transición CSS
    };

    return(
        <SlideContext.Provider value={{
            slide: slides[currentSlide],
            nextSlide,
            backSlide,
            transitioning,
        }}>
            {children}
        </SlideContext.Provider>
    )
}

