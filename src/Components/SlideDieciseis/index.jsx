import momAndSonFrog from '../../assets/SlideDieciseis_MomAndSonFrog.svg';

const SlideDieciseis = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-3xl font-semibold mb-4 px-10'
                >TE AMAMOS MUCHOOOOO...!!!
            </p>
            <p  className='text-3xl text-[#a63ecf] font-semibold mb-14 px-10'
                >Feliz dia de las madres.
            </p>
            <picture>
                <img className='mb-8' src={momAndSonFrog} alt="Mom and son frog" />
            </picture>
        </div>
    )
}

export default SlideDieciseis;