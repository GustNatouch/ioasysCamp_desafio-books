import React, { useRef } from "react";
import { StyledEmailInput, StyledFormWrapper, StyledLabelEmail, StyledPasswordInput, StyledLabelPassword, StyledButton } from "./styled";


export const Form = ({
    buttonTitle,
    onSubmit,
    handleSubmit,
    register,
    ...props}) => {
    
    return (
        <StyledFormWrapper onSubmit={handleSubmit(onSubmit)} >
            <StyledEmailInput name= "email" type= "email" {...register('email')} {...props} />

            <StyledLabelEmail>Email</StyledLabelEmail>
            
            <StyledPasswordInput name="senha" type= "password" {...register('senha')} {...props} />

            <StyledLabelPassword>Senha</StyledLabelPassword>
            
            <StyledButton><a href="/books" style={{textDecoration: "none",}}>{buttonTitle}</a></StyledButton>
        </StyledFormWrapper>
    )
}