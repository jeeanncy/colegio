import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UbigeoPeru from 'peru-ubigeo';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import useForm from '../../hooks/useForm';
import colegioApi from '../../api/colegioApi';

const ubigeo = new UbigeoPeru();

export default function FormAlumno() {
  const [
    {
      nombres,
      apellidoPaterno,
      apellidoMaterno,
      departamentoID,
      provinciaID,
      distritoID,
      tipoDocumentoID,
      nroDocumento,
      sexo,
      fechaNacimiento,
    },
    onInputChange,
    setFormState,
  ] = useForm({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    departamentoID: '',
    provinciaID: '',
    distritoID: '',
    tipoDocumentoID: '',
    nroDocumento: '',
    sexo: '',
    fechaNacimiento: '',
  });

  const navigate = useNavigate();

  const [isValid, setisValid] = useState(false);

  const [{ listDepart, listProv, listDistr }, setubi] = useState({
    listDepart: ubigeo.getRegions(),
    listProv: [],
    listDistr: [],
  });

  const { id } = useParams();

  useEffect(() => {
    setisValid(
      nombres !== '' &&
        apellidoPaterno !== '' &&
        apellidoMaterno !== '' &&
        departamentoID !== '' &&
        provinciaID !== '' &&
        distritoID !== '' &&
        tipoDocumentoID !== '' &&
        nroDocumento !== '' &&
        sexo !== '' &&
        fechaNacimiento !== ''
    );
  }, [
    nombres,
    apellidoPaterno,
    apellidoMaterno,
    departamentoID,
    provinciaID,
    distritoID,
    tipoDocumentoID,
    nroDocumento,
    sexo,
    fechaNacimiento,
  ]);

  useEffect(() => {
    if (departamentoID !== '') {
      setFormState((state) => ({ ...state, provinciaID: '', distritoID: '' }));

      setubi((ubi) => ({
        ...ubi,
        listProv: ubigeo.getRegions(departamentoID).data.childrens,
        listDistr: [],
      }));
    }
  }, [departamentoID, setFormState]);

  useEffect(() => {
    if (provinciaID !== '') {
      setFormState((state) => ({ ...state, distritoID: '' }));

      setubi((ubi) => ({
        ...ubi,
        listDistr: ubigeo.getProvinces(provinciaID).data.childrens,
      }));
    }
  }, [provinciaID, setFormState]);

  useEffect(() => {
    const getAlumno = (alumnoId) => {
      colegioApi
        .get(`/alumno/${alumnoId}`)
        .then(({ data }) => {
          setFormState(() => ({
            nombres: data.nombres,
            apellidoPaterno: data.apellido_paterno,
            apellidoMaterno: data.apellido_materno,
            departamentoID: data.departamento_id,
            provinciaID: data.provincia_id,
            distritoID: data.distrito_id,
            tipoDocumentoID: data.tipo_documento_id,
            nroDocumento: data.numero_documento,
            sexo: data.sexo,
            fechaNacimiento: data.fecha_nacimiento,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (id !== undefined) getAlumno(id);
  }, [id, setFormState]);

  const agregarAlumno = () => {
    colegioApi
      .post('/alumno', {
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        departamentoID,
        provinciaID,
        distritoID,
        tipoDocumentoID,
        nroDocumento,
        sexo,
        fechaNacimiento: DateTime.fromISO(fechaNacimiento).toISO(),
      })
      .then(() => {
        navigate('/alumno');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actualizarAlumno = (alumnoId) => {
    colegioApi
      .put(`/alumno/${alumnoId}`, {
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        departamentoID,
        provinciaID,
        distritoID,
        tipoDocumentoID,
        nroDocumento,
        sexo,
        fechaNacimiento: DateTime.fromISO(fechaNacimiento).toISO(),
      })
      .then(() => {
        navigate('/alumno');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="m-auto my-8 flex w-fit flex-col items-center gap-10 border-t border-gray-100 p-10 shadow-xl">
      <div className="flex flex-col">
        <FontAwesomeIcon
          className="mb-3 text-5xl text-orange-400"
          icon={faUsersLine}
        />
        <span className="text-lg font-medium">
          {id === undefined ? 'Registro del Alumno' : 'Editar Alumno'}
        </span>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-10">
          <FormInput
            id="nombres"
            description="Nombres"
            placeholder="Inserte los nombres"
            type="text"
            value={nombres}
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
            id="fechaNacimiento"
            description="Fecha de Nacimiento"
            placeholder="Fecha"
            type="date"
            value={fechaNacimiento}
            onInputChange={onInputChange}
          />
          <FormInput
            id="departamentoID"
            description="Departamentos"
            placeholder="Seleccione una opción"
            value={departamentoID}
            onInputChange={onInputChange}
            selectValues={listDepart.map(({ id: departId, name }) => ({
              id: departId,
              name,
            }))}
          />
          <FormInput
            id="provinciaID"
            description="Provincia"
            placeholder="Seleccione una opción"
            value={provinciaID}
            onInputChange={onInputChange}
            selectValues={listProv.map(({ id: provId, name }) => ({
              id: provId,
              name,
            }))}
          />
          <FormInput
            id="distritoID"
            description="Distrito"
            placeholder="Seleccione una opción"
            value={distritoID}
            onInputChange={onInputChange}
            selectValues={listDistr.map(({ id: distrId, name }) => ({
              id: distrId,
              name,
            }))}
          />
          <FormInput
            id="sexo"
            description="Sexo"
            placeholder="Seleccione una opción"
            value={sexo}
            onInputChange={onInputChange}
            selectValues={[
              { id: 'M', name: 'M' },
              { id: 'F', name: 'F' },
            ]}
          />
          <FormInput
            id="tipoDocumentoID"
            description="Tipo Documento"
            placeholder="Seleccione una opción"
            value={tipoDocumentoID}
            onInputChange={onInputChange}
            selectValues={[
              {
                id: 'D',
                name: 'DNI',
              },
              {
                id: 'E',
                name: 'CE',
              },
            ]}
          />
          <FormInput
            id="nroDocumento"
            description="Nro Documento"
            placeholder="Inserte el documento"
            type="number"
            value={nroDocumento}
            onInputChange={onInputChange}
          />
        </div>
      </div>
      <div className="flex gap-10">
        <button
          type="submit"
          className={
            isValid
              ? 'rounded-md bg-[#635DFF] py-1.5 px-10 text-xs text-white'
              : 'cursor-not-allowed rounded-md bg-gray-500 py-1.5 px-10 text-xs text-gray-300'
          }
          onClick={() => {
            if (id === undefined) agregarAlumno();
            else actualizarAlumno(id);
          }}
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
