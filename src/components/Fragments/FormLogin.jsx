import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = "/products";
  };
  return (
    <form className="space-y-6" onSubmit={handleLogin}>
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
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
