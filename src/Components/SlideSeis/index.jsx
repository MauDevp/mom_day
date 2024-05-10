import momDiscutting from '../../assets/SlideSeis_MomDiscutting.svg';

const SlideSeis = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-base font-extralight mb-14 px-10'
                >Gracias por aguantar nuestras discusiones, gritos, y cosas y aun así seguir haciendo el mas grande esfuerzo de seguir adelante y enseñarnos.
            </p>
            <picture>
                <img className='mb-8' src={momDiscutting} alt="flork Mom discutting" /> 
            </picture>
        </div>
    )
}

export default SlideSeis;