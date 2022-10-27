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
          disabled={selectValues.length === 0}
          name={id}
          value={value}
          onChange={onInputChange}
          className="mt-0.5
        block
        w-60
        rounded-lg
        border
        border-slate-200
        bg-slate-50
        p-2
        text-sm
        outline-none"
        >
          <option disabled value="">
            {placeholder}
          </option>
          {selectValues.map((slctValue) => (
            <option key={slctValue} value={slctValue}>
              {slctValue}
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
              w-60
              rounded-lg
              border
              border-slate-200
              bg-slate-50
              p-2
              text-sm
              outline-none
            "
        />
      )}
    </div>
  );
}
