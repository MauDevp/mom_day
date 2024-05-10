
const SlideDos = () => {
    return(
        <div className="flex justify-center items-center flex-col w-full h-full z-20">
            <div className="bg-green-600 bg-opacity-40 w-1/2 h-full fixed z-0 top-0 left-0"></div>
            <div className="flex justify-center items-center w-full gap-6">
                <p  className='text-xl font-normal px-8'>Verde - atrás</p>
                <p  className='ml-6 text-xl font-normal px-8'>Azul - Adelante</p>
            </div>
            <div className="bg-blue-600 bg-opacity-40 w-1/2 h-full fixed z-0 top-0 right-0"></div>
        </div>
    )
}

export default SlideDos;