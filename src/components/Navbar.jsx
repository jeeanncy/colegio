import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChevronDown,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-[#00a8ff] text-white">
      <div className=" px-40 py-5 max-w-[75rem] flex justify-between m-auto">
        <Link to="/" className="space-x-2">
          <FontAwesomeIcon icon={faSchool} />
          <span className="uppercase font-medium">Jesus de Nazareno</span>
        </Link>

        <div className="space-x-2">
          <FontAwesomeIcon icon={faUser} />
          <span>Mi cuenta</span>
          {/* <div> */}
          <FontAwesomeIcon icon={faChevronDown} />
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}
