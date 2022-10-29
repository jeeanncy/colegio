import {
  faFilePen,
  faGraduationCap,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import HomeCard from '../components/HomeCard';

export default function Home() {
  return (
    <>
      <span className="m-2 text-4xl font-bold">Hola Sandro Ramos</span>
      <span className="text-3xl font-medium text-[#e74040]">Bienvenido</span>
      <div className="flex w-full flex-1 flex-wrap items-center justify-evenly gap-16 p-8">
        <HomeCard icon={faFilePen} title="Apoderado" path="historial" />
        <HomeCard icon={faGraduationCap} title="Alumnos" path="alumno" />
        <HomeCard
          icon={faChalkboardTeacher}
          title="Profesores"
          path="profesores"
        />
      </div>
    </>
  );
}
