import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
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
        accessor: 'nombres',
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
    <div className="my-8 flex w-fit flex-col items-center gap-10 border-t border-gray-100 p-10 shadow-xl shadow-slate-400/10">
      <div className="flex flex-col">
        <FontAwesomeIcon
          className="mb-3 text-5xl text-orange-400"
          icon={faUsersLine}
        />
        <span className="text-lg font-medium">Lista de Alumno</span>
      </div>
      <div className="flex w-full justify-end">
        <Link to="/registalumno">
          <button
            type="submit"
            className="rounded-md bg-[#635DFF] py-1.5 px-10 text-xs text-white"
          >
            Anadir
          </button>
        </Link>
      </div>
      <div className="w-[70rem] overflow-x-auto">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
