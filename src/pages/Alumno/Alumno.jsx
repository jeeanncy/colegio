import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useMemo, useState } from 'react';
import colegioApi from '../../api/colegioApi';
import Table from '../../components/Table';

export default function Alumno() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    colegioApi
      .get('/alumno')
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Alumno',
        accessor: 'alumno_id',
      },
      {
        Header: 'Documento',
        accessor: 'documento',
      },
      {
        Header: 'Num Documento',
        accessor: 'numero_documento',
      },
      {
        Header: 'Edad',
        accessor: 'edad',
      },
      {
        Header: 'Sexo',
        accessor: 'sexo',
      },
      {
        Header: 'Nivel',
        accessor: 'nivel',
      },
      {
        Header: 'Grado',
        accessor: 'grado',
      },
      {
        Header: 'Modalidad',
        accessor: 'modalidad',
      },
      {
        Header: 'Turno',
        accessor: 'turno',
      },
      {
        Header: 'Estado',
        accessor: 'estado',
      },
      {
        Header: 'Situacion',
        accessor: 'situacion',
      },
      {
        Header: 'Matriculado',
        accessor: 'matriculado',
      },
    ],
    []
  );

  return (
    <div className="flex w-full flex-col items-center gap-10 border-t border-gray-100 p-10 shadow-xl shadow-slate-400/10">
      <FontAwesomeIcon
        className="mb-3 text-5xl text-orange-400"
        icon={faUsersLine}
      />
      <span className="text-lg font-medium">Lista de alumnos</span>

      <div className="w-full overflow-x-auto">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
