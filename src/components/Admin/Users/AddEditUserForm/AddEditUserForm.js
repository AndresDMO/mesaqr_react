import React from 'react'
import {Form, Button, Checkbox} from "semantic-ui-react";
import "./AddEditUserForm.scss";

export function AddEditUserForm() {
  return (
    <Form className="add-edit-user-form">
        <Form.Input name="usernaame" label="Nombre de Usuario" />
        <Form.Input name="email" label="Correo Electrónico" />
        <Form.Input name="first_name" label="Nombre Tienda" />
        <Form.Input name="password" type="password" label="Contraseña" />

        <div className="add-edit-user-form__active">
            <Checkbox toggle label="¿Usuario Activo?" /> 
        </div>

        <div className="add-edit-user-form__admin">
            <Checkbox toggle label="¿Usuario Administrador?" /> 
        </div>

        <Button type="submit" primary fluid content="Crear" />
    </Form>
  )
}
