import textAndCrown from '../../assets/SlideQuince_TextAndCrown.svg';

const SlideQuince = () => {
    return(
        <div className='flex justify-center items-center flex-col w-full h-full'>
            <p  className='text-lg font-extralight mb-14 px-10'
                >Mamá, en este día tan especial queremos decirte ¡gracias por ser <span className='font-normal'>tú</span>! Por tu amor infinito, por tu fuerza inquebrantable y por ser la mejor mamá del mundo entero. ¡Te queremos un montón!
            </p>
            <picture>
                <img className='mb-8' src={textAndCrown} alt="One text and one crown" />
            </picture>
        </div>
    )
}

export default SlideQuince;