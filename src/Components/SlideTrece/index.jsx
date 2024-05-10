import StrongMom from '../../assets/SlideTrece_StrongMom.svg';

const SlideTrece = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Nos has enseñado a ser fuertes, a enfrentar los retos con valentía y a nunca perder la sonrisa, incluso en los momentos más difíciles. ¡Eres nuestro héroe!
            </p>
            <picture>
                <img className='mb-8' src={StrongMom} alt="flork strong mom" />
            </picture>
        </div>
    )
}

export default SlideTrece;