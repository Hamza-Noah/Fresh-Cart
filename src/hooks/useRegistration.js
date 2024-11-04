import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRegistration() {
  const navigate = useNavigate();
  const [isLodaing, setisLodaing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be more than 3 characters")
      .max(20, "Name must be 20 characters maximum"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Minimum eight characters, at least one letter, one number, and one special character"
      ),
    rePassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    phone: Yup.string().required("Phone number is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const onSubmit = async (values) => {
    setisLodaing(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );

      setSuccessMessage("Success");
      setisLodaing(false);
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "An error occurred");
      setisLodaing(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    isLodaing,
    errorMessage,
    successMessage,
  };
}
