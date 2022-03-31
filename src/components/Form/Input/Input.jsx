import React from "react";

export function Input({
  type,
  id,
  name,
  placeholder,
  isRequired = true,
  value,
  setUserDetails,
  userDetails,
}) {

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <input
      className='form-input form-input-lg pd-1'
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleInput}
      required={isRequired}
    />
  );
}
