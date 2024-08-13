import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Registration() {
  let { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
      },
      onSubmit: register,
      validationSchema: Yup.object({
        name: Yup.string()
          .required("Name is required")
          .min(3, "Name Must be more than 3")
          .max(20, "Name Must be 20 characters maximum"),
        email: Yup.string()
          .required("Email is required")
          .email("enter valid Email"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            "Minimum eight characters, at least one letter, one number and one special character"
          ),
        rePassword: Yup.string()
          .required("RePassword is required")
          .oneOf(
            [Yup.ref("password")],
            "Password and RePassword must be matched"
          ),
      }),
    });

  async function register(e) {
    let { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      values
    );
  }

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
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Already have an account?{" "}
            </span>
            <a href="#" className="text-blue-500 hover:text-blue-600">
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
