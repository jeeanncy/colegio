import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UbigeoPeru from 'peru-ubigeo';
import FormInput from '../components/FormInput';
import useForm from '../hooks/useForm';

const ubigeo = new UbigeoPeru();
const regions = ubigeo.getRegions();
const provinces = regions[0].provinces();
const districts = provinces[0].districts();

export default function Alumno() {
  const { onInputChange, nombre, apellidoPaterno, apellidoMaterno, fechaNac } =
    useForm({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNac: '',
      departamento: '',
      provincia: '',
      distrito: '',
      sexo: '',
      tipoDocumento: '',
      nroDocumento: '',
    });

  return (
    <div className="shadow-xl p-10 flex flex-col items-center">
      <FontAwesomeIcon
        className="text-yellow-600 text-5xl mb-3"
        icon={faUsersLine}
      />
      <span className="text-lg font-medium mb-4">Registro del Alumno</span>
      <div className="grid grid-cols-2 gap-10">
        <FormInput
          id="nombre"
          description="Nombres"
          placeholder="Inserte los nombres"
          type="text"
          value={nombre}
          onInputChange={onInputChange}
        />
        <FormInput
          id="apellidoPaterno"
          description="Apellido Paterno"
          placeholder="Inserte el apellido"
          type="text"
          value={apellidoPaterno}
          onInputChange={onInputChange}
        />
        <FormInput
          id="apellidoMaterno"
          description="Apellido Materno"
          placeholder="Inserte el apellido"
          type="text"
          value={apellidoMaterno}
          onInputChange={onInputChange}
        />
        <FormInput
          id="fechaNac"
          description="Fecha de Nacimiento"
          placeholder="Fecha"
          type="date"
          value={fechaNac}
          onInputChange={onInputChange}
        />
        {/*
        <FormInput
          title="Departamentos"
          placeholder="Seleccione una opción"
          selectValues={regions}
        />
        <FormInput
          title="Provincias"
          placeholder="Seleccione una opción"
          selectValues={provinces}
        />
        <FormInput
          title="Districtos"
          placeholder="Seleccione una opción"
          selectValues={districts}
        />
        <FormInput
          title="Sexo"
          placeholder="Seleccione una opción"
          selectValues={[{ name: 'M' }, { name: 'F' }]}
        /> */}
      </div>
    </div>
  );
}
