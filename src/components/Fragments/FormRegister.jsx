import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <InputForm
        label="Fullname"
        name="fullname"
        type="text"
        placeholder="Insert your fullname"
      />
      <InputForm
        label="Email address"
        name="email"
        type="email"
        placeholder="Enter your email"
      />

      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*********"
      />
      <InputForm
        label="Confirm Password"
        name="confirmpassword"
        type="password"
        placeholder="*********"
      />

      <div>
        <Button type="button">Register</Button>
      </div>
    </form>
  );
};

export default FormRegister;
