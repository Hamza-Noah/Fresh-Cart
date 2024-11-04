import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function useResetCode() {
  const [isLodaing, setisLodaing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const nabvigate = useNavigate();

  const validationSchema = Yup.object({
    resetCode: Yup.string().required("Reset Code is required"),
  });

  const initialValues = {
    resetCode: "",
  };

  async function onSubmit(values) {
    setisLodaing(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        values
      );
      setSuccessMessage(data.message);

      setTimeout(() => {
        nabvigate("/resetpssword");
      }, 2000);

      setisLodaing(false);
    } catch (error) {
      setErrorMessage(error);
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
