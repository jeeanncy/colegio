import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function HomeCard({ icon, title, path }) {
  return (
    <Link
      to={path}
      className="max-w-md rounded-lg border-t border-gray-100 p-8 shadow-xl shadow-slate-400/10"
    >
      <div className="mb-2 w-fit rounded-full bg-[#e74040] p-4">
        <FontAwesomeIcon className="text-xl text-white" icon={icon} />
      </div>
      <span className="mb-2 block text-xl font-bold">{title}</span>
      <div className="mb-2 h-0.5 w-14 bg-[#e74040]" />
      <p className="max-w-[14rem] text-sm text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis
        inventore culpa aperiam eius porro et modi fugit dolor minus laboriosam
        accusamus dicta itaque hic voluptas repellat sequi, vero totam.
      </p>
    </Link>
  );
}
