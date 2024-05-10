import momChancla from '../../assets/SlideCinco_MomChancla.svg';

const SlideCinco = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-base font-extralight mb-14 px-10'
                >Gracias por aguantarte nuestros desmadres, por cada sacrificio y por echarle todas las ganas para darnos lo mejor, aunque a veces nos pusiéramos rebeldes.
            </p>
            <picture>
                <img className='mb-8' src={momChancla} alt="flork Mom Chancla" />
            </picture>
        </div>
    )
}

export default SlideCinco;