import React from "react";

const Input = ({ type, name, placeholder, required, onChange, value }) => {
  return (
    <div className="input-container">
      {type !== "textarea" ? (
        <input
          className="text-input"
          type={type}
          id={name}
          autoComplete="off"
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
          onBlur={(e) => {
            if (e.target.value !== "" || value !== "") {
              e.target.nextElementSibling.classList.add("filled");
            } else {
              e.target.nextElementSibling.classList.remove("filled");
            }
          }}
        />
      ) : (
        <textarea
          className="text-input"
          id={name}
          autoComplete="off"
          placeholder={placeholder}
          required={required}
          rows="5"
          style={{resize: 'none'}}
          onChange={onChange}
          value={value}
          onBlur={(e) => {
            if (e.target.value !== "" || value !== "") {
              e.target.nextElementSibling.classList.add("filled");
            } else {
              e.target.nextElementSibling.classList.remove("filled");
            }
          }}
        ></textarea>
      )}
      <label className="label" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default Input;
