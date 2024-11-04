import useResetPssword from "../../hooks/useResetPssword.js";

export default function ResetPssword() {
  const { fokir, isLodaing, errorMessage, successMessage } = useResetPssword();
  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    fokir;

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
              {touched.email && errors.email && (
                <p className="text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="new-password"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Your New Password:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                id="new-password"
                value={values.newPassword}
                name="newPassword"
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {touched.password && errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
              disabled={isLodaing}
            >
              Set New Password{" "}
              {isLodaing && <i className="fa fa-spinner fa-spin"></i>}
            </button>
            {errorMessage && (
              <p className="text-red-500 text-center">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-cente">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
