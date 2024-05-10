//components
import { useContext } from 'react';
import { SlideContext } from '../../Context/index'; 

const Home = () => {
    const { slide, nextSlide, backSlide, transitioning } = useContext(SlideContext);
    const SlideComponent = slide; 

    return (
        <div className='flex justify-center items-center flex-row w-full h-full '>
            <div onClick={backSlide}
                className='w-1/2 h-full fixed z-10 top-0 left-0'>
            </div>
            <div className={`slide ${transitioning ? 'slide-enter' : 'slide-exit'}`}>
                <SlideComponent />
            </div>
            <div onClick={nextSlide}
                className='w-1/2 h-full fixed z-10 top-0 right-0'> 
            </div>
        </div>
    );
}

export default Home;