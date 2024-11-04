import { useForgotPassword } from "../../hooks/useForgotPassword";

export default function ForgetPassword() {
  const {formik, isLodaing, errorMessage, successMessage } = useForgotPassword();
  const {handleBlur, handleChange, handleSubmit, values, errors, touched} = formik;
  

  return (
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
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            disabled={errors.email}
          >
            Send Reset Code To Your Email{" "}
            {isLodaing && <i className="fa fa-spinner fa-spin"></i>}
          </button>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
