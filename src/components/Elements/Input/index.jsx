import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <div className="mt-2">
        <Input name={name} type={type} placeholder={placeholder} id={name} />
      </div>
    </div>
  );
};

export default InputForm;
