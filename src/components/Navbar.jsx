import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faChevronDown,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-[#00a8ff] text-white">
      <div className=" m-auto flex max-w-[75rem] justify-between px-40 py-5">
        <Link to="/" className="space-x-2">
          <FontAwesomeIcon icon={faSchool} />
          <span className="font-medium uppercase">Jesus de Nazareno</span>
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
