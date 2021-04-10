import React from "react";
import { Form } from "../../components/Form";
import { Header } from "../../components/HeaderLogin";
import { StyledLoginWrapper } from "./styled.js";
import { useForm } from "react-hook-form";

export const Login = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);

      
    };

    return(
        <StyledLoginWrapper>
            <Header title= "Books" />,
            <Form register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                buttonTitle="Entrar"/>
        </StyledLoginWrapper>
    )
};