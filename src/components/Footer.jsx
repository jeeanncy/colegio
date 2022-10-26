import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className="w-full">
      <div className="px-40 bg-[#00a8ff] text-white py-8 w-full">
        <div className="flex justify-between max-w-[75rem] m-auto gap-8 flex-wrap">
          <div className="grid grid-cols-3 gap-[0.7rem] w-[25rem] font-semibold text-xs">
            <span className="text-sm font-bold">Nosotros</span>
            <span className="text-sm font-bold">Colegio</span>
            <span className="text-sm font-bold">Talleres</span>
            <span>Quienes somos?</span>
            <span>Admision</span>
            <span>Cursos de Arte</span>
            <span>Mision</span>
            <span>Por que elegirnos?</span>
            <span>Deporte</span>
            <span>Vision</span>
            <span>Niveles</span>
            <span>Karate</span>
            <span className="col-span-2">Objetivos</span>
            <span>Blog</span>
          </div>
          <div className="flex flex-col gap-[0.7rem] text-xs font-semibold">
            <span className="text-sm font-bold">Ponerse en Contacto</span>
            <div className="space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>(480) 555-0103</span>
            </div>
            <div className="space-x-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>La Molina - Av. La Fontana </span>
            </div>
            <div className="space-x-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>jesusnazareno@outlook.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-40 py-3 w-full max-w-[75rem] m-auto">
        <span className="font-medium text-zinc-600">
          Jesus de Nazareno - Todos los derechos reservados
        </span>
        <div className="flex justify-center py-3 font-medium text-zinc-600 gap-4">
          <FontAwesomeIcon className="text-xl" icon={faFacebook} />
          <FontAwesomeIcon className="text-xl" icon={faInstagram} />
          <FontAwesomeIcon className="text-xl" icon={faTwitter} />
        </div>
      </div>
    </div>
  );
}
