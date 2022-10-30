import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { Link } from 'react-router-dom';
import colegioApi from '../../api/colegioApi';
import Table from '../../components/Table';

export default function Profesor() {
  const [data, setdata] = useState([]);
  const [searchValue, setsearchValue] = useState('');

  const getProfesores = () => {
    colegioApi
      .get('/profesor')
      .then((response) => {
        setdata(
          response.data.map((item) => ({
            ...item,
            custom: {
              id: item.profesor_id,
            },
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfesores();
  }, []);

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      colegioApi
        .get(`/profesor/search/${searchValue}`)
        .then((response) => {
          setdata(
            response.data.map((item) => ({
              ...item,
              custom: {
                id: item.profesor_id,
              },
            }))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProfesores();
    }
  }, [searchValue]);

  const eliminar = useCallback(
    (id) => () => {
      colegioApi
        .delete(`/profesor/${id}`)
        .then((response) => {
          console.log(response.data.mensaje);
          getProfesores();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'nombres',
      },
      {
        Header: 'Apellido Paterno',
        accessor: 'apellido_paterno',
      },
      {
        Header: 'Apellido Materno',
        accessor: 'apellido_materno',
      },
      {
        Header: 'Correo',
        accessor: 'email',
      },

      {
        Header: '',
        accessor: 'custom',
        // eslint-disable-next-line react/no-unstable-nested-components
        Cell: ({ value }) => (
          <div className="flex justify-between gap-4">
            <Link to={`/formprofesor/${value.id}`}>
              <FontAwesomeIcon
                className="text-xl text-blue-500"
                icon={faPenToSquare}
              />
            </Link>

            <FontAwesomeIcon
              className="cursor-pointer text-xl text-red-500"
              icon={faTrash}
              onClick={eliminar(value.id)}
            />
          </div>
        ),
      },
    ],
    [eliminar]
  );

  return (
    <div className="w-full space-y-4 border-t border-gray-100 p-10 shadow-xl shadow-slate-400/10">
      <div className="text-center">
        <FontAwesomeIcon
          className="mb-3 text-5xl text-orange-400"
          icon={faUsersLine}
        />
        <span className="block text-lg font-medium">Lista de Profesores</span>
      </div>
      <div className="flex w-full justify-end">
        <div className="hover-scale-item flex w-32 cursor-default items-center gap-2 rounded-full bg-gray-100 py-3 px-5 hover:scale-100 md:w-56">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm " />
          <input
            id="search"
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Buscar"
            value={searchValue}
            onChange={({ target }) => {
              const { value } = target;
              setsearchValue(value);
            }}
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto border">
        <Table columns={columns} data={data} />
      </div>
      <div className="flex w-full justify-end">
        <Link to="/formprofesor">
          <button
            type="submit"
            className="rounded-md bg-[#635DFF] py-1.5 px-10 text-sm text-white"
          >
            Anadir
          </button>
        </Link>
      </div>
    </div>
  );
}
