import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("enter valid Email"),
        password: Yup.string()
          .required("Password is required")
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            "Minimum eight characters, at least one letter, one number and one special character"
          ),
      }),
    });
 const navigate =    useNavigate();
  async function onSubmit() {
    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );

      console.log("@".repeat(22));
      
    } catch {
      console.log("err");
    }

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
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
