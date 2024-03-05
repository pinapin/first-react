import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <AuthLayouts title="Login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};
export default LoginPage;
