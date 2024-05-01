import React from "react"
import { useState } from "react"

interface UIInputProps {
  id?: any
  name?: any
  label?: any
  isRequired?: any
  placeholder?: any
  type?: any
  style?: any
  onChange?: any
  error?: any
  value?: any
  instruction?: any
  disabled?: any
  autoComplete?: any
  readOnly?: any
  max?: any
  min?: any
  classname?: any
}

export const UIInput: React.FC<UIInputProps> = ({
  id,
  name,
  label,
  isRequired,
  placeholder,
  type,
  style,
  onChange,
  error,
  value,
  instruction,
  disabled,
  autoComplete,
  readOnly,
  max,
  min,
  classname
}) => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow((prev) => !prev)
  return (
    <div className="inputfield ">
      {label ? (
        <label htmlFor={id ? id : ""} className="inputfield-label">
          {label} {isRequired ? "*" : ""}
        </label>
      ) : null}

      <input
        type={type === "password" ? (show ? "text" : "password") : type}
        step={type === "number" ? "any" : undefined}
        id={id}
        name={name}
        className={`inputfield-input ${error ? "error" : ""} ${classname}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value ?? ""}
        required={isRequired}
        disabled={disabled}
        autoComplete={autoComplete ?? name}
        min={min}
        max={max}
        readOnly={readOnly}
        style={style}
      />
      {error ? <span className="inputfield-error">{error}</span> : null}

      {type === "password" ? (
        <i
          className={`fa-regular fa-eye${show ? "" : "-slash"}`}
          onClick={toggleShow}
          style={{
            bottom: label && !error ? "35%" : !label && error ? "65%" : "50%",
          }}
        ></i>
      ) : null}

      {instruction ? (
        <p className="inputfield-instruction">{instruction}</p>
      ) : null}
    </div>
  )
}
