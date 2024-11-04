// src/hooks/useLogin.js
import { useState, useContext } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext.jsx";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      ),
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      setIsLoading(false);
      setSuccessMessage(data.message);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);

      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    isLoading,
    errorMessage,
    successMessage,
  };
}
