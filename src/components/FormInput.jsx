export default function FormInput({
  id,
  description,
  placeholder,
  type,
  selectValues,
  value,
  onInputChange,
}) {
  return (
    <div>
      <span className="text-[0.8rem] text-slate-500">{description}</span>
      {selectValues ? (
        <select
          name={id}
          defaultValue=""
          value={value}
          onChange={onInputChange}
          className="mt-0.5
        block
        p-2
        rounded-lg
        w-60
        text-sm
        bg-slate-50
        outline-none
        border-slate-200
        border"
        >
          <option disabled value="">
            {placeholder}
          </option>
          {selectValues.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={id}
          type={type}
          value={value}
          onChange={onInputChange}
          placeholder={placeholder}
          required
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
        />
      )}
    </div>
  );
}
