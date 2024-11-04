import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

export default function Login() {
  const { formik, isLoading, errorMessage, successMessage } = useLogin();
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    formik;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full lg:w-1/3 md:w-1/2 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Welcome to FreshCart
        </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="email"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Email:
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              value={values.email}
              name="email"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div className="flex items-start flex-col justify-start">
            <label
              htmlFor="password"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Password:
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="password"
              value={values.password}
              name="password"
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            disabled={isLoading}
          >
            Login {isLoading && <i className="fa fa-spinner fa-spin"></i>}
          </button>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}
          <div className="text-center text-gray-500 dark:text-gray-300">
            If you do not have an account
            <Link to="/register" className="text-blue-500 hover:text-blue-600">
              {" "}
              register
            </Link>
            <br />
            <Link
              to="/forgetpassword"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Forgot Your Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
