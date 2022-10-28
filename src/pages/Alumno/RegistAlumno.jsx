import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UbigeoPeru from 'peru-ubigeo';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import useForm from '../../hooks/useForm';

const ubigeo = new UbigeoPeru();

export default function RegistAlumno() {
  const [
    {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaNac,
      departamento,
      provincia,
      distrito,
      sexo,
      tipoDocumento,
      nroDocumento,
    },
    onInputChange,
    setFormState,
  ] = useForm({
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

  const [{ listDepart, listProv, listDistr }, setubi] = useState({
    listDepart: ubigeo.getRegions(),
    listProv: [],
    listDistr: [],
  });

  useEffect(() => {
    if (departamento !== '') {
      setFormState((state) => ({ ...state, provincia: '', distrito: '' }));

      setubi((ubi) => ({
        ...ubi,
        listProv: ubigeo.getRegions(departamento).data.childrens,
        listDistr: [],
      }));
    }
  }, [departamento, setFormState]);

  useEffect(() => {
    if (provincia !== '') {
      setFormState((state) => ({ ...state, distrito: '' }));

      setubi((ubi) => ({
        ...ubi,
        listDistr: ubigeo.getProvinces(provincia).data.childrens,
      }));
    }
  }, [provincia, setFormState]);

  return (
    <div className="my-8 flex w-fit flex-col items-center gap-10 border-t border-gray-100 p-10 shadow-xl">
      <div className="flex flex-col">
        <FontAwesomeIcon
          className="mb-3 text-5xl text-orange-400"
          icon={faUsersLine}
        />
        <span className="text-lg font-medium">Registro del Alumno</span>
      </div>
      <div>
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
          <FormInput
            id="departamento"
            description="Departamentos"
            placeholder="Seleccione una opción"
            value={departamento}
            onInputChange={onInputChange}
            selectValues={listDepart.map((dep) => dep.name)}
          />
          <FormInput
            id="provincia"
            description="Provincia"
            placeholder="Seleccione una opción"
            value={provincia}
            onInputChange={onInputChange}
            selectValues={listProv.map((prov) => prov.name)}
          />
          <FormInput
            id="distrito"
            description="Distrito"
            placeholder="Seleccione una opción"
            value={distrito}
            onInputChange={onInputChange}
            selectValues={listDistr.map((distr) => distr.name)}
          />
          <FormInput
            id="sexo"
            description="Sexo"
            placeholder="Seleccione una opción"
            value={sexo}
            onInputChange={onInputChange}
            selectValues={['M', 'F']}
          />
          <FormInput
            id="tipoDocumento"
            description="Tipo Documento"
            placeholder="Seleccione una opción"
            value={tipoDocumento}
            onInputChange={onInputChange}
            selectValues={['DNI / LE', 'Carnet de Extranjeria']}
          />
          <FormInput
            id="nroDocumento"
            description="Nro Documento"
            placeholder="Inserte el documento"
            type="text"
            value={nroDocumento}
            onInputChange={onInputChange}
          />
        </div>
      </div>
      <div className="flex gap-10">
        <button
          type="submit"
          className="rounded-md bg-[#635DFF] py-1.5 px-10 text-xs text-white"
        >
          Guardar
        </button>
        <Link to="/alumno">
          <button
            type="submit"
            className="rounded-md bg-red-500 py-1.5 px-10 text-xs text-white"
          >
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
}
