import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, title2, title3, link } = props;
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
      <p class="mt-10 text-center text-sm text-gray-500">
        {title2}
        <Link
          to={link}
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          {title3}
        </Link>
      </p>
    </>
  );
};

export default AuthLayouts;
