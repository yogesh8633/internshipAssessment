import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const useRentCar = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode:"onChange",
    reValidateMode:"onChange"
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form Submitted Successfully !!!");
    navigate("/car-layout");

  };
  return { register, handleSubmit, onSubmit, errors };
};
export default useRentCar;
