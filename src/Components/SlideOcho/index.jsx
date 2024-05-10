import florkWithRabbit from '../../assets/SlideOcho_FlorkWithRabbit.svg';

const SlideOcho = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Gracias por aguantar a <span className='font-normal'>conejos.</span>
            </p>
            <picture>
                <img className='mb-8' src={florkWithRabbit} alt="flork with rabbit" /> 
            </picture>
        </div>
    )
}

export default SlideOcho;