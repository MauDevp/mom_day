import curatorMom from '../../assets/SlideOnce_CuratorMom.svg';

const SlideOnce = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Gracias por cada sacrificio que has hecho por nosotros, por cada noche sin dormir cuidándonos.
            </p>
            <picture>
                <img className='mb-8' src={curatorMom} alt="flork curator mom" />
            </picture>
        </div>
    )
}

export default SlideOnce;