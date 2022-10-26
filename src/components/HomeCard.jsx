import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomeCard({ icon, title }) {
  return (
    <div className="max-w-md shadow-xl shadow-slate-400/10 rounded-lg p-8">
      <div className="bg-[#e74040] w-fit p-4 rounded-full mb-2">
        <FontAwesomeIcon className="text-white text-xl" icon={icon} />
      </div>
      <span className="text-xl font-bold mb-2 block">{title}</span>
      <div className="bg-[#e74040] h-0.5 w-14 mb-2" />
      <p className="text-sm text-slate-400 max-w-[14rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis
        inventore culpa aperiam eius porro et modi fugit dolor minus laboriosam
        accusamus dicta itaque hic voluptas repellat sequi, vero totam.
      </p>
    </div>
  );
}
