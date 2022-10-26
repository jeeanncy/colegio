import {
  faFilePen,
  faGraduationCap,
  faDisplay,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import HomeCard from '../components/HomeCard';

export default function Home() {
  return (
    <>
      <span className="text-4xl font-bold m-2">Hola Sandro Ramos</span>
      <span className="text-3xl font-medium text-[#e74040]">Bienvenido</span>
      <div className="flex-1 items-center flex w-full justify-evenly p-8 gap-16 flex-wrap">
        <HomeCard icon={faFilePen} title="Matricula" path="matricula" />
        <HomeCard icon={faDisplay} title="Historial" path="historial" />
        <HomeCard icon={faGraduationCap} title="Alumnos" path="alumnos" />
        <HomeCard
          icon={faChalkboardTeacher}
          title="Profesores"
          path="profesores"
        />
      </div>
    </>
  );
}
