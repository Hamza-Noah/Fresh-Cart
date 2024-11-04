import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function useResetPssword() {
  const [isLodaing, setisLodaing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("enter valid Email"),
    newPassword: Yup.string()
      .required("New Password is required")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Minimum eight characters, at least one letter, one number and one special character"
      ),
  });

  const initialValues = {
    email: "",
    newPassword: "",
  };

  async function onSubmit(values) {
    setisLodaing(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      let { data } = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        values
      );
      setisLodaing(false);
      setSuccessMessage(data.message);
      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setisLodaing(false);
    }
  }

  const fokir = useFormik({
    onSubmit,
    validationSchema,
    initialValues,
  });

  return { fokir, isLodaing, errorMessage, successMessage };
}
