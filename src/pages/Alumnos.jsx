import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormInput from '../components/FormInput';

export default function Alumnos() {
  return (
    <div className="shadow-xl p-10 flex flex-col items-center">
      <FontAwesomeIcon
        className="text-yellow-600 text-5xl mb-3"
        icon={faUsersLine}
      />
      <span className="text-lg font-medium mb-4">Registro del Apoderado</span>
      <div className="grid grid-cols-2 gap-10">
        <FormInput
          name="Nombres"
          placeholder="Inserte los nombres"
          type="text"
        />
        <FormInput
          name="Apellido Paterno"
          placeholder="Inserte el apellido"
          type="text"
        />
        <FormInput
          name="Apellido Materno"
          placeholder="Inserte el apellido"
          type="text"
        />
        <FormInput name="Correo" placeholder="Inserte el correo" type="email" />
      </div>
    </div>
  );
}
