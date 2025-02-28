import React from 'react';

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = props => {
  return <input className="input" {...props} />;
};

export default Input;
