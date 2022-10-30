import {
  faFilePen,
  faGraduationCap,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import HomeCard from '../components/HomeCard';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-center">
        <span className="m-2 block text-4xl font-bold">Hola Sandro Ramos</span>
        <span className="text-3xl font-medium text-[#e74040]">Bienvenido</span>
      </div>

      <div className="flex w-full flex-1 flex-wrap items-center justify-evenly gap-16">
        <HomeCard icon={faFilePen} title="Apoderado" path="apoderado" />
        <HomeCard icon={faGraduationCap} title="Alumnos" path="alumno" />
        <HomeCard
          icon={faChalkboardTeacher}
          title="Profesores"
          path="profesor"
        />
      </div>
    </div>
  );
}
