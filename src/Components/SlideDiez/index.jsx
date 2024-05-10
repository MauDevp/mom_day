import angryMom from '../../assets/SlideDiez_AngryMom.svg';

const SlideDiez = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Por todos esos regaños para ser mejores personas.
            </p>
            <picture>
                <img className='mb-8' src={angryMom} alt="flork angry mom" /> 
            </picture>
        </div>
    )
}

export default SlideDiez;