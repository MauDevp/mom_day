import florkWithDog from '../../assets/SlideNueve_FlorkWithDog.svg';

const SlideNueve = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Gracias por aguantar a <span className='font-normal'>perros.</span>
            </p>
            <picture>
                <img className='mb-8' src={florkWithDog} alt="flork with dog" /> 
            </picture>
        </div>
    )
}

export default SlideNueve;