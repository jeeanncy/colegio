import { DateTime } from 'luxon';

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
      <span className="block text-[0.8rem] text-slate-500">{description}</span>
      {selectValues ? (
        <select
          disabled={selectValues.length === 0}
          required
          name={id}
          value={value}
          onChange={onInputChange}
          className="mt-0.5
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
          {selectValues.map(({ id: optId, name: optName }) => (
            <option key={optName} value={optId}>
              {optName}
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
          max={
            type === 'date'
              ? DateTime.now().minus({ years: 3 }).toFormat('yyyy-MM-dd')
              : ''
          }
          required
          className="
              mt-0.5
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
