import React from "react";
import { useForm } from "react-hook-form";

 function Form() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      {errors.firstName?.type === 'required'}

      <input type="submit" />
    </form>
  );
}

export default Form;