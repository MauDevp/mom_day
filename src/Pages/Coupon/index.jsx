import Tarjeta from '../../Components/CouponCard'

function Coupon() {
    return (
        <div className="App overflow-y-auto mt-16 w-full h-full">
            <Tarjeta texto="Prueba de cupon" descripcion="cupon" imagenSrc="https://www.cpsc.gov/s3fs-public/Certificate_TestingAndCertification_Card.png" cantidadUsos={5} localStorageKey="cuponTest2" />
            <Tarjeta texto="Entrada de cine" descripcion="Incluye palomitas" imagenSrc="https://www.axondigital.mx/wp-content/uploads/2019/06/Screen-Shot-2019-06-28-at-10.23.30-AM.png" cantidadUsos={1} localStorageKey="cuponCine" />
            <Tarjeta texto="Lavado de carro" descripcion="Lavado completo" imagenSrc="https://img.freepik.com/vector-premium/estacion-lavado-autos-icono-servicio-lavado-autos-limpieza-motor-carroceria-transporte-limpio-todos-lados-lavado-limpieza-integral-coche-tunel-lavado-lavado-espuma-agua_435184-1033.jpg" cantidadUsos={3} localStorageKey="cuponLavado" />
            <Tarjeta texto="Reparaciones" descripcion="Usalos bien" imagenSrc="https://www.yunbitsoftware.com/blog/wp-content/uploads/2020/12/construction-worker-builder-with-tools-scaled-e1607617086908.jpg" cantidadUsos={5} localStorageKey="cuponReparacion" />
            <Tarjeta texto="Noche de películas" descripcion="incluye palomitas" imagenSrc="https://nuxu15.files.wordpress.com/2015/11/11243566003_e50ae60bad_h.jpg" cantidadUsos={5} localStorageKey="cuponPelicula" />
            <Tarjeta texto="Masaje" descripcion="Duración: 15min" imagenSrc="https://img.freepik.com/vector-premium/terapia-masaje-tratamiento-medicina-tradicional-bienestar-ilustracion-vector-salon-medico-caracter-terapeuta-medico-hombre-dibujos-animados-dando-masajes-mujer-acostada-mesa-relajante-aislada-blanco_212168-1197.jpg" cantidadUsos={3} localStorageKey="cuponMasaje" />
            <Tarjeta texto="Desayuno en la cama" descripcion="Un desayuno completo" imagenSrc="https://img.freepik.com/vector-premium/concepto-rutina-matutina-chica-tomando-cafe-cama-desayuno-cama-ilustracion-vector-plano-sobre-fondo-blanco_511716-102.jpg" cantidadUsos={1} localStorageKey="cuponDesayuno" />
            <Tarjeta texto="Cena especial" descripcion="Un platillo a escoger" imagenSrc="https://static.vecteezy.com/system/resources/previews/008/170/136/non_2x/cute-cartoon-logo-character-of-chef-hand-drawn-chibi-character-isolated-background-vector.jpg" cantidadUsos={1} localStorageKey="cuponCena" />
            <div className='h-52'></div>
        </div>
    )
}
export default Coupon