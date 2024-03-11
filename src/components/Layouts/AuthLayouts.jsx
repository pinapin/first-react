import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{children}</div>

      <Navigation type={type} />

      {/* PAKAI TERNARY OPERATOR */}
      {/* <p className="mt-10 text-center text-sm text-gray-500">
        {type === "login"
          ? "Don't have an account? "
          : "Already have an account? "}

        {type === "login" && (
          <Link
            to="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        )}

        {type === "register" && (
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        )}
      </p> */}
    </>
  );
};

// PAKAI FUNCTION
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-10 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-10 text-center text-sm text-gray-500">
        Aleady have an account?{" "}
        <Link
          to="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
