import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <InputForm
        label="Email address"
        name="email"
        type="email"
        placeholder="Enter your email"
      />
      <div>
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="*********"
        />
      </div>

      <div>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default FormLogin;
