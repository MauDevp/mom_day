import queenMom from '../../assets/SlideDoce_QueenMom.svg';

const SlideDoce = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >¡Mamá, eres la más increíble de todas! Gracias por ser nuestra confidente, por escucharnos sin juzgar y por llenar nuestra casa de alegrías.
            </p>
            <picture>
                <img className='mb-8' src={queenMom} alt="flork queen mom" />
            </picture>
        </div>
    )
}

export default SlideDoce;