import florkMusic from '../../assets/SlideUno_music.svg';

const SlideUno = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-bold mb-16'
                >Feliz día!!!
            </p>
            <picture>
                <img src={florkMusic} alt="flork music" />
            </picture>
        </div>
    )
}

export default SlideUno;