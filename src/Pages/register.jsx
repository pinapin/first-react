import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <AuthLayouts title="Register">
        <FormRegister />
      </AuthLayouts>
    </div>
  );
};
export default RegisterPage;
