import momDay from '../../assets/SlideTres_MomDay.svg';

const SlideTres = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-2xl font-normal mb-10 px-10'
                > ¡Feliz Día de la Madre, Mamá 
            </p>
            <picture className=''>
                <img src={momDay} alt="flork Mom Day" />
            </picture>
        </div>
    )
}

export default SlideTres;