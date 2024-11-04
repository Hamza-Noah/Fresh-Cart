import useResetCode from "../../hooks/useResetCode";

export default function ResetCode() {
  const { formik, isLodaing, errorMessage, successMessage } = useResetCode();
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    formik;

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
              htmlFor="reset-code"
              className="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >
              Code:
            </label>
            <input
              type="text"
              id="reset-code"
              name="resetCode"
              value={values.resetCode}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {touched.resetCode && errors.resetCode && (
              <p className="text-red-600">{errors.resetCode}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            disabled={errors.resetCode}
          >
            Enter Reset Code{" "}
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
