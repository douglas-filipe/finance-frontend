import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  register: any; // declare register props
}

export const Input: React.FC<InputProps> = ({ id, register, ...rest }) => {
  return (
    <div>
      <input name={id} id={id} ref={register} />
    </div>
  );
};
