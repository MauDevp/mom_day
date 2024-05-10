import { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

// eslint-disable-next-line react/prop-types
const Tarjeta = ({ texto, descripcion, imagenSrc, cantidadUsos, localStorageKey }) => {
  const [usosRestantes, setUsosRestantes] = useState(cantidadUsos);
  const [cuponesConsumidos, setCuponesConsumidos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  useEffect(() => {
    const usosGuardados = localStorage.getItem(localStorageKey);
    if (usosGuardados) {
      const usos = parseInt(usosGuardados);
      setUsosRestantes(usos);
      setCuponesConsumidos(cantidadUsos - usos);
      if (usos === 0) {
        setVisible(false);
      }
    }
  }, [localStorageKey]);

  const handleMarcado = () => {
    setMostrarModal(true);
  };

  const confirmarMarcado = (confirmado) => {
    setMostrarModal(false);
    if (confirmado && usosRestantes > 0) {
      setMostrarConfirmacion(true);
    }
  };

  const confirmarCanje = (confirmado) => {
    setMostrarConfirmacion(false);
    if (confirmado) {
      // Lógica para marcar el cupón
      const nuevosUsos = usosRestantes - 1;
      setUsosRestantes(nuevosUsos);
      setCuponesConsumidos(cuponesConsumidos + 1);
      localStorage.setItem(localStorageKey, nuevosUsos.toString());
      if (nuevosUsos === 0) {
        setVisible(false);
      }
    }
  };

  const urlWhatsApp = `https://wa.me/523326731940?text=Cupon%20Canjeado%20(${encodeURIComponent(texto)})%20(${cuponesConsumidos}%20cupones%20consumidos)`;

  return (
    <>
      {visible && (
        <div className="max-w-full mx-2 my-4 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex">
            <div>
              <img className="h-48 w-48 md:w-48 object-cover rounded-s-lg" src={imagenSrc} alt="Imagen de cupón" />
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <div className="mt-2 uppercase tracking-wide text-base text-gray-800 font-semibold">{texto}</div>
              <p className="mt-0 text-gray-400">{descripcion}</p>
              <div className="mt-6 flex flex-col">
                <button
                  onClick={handleMarcado}
                  className="w-full bg-[#d53bd7c2] hover:bg-[#c438c6d8] text-white font-bold py-2 px-4 rounded"
                >
                  Marcar
                </button>
                <span className="text-sm text-gray-500 mt-1">
                  {usosRestantes} uso{usosRestantes !== 1 ? 's' : ''} restante{usosRestantes !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="mb-4 text-lg">¿Estás seguro de marcar el cupón de: <span className='font-semibold'>{texto}</span> ?</p>
            <div className="flex justify-center">
              <button
                onClick={() => confirmarMarcado(true)}
                className="bg-[#d53bd7c2] hover:bg-[#c438c6d8] text-white font-bold py-2 px-4 mr-4 rounded"
              >
                Sí
              </button>
              <button
                onClick={() => confirmarMarcado(false)}
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      {mostrarConfirmacion && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="mb-0 font-semibold text-lg">Mostrar esto a la persona para canjear:</p>
            <p className="mb-8">Se canjeará un cupón de {texto}</p>
            <p className="mb-6">Escanee el siguiente código QR desde WhatsApp:</p>
            <div className="flex justify-center">
              <QRCode value={urlWhatsApp} />
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => confirmarCanje(true)}
                className="bg-[#d53bd7c2] hover:bg-[#c438c6d8] text-white font-bold py-2 px-4 mr-4 rounded"
              >
                OK
              </button>
              <button
                onClick={() => confirmarCanje(false)}
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tarjeta;
