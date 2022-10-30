import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import FormInput from '../../components/FormInput';
import useForm from '../../hooks/useForm';
import colegioApi from '../../api/colegioApi';

export default function Matricula() {
  const [
    {
      situacionId,
      estadoId,
      nivelId,
      gradoId,
      modalidadId,
      turnoId,
      fechaMatricula,
      periodo,
      seccion,
    },
    onInputChange,
  ] = useForm({
    situacionId: '',
    estadoId: '',
    nivelId: '',
    gradoId: '',
    modalidadId: '',
    turnoId: '',
    fechaMatricula: DateTime.now().toFormat('yyyy-MM-dd'),
    periodo: DateTime.now().year,
    seccion: '',
  });

  const navigate = useNavigate();

  const [isValid, setisValid] = useState(false);

  const [listGrado, setListGrado] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setisValid(
      situacionId !== '' &&
        estadoId !== '' &&
        nivelId !== '' &&
        gradoId !== '' &&
        modalidadId !== '' &&
        turnoId !== '' &&
        fechaMatricula !== '' &&
        periodo !== '' &&
        seccion !== ''
    );
  }, [
    situacionId,
    estadoId,
    nivelId,
    gradoId,
    modalidadId,
    turnoId,
    periodo,
    fechaMatricula,
    seccion,
  ]);

  useEffect(() => {
    if (nivelId !== '') {
      const grados = [1, 2, 3, 4, 5];
      if (nivelId === 'P') {
        grados.push(6);
      }
      setListGrado(
        grados.map((grado) => ({ id: grado, name: `${grado}° Grado` }))
      );
    }
  }, [nivelId, setListGrado]);

  const matricularAlumno = () => {
    colegioApi
      .post('/matricula', {
        alumno_id: id,
        situacion_id: situacionId,
        estado_id: estadoId,
        nivel_id: nivelId,
        grado_id: gradoId,
        modalidad_id: modalidadId,
        turno_id: turnoId,
        periodo,
        fechaMatricula: DateTime.fromISO(fechaMatricula).toISO(),
        seccion,
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
        <span className="text-lg font-medium">Matricula Alumno</span>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-10">
          <FormInput
            id="situacionId"
            description="Situacion"
            placeholder="Seleccione una opción"
            value={situacionId}
            onInputChange={onInputChange}
            selectValues={[
              { id: '1', name: 'Ingresante' },
              { id: '2', name: 'Estudiante' },
            ]}
          />
          <FormInput
            id="estadoId"
            description="Estado"
            placeholder="Seleccione una opción"
            value={estadoId}
            onInputChange={onInputChange}
            selectValues={[
              { id: '1', name: 'Promovido' },
              { id: '2', name: 'Repitente' },
            ]}
          />
          <FormInput
            id="nivelId"
            description="Nivel"
            placeholder="Seleccione una opción"
            value={nivelId}
            onInputChange={onInputChange}
            selectValues={[
              { id: 'P', name: 'Primaria' },
              { id: 'S', name: 'Secundaria' },
            ]}
          />
          <FormInput
            id="gradoId"
            description="Grado"
            placeholder="Seleccione una opción"
            value={gradoId}
            onInputChange={onInputChange}
            selectValues={listGrado}
          />
          <FormInput
            id="seccion"
            description="Seccion"
            placeholder="Seleccione una opción"
            value={seccion}
            onInputChange={onInputChange}
            selectValues={[
              { id: 'A', name: 'A' },
              { id: 'B', name: 'B' },
            ]}
          />
          <FormInput
            id="modalidadId"
            description="Modalidad"
            placeholder="Seleccione una opción"
            value={modalidadId}
            onInputChange={onInputChange}
            selectValues={[
              { id: '1', name: 'Presencial' },
              { id: '2', name: 'Virtual' },
            ]}
          />
          <FormInput
            id="turnoId"
            description="Turno"
            placeholder="Seleccione una opción"
            value={turnoId}
            onInputChange={onInputChange}
            selectValues={[
              { id: '1', name: 'Mañana' },
              { id: '2', name: 'Tarde' },
            ]}
          />
          <div>
            <span className="block text-[0.8rem] text-slate-500">
              Fecha de Matricula
            </span>
            <input
              type="date"
              className="
          mt-0.5
          w-60
          rounded-lg
          border
          border-slate-200
          bg-slate-50
          p-2
          text-sm
          outline-none
        "
              value={fechaMatricula}
              readOnly
            />
          </div>
          <div>
            <span className="block text-[0.8rem] text-slate-500">
              Fecha de Matricula
            </span>
            <select
              value={periodo}
              className="mt-0.5
        w-60
        rounded-lg
        border
        border-slate-200
        bg-slate-50
        p-2
        text-sm
        outline-none"
              readOnly
            >
              <option value={DateTime.now().year}>
                {`Ciclo-${DateTime.now().year}`}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <button
          type="submit"
          className={
            isValid
              ? 'rounded-md bg-[#635DFF] py-1.5 px-10 text-xs text-white'
              : 'rounded-md bg-gray-500 py-1.5 px-10 text-xs text-gray-300 cursor-not-allowed'
          }
          onClick={() => {
            matricularAlumno();
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
