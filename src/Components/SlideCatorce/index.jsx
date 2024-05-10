import danceMom from '../../assets/SlideCatorce_DanceMom.svg';

const SlideCatorce = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Vamos a celebrarte como la reina que eres, con música, baile y un montón de risas. ¡Porque contigo la vida es más divertida, mamá!
            </p>
            <picture>
                <img className='mb-8' src={danceMom} alt="flork dance mom" />
            </picture>
        </div>
    )
}

export default SlideCatorce;