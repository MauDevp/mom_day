import momHug from '../../assets/SlideCuatro_MomHug.svg';

const SlideCuatro = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-base font-extralight mb-16 px-10'
                >Mamá, gracias por querernos con todo y nuestras locuras, por cada abrazo apapachador y por hacernos sentir que somos lo mejor del mundo.
            </p>
            <picture className=''>
                <img src={momHug} alt="flork Mom Hug" />
            </picture>
        </div>
    )
}

export default SlideCuatro;