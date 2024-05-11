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
            <p className='fixed right-5 bottom-10'><span className='font-medium'>Atte.,</span> Tus hijos</p>
            <p className='fixed right-8 bottom-5'><span className='font-medium'>Para:</span> Monica</p>
        </div>
    )
}

export default SlideUno;