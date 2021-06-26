
import React from 'react'
import Typography from '@material-ui/core/Typography'
// import { makeStyles } from '@material-ui/core/styles'
import {useForm} from "react-hook-form"
import { MainContainer } from './MainContainer'
import { Form } from './Form'
import { Input } from './Input'
import { PrimaryButton } from './PrimaryButton'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';




const schema=yup.object().shape({
    firstName:yup.string().required("First name is required"),

    lastName:yup.string().required("Last name is required")
})
const StepOne = () => {

    const {register,handleSubmit,errors}=useForm({
        mode:"onBlur",
        resolver:yupResolver(schema)

    })

    const onSubmit=(data)=>{
        console.log(data);
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">😀 Step 1</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Input 
                    type="text"
                    ref={register()}
                    id="firstName"
                    name="firstName"
                    label="First Name"
                />

                <Input 
                    type="text"
                    ref={register()}
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                />

                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default StepOne
