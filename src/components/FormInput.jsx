export default function FormInput({ name, placeholder, type }) {
  return (
    <div>
      <span className="text-[0.8rem] text-slate-500">{name}</span>
      <input
        name={name}
        required
        type={type}
        className="
              mt-0.5
              block
              p-2
              rounded-lg
              w-60
              text-sm
              bg-slate-50
              outline-none
              border-slate-200
              border
            "
        placeholder={placeholder}
      />
    </div>
  );
}
