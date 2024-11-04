import { Link } from "react-router-dom";
import { useRegistration } from "../../hooks/useRegistration";

export default function Registration() {
  const { formik, isLodaing, errorMessage, successMessage } = useRegistration();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    formik;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full lg:w-1/3 md:w-1/2 mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
          <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
            Welcome to FreshCart
          </h1>
          <form
            onSubmit={handleSubmit}
            action="#"
            className="w-full flex flex-col gap-4"
          >
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="name"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Name:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="username"
                value={values.name}
                name="name"
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {touched.name && errors.name && <p>{errors.name}</p>}
            </div>
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
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="confirmPassword"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Confirm Password:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                id="confirmPassword"
                value={values.rePassword}
                name="rePassword"
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {touched.rePassword && errors.rePassword && (
                <p>{errors.rePassword}</p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="phone"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Phone Number:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
                id="phone"
                value={values.phone}
                name="phone"
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {touched.phone && errors.phone && <p>{errors.phone}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-400"
              disabled={isLodaing}
            >
              Register {isLodaing && <i className="fa fa-spinner fa-spin"></i>}
            </button>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center">{successMessage}</p>
            )}
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
            </span>
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
