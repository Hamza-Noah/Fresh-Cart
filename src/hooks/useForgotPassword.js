import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useForgotPassword() {
  const [isLodaing, setisLodaing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const nabvigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("enter valid Email"),
  });

  const initialValues = {
    email: "",
    resetCode: "",
  };

  async function onSubmit(values) {
    setisLodaing(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        values
      );
      setSuccessMessage(data.message);

      setTimeout(() => {
        nabvigate("resetcode");
      }, 2000);

      setisLodaing(false);
    } catch (error) {
      setErrorMessage(error.message);
      setisLodaing(false);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return { formik, isLodaing, errorMessage, successMessage };
}
