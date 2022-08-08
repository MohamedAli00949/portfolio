import React from "react";

const Input = (props) => {
  return (
    <div className="input-container">
      {props.type !== "textarea" ? (
        <input
          className="text-input"
          id={props.name}
          autoComplete="off"
          {...props}
          onBlur={(e) => {
            if (e.target.value !== "" || props.value !== "") {
              e.target.nextElementSibling.classList.add("filled");
            } else {
              e.target.nextElementSibling.classList.remove("filled");
            }
          }}
        />
      ) : (
        <textarea
          className="text-input"
          id={props.name}
          autoComplete="off"
          {...props}
          rows="5"
          style={{resize: 'none'}}
          onBlur={(e) => {
            if (e.target.value !== "" || props.value !== "") {
              e.target.nextElementSibling.classList.add("filled");
            } else {
              e.target.nextElementSibling.classList.remove("filled");
            }
          }}
        ></textarea>
      )}
      <label className="label" htmlFor={props.name}>
        {props.name}
      </label>
    </div>
  );
};

export default Input;
