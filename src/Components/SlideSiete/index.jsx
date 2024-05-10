import florkWithKitten from '../../assets/SlideSiete_FlorkWithKitten.svg';

const SlideDiez = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Gracias por aguantar a <span className='font-normal'>gatos.</span>
            </p>
            <picture>
                <img className='mb-8' src={florkWithKitten} alt="flork with kitten" /> 
            </picture>
        </div>
    )
}

export default SlideDiez;