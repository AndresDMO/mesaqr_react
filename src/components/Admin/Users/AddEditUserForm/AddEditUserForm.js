import React from 'react'
import {Form, Button, Checkbox} from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./AddEditUserForm.scss";

export function AddEditUserForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchame()),
        validationOnChange: false,
        onSubmit: (formValue) => {
            console.log("Formulario Enviado");
            console.log(formValue);
        }
    });
  return (
    <Form className="add-edit-user-form" onSubmit={formik.handleSubmit}>
        <Form.Input 
        name="usernaame" 
        label="Nombre de Usuario" 
        value={formik.values.username} 
        onChange={formik.handleChange}
        error={formik.username}/>

        <Form.Input 
        name="email" 
        label="Correo Electrónico"  
        value={formik.values.email} 
        onChange={formik.handleChange}
        error={formik.email}/>

        <Form.Input
        name="first_name" 
        label="Nombre Tienda" 
        value={formik.values.first_name} 
        onChange={formik.handleChange}
        error={formik.first_name} />

        <Form.Input
         name="password" 
        type="password" 
        label="Contraseña" 
        value={formik.values.password} 
        onChange={formik.handleChange}
        error={formik.password} />

        <div className="add-edit-user-form__active">
            <Checkbox toggle 
            checked={formik.values.is_active} 
            onChange={(_, data) => formik.setFieldValue("is_active", data.checked)}
            label="¿Usuario Activo?" /> 
        </div>

        <div className="add-edit-user-form__admin">
            <Checkbox toggle 
            checked={formik.values.is_staff} 
            onChange={(_, data) => formik.setFieldValue("is_staff", data.checked)}
            label="¿Usuario Administrador?" /> 
        </div>

        <Button type="submit" primary fluid content="Crear" />
    </Form>
  )
}

function initialValues() {
    return {
        username: "",
        email: "",
        first_name: "",
        password: "",
        is_active: true,
        is_staff: false
    };
}

function newSchame() {
    return {
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        first_name: Yup.string(),
        password: Yup.string().required(true),
        is_active: Yup.bool().required(true),
        is_staff: Yup.bool().required(true)
    };
}